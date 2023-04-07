import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
const { ethers } = require("ethers");
import dotenv from "dotenv";
dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN;

const colonySubgraph = createSubgraphClient();

colonySubgraph.subscription;

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
  }
`;

const VARIABLES = {
  orderDirection: "desc",
  orderBy: "timestamp",
  first: 1,
};

console.log("New event :");

const subscription = colonySubgraph.subscription(QUERY, VARIABLES);
pipe(
  subscription,
  subscribe(async (result: { data?: any; error?: any }) => {
    console.info("Last transaction :" + JSON.stringify(result.data));
    await client.login(TOKEN),
      client.once("ready", async () => {
        const chan = client.channels.cache.get("1034582332478337106");
        const paymentInfo = result.data.oneTxPayments[0].payment;
        const colonyName = `${paymentInfo.colony.ensName.split('.')[0]} Colony's`;
        const fundingAmountWei = `${paymentInfo.fundingPot.fundingPotPayouts[0].amount}`;
        const fundingAmountEth = ethers.utils.formatEther(fundingAmountWei);
        const truncatedAmount = Math.floor(parseFloat(fundingAmountEth) * 100) / 100;
        const recipient = `${paymentInfo.to}`;
        const colonyAddress = `${paymentInfo.domain.colonyAddress}`;

        const message = new EmbedBuilder()
          .setColor(5763719)
          .setTitle("New incoming transaction !")
          .setAuthor({
            name: `${colonyName}`,
          })
          .addFields(
            {
              name: "From : ",
              value: `${colonyAddress}`,
              inline: true,
            },
            { name: "\u200B", value: "\u200B" },
            {
              name: "To : ",
              value: `${recipient}`,
              inline: true,
            },
            { name: "\u200B", value: "\u200B" },
            {
              name: "A total of :",
              value: `${truncatedAmount} Token`,
              inline: true,
            }
          )
          .setTimestamp();
        await chan.send({ embeds: [message] });
      });
  })
);
