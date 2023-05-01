import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");

// Utilities
import { notificationsSubs } from "../../utility/NotificationToDiscord";
import { formatAddress } from "../../utility/formatAddress";

import { ColonyMotionData } from "../../types/colonyMotionData";

import * as dotenv from "dotenv";
import { getColonyAvatarFile } from "../../utility/colonyAvatar";
dotenv.config();

export async function runMotion(discordClient: any): Promise<any> {
  const GQL = getGQLrequest();
  const GQLVARIABLES = getGqlVariables();
  const subscription = getGqlSubscription(GQL, GQLVARIABLES);
  pipe(
    subscription,
    subscribe((r: any) =>
      createAndSendMessage(discordClient, r.data.motions[0])
    )
  );
}

let lastMotion: string;

async function createAndSendMessage(
  discordClient: any,
  result: any
): Promise<void> {
  let colonyMotionData = await parseMotionData(result);

  if (colonyMotionData.transactionId != lastMotion) return;

  let notifsSubs: any = await notificationsSubs(colonyMotionData.colonyName);
  notifsSubs
    .filter(
      (sub: { domain: any }) =>
        colonyMotionData.domain == sub.domain.name ||
        sub.domain.name.toUpperCase() == "ALL"
    )
    .forEach(async (sub: any) => {
      const embed = getEmbed(colonyMotionData);
      const message = getDiscordMessage(embed, colonyMotionData);
      const channel = getDiscordChannel(
        discordClient,
        sub.discordChannel.idDiscord
      );
      await channel.send(message);
      lastMotion = colonyMotionData.transactionId;
    });
}

function getGQLrequest(): any {
  const QUERY = gql`
    subscription Subscription(
      $orderBy: Motion_orderBy
      $orderDirection: OrderDirection
      $first: Int
    ) {
      motions(
        orderBy: $orderBy
        orderDirection: $orderDirection
        first: $first
      ) {
        stakes
        domain {
          name
          metadata
        }
        requiredStake
        transaction {
          block {
            timestamp
          }
          id
        }
        associatedColony {
          id
          ensName
          token {
            symbol
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
    orderBy: "fundamentalChainId",
    first: 10,
  };
  return VARIABLES;
}

function getGqlSubscription(gql: string, variables: any): any {
  const colonySubgraph = createSubgraphClient();
  const subscription = colonySubgraph.subscription(gql, variables);
  return subscription;
}

function getEmbed(p: ColonyMotionData) {
  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("New Motion Event")
    .setDescription(`**Motion details** : Work in progress ( coming soon )`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300297625771/Motion.png"
    )
    .setAuthor({
      name: `${p.colonyName}`,
      iconURL: "attachment://colony-avatar.png",
    })
    .addFields({ value: `In **${p.domain}** team.`, name: "\u200B" })
    .setFooter({
      text: `Tsx : ${p.transactionId} - ${new Date(
        p.timestamp * 1000
      ).toUTCString()}`,
    });
  return embed;
}

async function getDiscordMessage(embed: any, p: ColonyMotionData) {
  let file = await getColonyAvatarFile(p.colonyMetaData);

  const message = {
    // content: "@business a new payment request has been made and is pending staking\n 0/100 CHR Staked",
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

function getDiscordChannel(discordClient: any, channelId: string) {
  const channel = discordClient.channels.cache.get(channelId);
  return channel;
}

async function parseMotionData(data: any): Promise<ColonyMotionData> {
  const motionInfo = data;
  const TsxId: string = motionInfo.transaction.id;

  const domainMeta = motionInfo.domain.metadata;
  let domain = motionInfo.domain.name;

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
    } catch (error) {
      console.error(`Error fetching IPFS domain: ${error}`);
    }
  }

  let motionData: ColonyMotionData = {
    motionStake: motionInfo.stakes,
    motionDomain: motionInfo.domain.name,
    domain,
    colonyName: motionInfo.associatedColony.ensName.split(".")[0],
    colonyTickers: motionInfo.associatedColony.token.symbol,
    colonyMetaData: motionInfo.associatedColony.metadata,
    timestamp: motionInfo.transaction.block.timestamp,
    transactionId: formatAddress(TsxId),
    requiredStake: motionInfo.requiredStake,
    tsxId: motionInfo.transaction.id,
  };
  return motionData;
}
