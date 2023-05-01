import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { ColonyNetwork, ColonyRpcEndpoint } from "@colony/sdk";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");

import { providers } from "ethers";

// Utilities
import { walletToDiscord } from "../../utility/WalletToDiscord";
import { notificationsSubs } from "../../utility/NotificationToDiscord";
import { getColonyAvatarFile } from "../../utility/colonyAvatar";
import { formatAddress } from "../../utility/formatAddress";

import { ColonyPaymentData } from "../../types/colonyPaymentData";

import * as dotenv from "dotenv";
dotenv.config();

export async function runPayment(discordClient: any): Promise<any> {
  const GQL = getGQLrequest();
  const GQLVARIABLES = getGqlVariables();
  const subscription = getGqlSubscription(GQL, GQLVARIABLES);
  pipe(
    subscription,
    subscribe((r: any) =>
      createAndSendMessage(discordClient, r.data.oneTxPayments[0])
    )
  );
}

let lastTransaction: string;

async function createAndSendMessage(
  discordClient: any,
  result: any
): Promise<void> {
  let colonyPaymentData = await parsePaymentData(result);

  if (colonyPaymentData.transactionId == lastTransaction) return;

  let notifsSubs: any = await notificationsSubs(colonyPaymentData.colonyName);
  notifsSubs
    .filter(
      (sub: { domain: any }) =>
        colonyPaymentData.domain == sub.domain.name ||
        sub.domain.name.toUpperCase() == "ALL"
    )
    .forEach(async (sub: any) => {
      const channel = getDiscordChannel(
        discordClient,
        sub.discordChannel.idDiscord
      );
      const embed = getEmbed(
        colonyPaymentData,
        result.transaction.block.timestamp
      );
      const message = await getDiscordMessage(embed, colonyPaymentData);
      await channel.send(message);
      lastTransaction = colonyPaymentData.transactionId;
    });
}

function getGqlSubscription(gql: string, variables: any): any {
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
            metadata
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

function getEmbed(p: ColonyPaymentData, timestamp: number) {
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
      iconURL: "attachment://colony-avatar.png",
    })
    .addFields({ value: `In **${p.domain}** team.`, name: "\u200B" })
    .setFooter({
      text: `Tsx : ${p.transactionId} - ${new Date(
        timestamp * 1000
      ).toUTCString()}`,
    });

  return embed;
}
async function getDiscordMessage(embed: any, p: ColonyPaymentData) {
  let file = await getColonyAvatarFile(p.colonyMetaData);

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
    files: [file],
  };
  return message;
}

function getDiscordChannel(discordCient: any, channelId: string) {
  const channel = discordCient.channels.cache.get(channelId);
  return channel;
}

async function parsePaymentData(data: any): Promise<ColonyPaymentData> {
  const paymentInfo = data.payment;

  const fundPot = paymentInfo.fundingPot.fundingPotPayouts[0];
  const decimals = Math.pow(10, fundPot.token.decimals);
  const fundingAmount = fundPot.amount / decimals;
  const amountPayed = Math.floor((fundingAmount * 100) / 100);

  const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

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

        domain = domainJson.data
          ? domainJson.data.domainName
          : domainJson.domainName;
      }
    } catch (error) {}
  }

  let paymentData: ColonyPaymentData = {
    colonyName: paymentInfo.colony.ensName.split(".")[0],
    colonyMetaData: paymentInfo.colony.metadata,
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

async function getMentions(recipientAddress: string) {
  let dicordId = await walletToDiscord(recipientAddress);
  return dicordId ? `<@${dicordId}>` : "";
}
