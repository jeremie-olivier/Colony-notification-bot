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
  const GQLVARIABLES = getGqlVariables();
  const subscription = getGqlSubscription(GQL, GQLVARIABLES);
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
    const embed = getEmbed(
      colonyMotionData,
      config,
      result.transaction.block.timestamp
    );
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

function getGqlSubscription(
  gql: string | DocumentNode | TypedDocumentNode<any, any>,
  variables: any
): any {
  const colonySubgraph = createSubgraphClient();
  const subscription = colonySubgraph.subscription(gql, variables);
  return subscription;
}

function getEmbed(p: colonyMotionData, config: any, timestamp: number) {
  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("New Motion Event")
    .setDescription(
      `**Motion details** : Work in progress ( coming soon )`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300297625771/Motion.png"
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

function getDiscordMessage(embed: any, p: colonyMotionData) {
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
  };
  return message;
}

function getDiscordChannel(discordClient: any, channelId: string) {
  const channel = discordClient.channels.cache.get(channelId);
  return channel;
}

async function parseMotionData(data: any): Promise<colonyMotionData> {
  const motionInfo = data;
  const TsxId: string = motionInfo.transaction.id;
  //console.log("motiofdfdsfsdfdsn",motionInfo)
  const domainMeta = motionInfo.domain.metadata;
    let domain = motionInfo.domain.name;

  if (domainMeta) {
    try {
      const response = await fetch(
        `https://gateway.pinata.cloud/ipfs/${domainMeta}`
      );

      if (response.status == 200) {
        const domainResponse: any = await response.text();
        
        const domainJson = JSON.parse(domainResponse)
        domain = domainJson.data? domainJson.data.domainName: domainJson.domainName;

      }
    } catch (error) {
      console.error(`Error fetching IPFS domain: ${error}`);
    }
  }

  let motionData: colonyMotionData = {
    motionStake: motionInfo.stakes,
    motionDomain: motionInfo.domain.name,
    domain,
    colonyName: motionInfo.associatedColony.ensName.split(".")[0],
    colonyTickers: motionInfo.associatedColony.token.symbol,
    transactionId: formatAddress(TsxId),
    requiredStake: motionInfo.requiredStake,
    tsxId: motionInfo.transaction.id
  };
  return motionData;
}

interface colonyMotionData {
  motionStake: string;
  motionDomain: string;
  domain: string;
  colonyName: string;
  colonyTickers: string;
  transactionId: string;
  requiredStake: string;
  tsxId: string,
}

function formatAddress(address: string, size = 4) {
  var first = address.slice(0, size + 1);
  var last = address.slice(-size);
  return first + "..." + last;
}
