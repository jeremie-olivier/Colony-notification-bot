import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { ColonyNetwork, ColonyRpcEndpoint } from "@colony/sdk";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
import { ethers } from "ethers";
import { providers } from "ethers";
import dotenv from "dotenv";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DocumentNode } from "graphql";
dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN;

async function run(): Promise<any> {
await client.login(TOKEN)
}
run()

function listenToColonyEvent(): void {

  const GQL = getGQLrequest() 
  const GQLVARIABLES = getGqlVariables()
  const subscription = getGqlSubscription(GQL, GQLVARIABLES)
  pipe(
    subscription,
    subscribe(createAndSendMessage))
  }
  
//when discord is ready
client.once("ready", listenToColonyEvent)





async function createAndSendMessage(): Promise<void> {
  console.log(createAndSendMessage)
   //const embed = getEmbed()
    //const message = getDiscordMessage()
    //const channel = getDiscordChannel()
    //await channel.send(message);
}




function getGqlVariables(): any  {
  const VARIABLES = {
    orderDirection: "desc",
    orderBy: "timestamp",
    first: 1,
  };
return VARIABLES
}

function getGqlSubscription(gql: string | DocumentNode | TypedDocumentNode<any, any>, variables: any): any   {
  const colonySubgraph = createSubgraphClient();
  const subscription = colonySubgraph.subscription(gql, variables)
  return subscription;


}

function getGQLrequest(): any   {
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
    }
  }
`;
return QUERY
}

function getEmbed() {
  
   

}
function getDiscordMessage() {
    throw new Error("Function not implemented.")
}

function getDiscordChannel() {
  const channel = client.channels.cache.get("1034582332478337106");
}


