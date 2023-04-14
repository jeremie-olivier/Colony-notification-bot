import { createSubgraphClient, gql } from "@colony/sdk/graph";
//@ts-ignore
import { ColonyNetwork, ColonyRpcEndpoint } from "@colony/sdk";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
import { ethers } from "ethers";
import { providers } from "ethers";
import * as dotenv from "dotenv";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";
dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN;

async function run(): Promise<any> {
  await client.login(TOKEN);
}
run();

let lastTransaction: string;

function listenToColonyEvent(): void {
  const GQL = getGQLrequest();
  const GQLVARIABLES = getGqlVariables();
  const subscription = getGqlSubscription(GQL, GQLVARIABLES);
  pipe(
    subscription,
    // @ts-ignore
    subscribe((r) => createAndSendMessage(r.data.oneTxPayments[0]))
  );
}

//when discord is ready
client.once("ready", listenToColonyEvent);

async function createAndSendMessage(result: any): Promise<void> {
  console.log(createAndSendMessage);
  let colonyPaymentData = await parsePaymentData(result);
  console.log(colonyPaymentData.transactionId);
  console.log(lastTransaction);
  if (colonyPaymentData.transactionId != lastTransaction) {
    const embed = getEmbed(colonyPaymentData);
    const message = getDiscordMessage(embed);
    const channel = getDiscordChannel();
    await channel.send(message);
    lastTransaction = colonyPaymentData.transactionId;
  }
}

function getGqlVariables(): any {
  const VARIABLES = {
    orderDirection: "desc",
    orderBy: "timestamp",
    first: 1,
  };
  return VARIABLES;
}

function getGqlSubscription(
  gql: string | DocumentNode | TypedDocumentNode<any, any>,
  variables: any
): any {
  const colonySubgraph = createSubgraphClient();
  const subscription = colonySubgraph.subscription(gql, variables);
  return subscription;
}

function getGQLrequest(): any {
  const QUERY = gql`
    subscription Subscription(
      $orderBy: OneTxPayment_orderBy
      $orderDirection: OrderDirection
      $first: Int
    ) {
      oneTxPayments(
        orderBy: $orderBy
        orderDirection: $orderDirection
        first: $first
      ) {
        nPayouts
        payment {
          colony {
            ensName
            id
            token {
              symbol
            }
          }
          fundingPot {
            fundingPotPayouts {
              amount
            }
          }
          to
          domain {
            colonyAddress
            name
          }
        }
        transaction {
          id
        }
      }
    }
  `;
  return QUERY;
}

function getEmbed(p: colonyPaymentData) {
  const embed = new EmbedBuilder()
    .setColor(0x1cae9f)
    .setTitle("New Payment")
    .setDescription(
      `${p.amountPayed} ${p.colonyTickers} has been payed to ${p.recipientUsername} ${p.recipient}`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300482191430/Forced.png"
    )
    .setAuthor({
      name: `${p.colonyName}`,
      iconURL:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/58a7369b-9a87-4c24-b8e0-99d71ff068ba-profile_image-70x70.png",
    })
    .addFields({ name: `In ${p.domainName} team.`, value: "\u200B" });
  return embed;
}

function getDiscordMessage(embed: any) {
  const message = {
    content: "@business",
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: "View transaction on Colony",
            url: "https://xdai.colony.io/colony/chronodao/tx/0xa04eea13a88920facb23b9d305bcf8aadbcbaccda595a3c53d821be1a374df00",
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embeds: [embed],
  };
  return message;
}

function getDiscordChannel() {
  const channel = client.channels.cache.get("1034582332478337106");
  return channel;
}

async function parsePaymentData(data: any): Promise<colonyPaymentData> {
  const paymentInfo = data.payment;
  const fundingAmountWei = paymentInfo.fundingPot.fundingPotPayouts[0].amount;
  const fundingAmountEth = ethers.utils.formatEther(fundingAmountWei);
  const amountPayed = Math.floor(parseFloat(fundingAmountEth) * 100) / 100;

  const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
  const signer = new ethers.Wallet(
    "55f32b12ca4ee3ce5157d40f42a8cb0171aa37e39600e2a906aca01e966275bc",
    provider
  );

  const recipient = paymentInfo.to;
  const colonyNetwork = await ColonyNetwork.init(provider);
  const recipientUsername = await colonyNetwork.getUsername(recipient);

  let paymentData: colonyPaymentData = {
    colonyName: `${paymentInfo.colony.ensName.split(".")[0]} Colony's`,
    colonyTickers: paymentInfo.colony.token.symbol,
    domainName: paymentInfo.domain.name,
    recipientUsername,
    colonyAdress: paymentInfo.domain.colonyAddress,
    recipient,
    amountPayed,
    transactionId: data.transaction.id,
  };
  return paymentData;
}

interface colonyPaymentData {
  colonyName: string;
  colonyTickers: string;
  domainName: string;
  recipientUsername: string | null;
  colonyAdress: string;
  recipient: string;
  amountPayed: number;
  transactionId: string;
}
