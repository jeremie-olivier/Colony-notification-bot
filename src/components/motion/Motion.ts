import { ServerConfig } from "../../ServerConfig";
import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
import * as dotenv from "dotenv";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";

dotenv.config();

export async function runMotion(discordClient: any, config: any): Promise<any> {
  const GQL = getGQLrequest();
  const subscription = getGqlSubscription(GQL);
  pipe(
    subscription,
    subscribe((r) =>
      createAndSendMessage(
        discordClient,
        config,
        // @ts-ignore
        r.data.motions[0]
      )
    )
  );
}

let lastMotion: string;

async function createAndSendMessage(
  discordClient: any,
  config: any,
  result: any
): Promise<void> {
  let colonyMotionData = await parseMotionData(result);

  if (colonyMotionData.transactionId != lastMotion) {
    const embed = getEmbed(colonyMotionData, config);
    const message = getDiscordMessage(embed, colonyMotionData);
    lastMotion = colonyMotionData.transactionId;
    console.log(colonyMotionData);
    console.log(config);

    if (colonyMotionData.colonyName != config.colony) return;
    // @ts-ignore
    if (!config.motion) return;
    const channel = getDiscordChannel(discordClient, config.motion);
    await channel.send(message);
  }
}

function getGQLrequest(): any {
  const QUERY = gql`
    subscription Subscription {
      motions {
        stakes
        domain {
          name
        }
        requiredStake
        transaction {
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

function getGqlSubscription(
  gql: string | DocumentNode | TypedDocumentNode<any, any>
): any {
  const colonySubgraph = createSubgraphClient();
  const subscription = colonySubgraph.subscription(gql);
  return subscription;
}

function getEmbed(p: colonyMotionData, config: any) {
  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("New Motion Eve,t")
    .setDescription(
      `**Motion details : Work in progress ( coming soon )
       (${p.motionStake})`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300297625771/Motion.png"
    )
    .setAuthor({
      name: `${p.colonyName}`,
      iconURL: `${config.url}`,
    })
    .addFields({ value: `In **${p.motionDomain}** team.`, name: "\u200B" })
    .setTimestamp()
    .setFooter({ text: `**Tsx : ${p.transactionId}**` });
  return embed;
}

function getDiscordMessage(embed: any, p: colonyMotionData) {
  const message = {
    // content: "@business a new payment request has been made and is pending staking\n 0/100 CHR Staked",
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

function getDiscordChannel(discordClient: any, channelId: string) {
  const channel = discordClient.channels.cache.get(channelId);
  return channel;
}

async function parseMotionData(data: any): Promise<colonyMotionData> {
  const motionInfo = data;
  const motionData: colonyMotionData = {
    motionStake: motionInfo.stakes,
    motionDomain: motionInfo.domain.name,
    colonyName: motionInfo.associatedColony.ensName.split(".")[0],
    colonyTickers: motionInfo.associatedColony.token.symbol,
    transactionId: motionInfo.transaction.id,
    requiredStake: motionInfo.requiredStake,
  };
  return motionData;
}

interface colonyMotionData {
  motionStake: string;
  motionDomain: string;
  colonyName: string;
  colonyTickers: string;
  transactionId: string;
  requiredStake: string;
}
