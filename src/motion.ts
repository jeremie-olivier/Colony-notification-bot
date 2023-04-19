import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { ColonyNetwork, ColonyRpcEndpoint } from "@colony/sdk";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
import * as dotenv from "dotenv";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";


dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN;
const ELI5 = process.env.ELI5_CHANNEL_ID;
//const SERVERTEST = process.env.TEST_SERVER_CHANNEL_ID;

async function run(): Promise<any> {
  await client.login(TOKEN);
}
run();

let lastMotion: string

function listenToColonyEvent(): void {
  const GQL = getGQLrequest();
  const subscription = getGqlSubscription(GQL);
  pipe(
    subscription,
    // @ts-ignore
    subscribe((r) => createAndSendMessage(r.data.motions[0]))
  );
}

//when discord is ready
client.once("ready", listenToColonyEvent);

async function createAndSendMessage(result: any): Promise<void> {
  console.log(createAndSendMessage);
  let colonyMotionData = await parseMotionData(result);
  if (colonyMotionData.transactionId != lastMotion) {

    const embed = getEmbed(colonyMotionData);
    const message = getDiscordMessage(embed, colonyMotionData);
     // @ts-ignore
    const channel = getDiscordChannel(ELI5);
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

function getEmbed(p: colonyMotionData) {
  const embed = new EmbedBuilder()
    .setColor(0xf7c325)
    .setTitle("New Motion")
    .setDescription(
      `**New Motion stake** : (${p.motionStake}) 
      Work in progress...`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300297625771/Motion.png"
    )
    .setAuthor({
      name: `${p.colonyName}`,
      iconURL:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/58a7369b-9a87-4c24-b8e0-99d71ff068ba-profile_image-70x70.png",
    })
    .addFields({ value: `In **${p.motionDomain}** team.`, name: "\u200B" });
  return embed;
}

function getDiscordMessage(embed: any, p:colonyMotionData) {
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

function getDiscordChannel(channelId: string) {
  const channel = client.channels.cache.get(channelId);
  return channel;
}

async function parseMotionData(data: any): Promise<colonyMotionData> {
  const motionInfo = data
  const motionData: colonyMotionData = {
    motionStake: motionInfo.stakes,
    motionDomain: motionInfo.domain.name,
    colonyName: motionInfo.associatedColony.ensName.split(".")[0],
    colonyTickers: motionInfo.associatedColony.token.symbol,
    transactionId: motionInfo.transaction.id,
    requiredStake: motionInfo.requiredStake
   
  }
  return motionData

  
}


interface colonyMotionData {
  motionStake: string
  motionDomain: string;
  colonyName: string;
  colonyTickers: string;
  transactionId: string;
  requiredStake: string;
}