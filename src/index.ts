import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { pipe, subscribe } from 'wonka';
import dotenv from 'dotenv'
dotenv.config();


const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });
const TOKEN = process.env.TOKEN;

const colonySubgraph = createSubgraphClient();

colonySubgraph.subscription



const QUERY = gql`
subscription Subscription($orderBy: OneTxPayment_orderBy, $orderDirection: OrderDirection, $first: Int) {
  oneTxPayments(orderBy: $orderBy, orderDirection: $orderDirection, first: $first) {
    nPayouts
    payment {
      colony {
        ensName
        id
      }
      fundingPot {
        fundingPotPayouts {
          amount
        }
      }
      to
      domain {
        colonyAddress
      }
     
    
    }
    
  }
}`

const VARIABLES = {
  "orderDirection": "desc",
  "orderBy": "timestamp",
  "first": 1,
}

    console.log('Listening to new `PaymentsTx` events...');
    
    const subscription = colonySubgraph.subscription(QUERY, VARIABLES);
    pipe(
      subscription,
      subscribe(async (result: { data?: any; error?: any; }) => {
        console.info(JSON.stringify(result.data));
        await client.login(TOKEN),
        client.once('ready', async () => {
          console.info('Ready!');
          const chan = client.channels.cache.get('1034582332478337106');
              await chan.send(
              JSON.stringify(result.data)
            );
        })
      }),
    );
