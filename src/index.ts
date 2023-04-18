import { createSubgraphClient, gql } from "@colony/sdk/graph";
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
const CHRONODAO = process.env.CHRONODAO_CHANNEL_ID
const SERVERTEST = process.env.TEST_SERVER_CHANNEL_ID

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
  if (colonyPaymentData.transactionId != lastTransaction) 
 
  {
    const embed = getEmbed(colonyPaymentData);
    const message = getDiscordMessage(embed, colonyPaymentData);
    const channel = getDiscordChannel(SERVERTEST);
    await channel.send(message);
    lastTransaction = colonyPaymentData.transactionId;

    if (colonyPaymentData.colonyName === "chronodao"){
      const channel = getDiscordChannel(CHRONODAO);

      await channel.send(message);
    }
  }
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
              token {
                symbol
                decimals
              }
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

function getGqlVariables(): any {
  const VARIABLES = {
    orderDirection: "desc",
    orderBy: "timestamp",
    first: 1,
  };
  return VARIABLES;
}

function getEmbed(p: colonyPaymentData) {
  const embed = new EmbedBuilder()
    .setColor(0x1cae9f)
    .setTitle("New Payment")
    .setDescription(
      `**${p.amountPayed} ${p.colonyTickers}** has been payed to **${p.recipientUsername}** (${p.recipient})`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300482191430/Forced.png"
    )
    .setAuthor({
      name: `${p.colonyName}`,
      iconURL:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/58a7369b-9a87-4c24-b8e0-99d71ff068ba-profile_image-70x70.png",
    })
    .addFields({ value: `In **${p.domainName}** team.`, name: "\u200B" });
  return embed;
}

function getDiscordMessage(embed: any, p: colonyPaymentData) {
  let url= `https://xdai.colony.io/colony/${p.colonyName}/tx/${p.transactionId}`
  console.log(url)
  const message = {
   // content: "@business",
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            url: `https://xdai.colony.io/colony/${p.colonyName}/tx/${p.transactionId}`,
            style: 5,
            label: "Colony Tsx",
            disabled: false,
            type: 2,
          },
          {
            url: `https://gnosisscan.io/tx/${p.transactionId}`,
            style: 5,
            label: "Explorer Tsx",
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

function getDiscordChannel(channelId: string) {
  const channel = client.channels.cache.get(channelId);
  return channel;
}

async function parsePaymentData(data: any): Promise<colonyPaymentData> {
  const paymentInfo = data.payment;
  const fundPot = paymentInfo.fundingPot.fundingPotPayouts[0];
  const decimals = Math.pow(10, fundPot.token.decimals)
  const fundingAmount = fundPot.amount / decimals;
  const amountPayed = Math.floor(fundingAmount * 100 / 100);

  const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
  const signer = new ethers.Wallet(
    "55f32b12ca4ee3ce5157d40f42a8cb0171aa37e39600e2a906aca01e966275bc",
    provider
  );

  const recipient: string = paymentInfo.to;
  const colonyNetwork = await ColonyNetwork.init(provider);
  const recipientUsername = await colonyNetwork.getUsername(recipient);

  let paymentData: colonyPaymentData = {
    colonyName: paymentInfo.colony.ensName.split(".")[0],
    colonyTickers: paymentInfo.fundingPot.fundingPotPayouts[0].token.symbol,
    domainName: paymentInfo.domain.name,
    recipientUsername,
    colonyAdress: paymentInfo.domain.colonyAddress,
    recipient: formatAddress(recipient),
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

function formatAddress(address: string, size = 4) {
  var first = address.slice(0, size + 1);
  var last = address.slice(-size);
  return first + "..." + last;
}
