import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { ColonyNetwork, ColonyRpcEndpoint } from "@colony/sdk";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
import { ethers } from "ethers";
import { providers } from "ethers";
import * as dotenv from "dotenv";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";
import { walletToDiscord } from "../utility/WalletToDiscord";

dotenv.config();

export async function runPayment(
  discordClient: any,
  config: any
): Promise<any> {
  const GQL = getGQLrequest();
  const GQLVARIABLES = getGqlVariables();
  const subscription = getGqlSubscription(GQL, GQLVARIABLES);
  pipe(
    subscription,
    subscribe((r) =>
      createAndSendMessage(
        discordClient,
        config,
        // @ts-ignore
        r.data.oneTxPayments[0]
      )
    )
  );
}

let lastTransaction: string;

async function createAndSendMessage(
  discordClient: any,
  config: any,
  result: any
): Promise<void> {
  let colonyPaymentData = await parsePaymentData(result);

  if (colonyPaymentData.transactionId != lastTransaction) {
    const embed = getEmbed(
      colonyPaymentData,
      config,
      result.transaction.block.timestamp
    );
    const message = getDiscordMessage(embed, colonyPaymentData);
    lastTransaction = colonyPaymentData.transactionId;

    // if (colonyPaymentData.colonyName != config.colony) return;

    // @ts-ignore
    if (!config.forcedPayment) return;
    const channel = getDiscordChannel(discordClient, config.forcedPayment);
    await channel.send(message);
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
            metadata
            colonyAddress
            name
          }
        }
        transaction {
          id
          block {
            timestamp
          }
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
    first: 10,
  };
  return VARIABLES;
}

function getEmbed(p: colonyPaymentData, config: any, timestamp: number) {
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
      iconURL: `${config.url}`,
    })
    .addFields({ value: `In **${p.domain}** team.`, name: "\u200B" })
    .setFooter({
      text: `Tsx : ${p.transactionId} - ${new Date(
        timestamp * 1000
      ).toUTCString()}`,
    });
  return embed;
}
function getDiscordMessage(embed: any, p: colonyPaymentData) {
  const message = {
    content: p.mentions,
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            url: `https://xdai.colony.io/colony/${p.colonyName}/tx/${p.tsxId}`,
            style: 5,
            label: "Colony Tsx",
            disabled: false,
            type: 2,
          },
          {
            url: `https://gnosisscan.io/tx/${p.tsxId}`,
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

function getDiscordChannel(
  discordCient: { channels: { cache: { get: (arg0: string) => any } } },
  channelId: string
) {
  const channel = discordCient.channels.cache.get(channelId);
  return channel;
}

async function parsePaymentData(data: any): Promise<colonyPaymentData> {
  const paymentInfo = data.payment;
  //console.log("payment info", paymentInfo)
  const fundPot = paymentInfo.fundingPot.fundingPotPayouts[0];
  const decimals = Math.pow(10, fundPot.token.decimals);
  const fundingAmount = fundPot.amount / decimals;
  const amountPayed = Math.floor((fundingAmount * 100) / 100);

  const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
  const signer = new ethers.Wallet(
    "55f32b12ca4ee3ce5157d40f42a8cb0171aa37e39600e2a906aca01e966275bc",
    provider
  );

  const TsxId: string = data.transaction.id;
  const recipient: string = paymentInfo.to;
  const colonyNetwork = await ColonyNetwork.init(provider);
  const recipientUsername = await colonyNetwork.getUsername(recipient);

  const domainMeta = paymentInfo.domain.metadata;
  let domain = paymentInfo.domain.name;

  let mentions = await getMentions(recipient);

  if (domainMeta) {
    try {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${domainMeta}`
      );

      if (response.status == 200) {
        const domainResponse: any = await response.text();
        const domainJson = JSON.parse(domainResponse);
        domain.data.domainName
          ? domainJson.data.domainName
          : domainJson.domainName;
      }
    } catch (error) {}
  }

  let paymentData: colonyPaymentData = {
    colonyName: paymentInfo.colony.ensName.split(".")[0],
    colonyTickers: paymentInfo.fundingPot.fundingPotPayouts[0].token.symbol,
    domain,
    recipientUsername,
    colonyAdress: paymentInfo.domain.colonyAddress,
    recipient: formatAddress(recipient),
    mentions,
    amountPayed,
    transactionId: formatAddress(TsxId),
    tsxId: data.transaction.id,
  };
  return paymentData;
}

interface colonyPaymentData {
  colonyName: string;
  colonyTickers: string;
  domain: string;
  recipientUsername: string | null;
  colonyAdress: string;
  recipient: string;
  amountPayed: number;
  mentions: string;
  transactionId: string;
  tsxId: string;
}

function formatAddress(address: string, size = 4) {
  var first = address.slice(0, size + 1);
  var last = address.slice(-size);
  return first + "..." + last;
}

async function getMentions(recipientAddress: string) {
  let dicordId = await walletToDiscord(recipientAddress);
  return dicordId ? `<@${dicordId}>` : "";
}
