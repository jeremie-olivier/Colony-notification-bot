import { createSubgraphClient, gql } from "@colony/sdk/graph";
import { pipe, subscribe } from "wonka";
const { EmbedBuilder } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { ethers } = require("ethers");
import { providers } from 'ethers';
import { ColonyNetwork, ColonyRpcEndpoint } from '@colony/sdk';
import dotenv from "dotenv";
dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN

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
          name
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
        const colonyName = `${
          paymentInfo.colony.ensName.split(".")[0]
        } Colony's`;
        const domainName = paymentInfo.domain.name;
        const fundingAmountWei = `${paymentInfo.fundingPot.fundingPotPayouts[0].amount}`;
        const fundingAmountEth = ethers.utils.formatEther(fundingAmountWei);
        const truncatedAmount =
          Math.floor(parseFloat(fundingAmountEth) * 100) / 100;
        const recipient = `${paymentInfo.to}`;
        const colonyAddress = `${paymentInfo.domain.colonyAddress}`;
        const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);
        const signer = new ethers.Wallet("55f32b12ca4ee3ce5157d40f42a8cb0171aa37e39600e2a906aca01e966275bc", provider)
        const colonyNetwork = await ColonyNetwork.init(provider);
        const recipientUsername = await colonyNetwork.getUsername(recipient);

        const embed = new EmbedBuilder()
          .setColor(0x1cae9f)
          .setTitle("New Payment")
          .setDescription(`${truncatedAmount} CHR has been payed to ${recipientUsername} ${recipient}`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/1087723564154749000/1095023300482191430/Forced.png"
          )
          .setAuthor({
            name: `${colonyName}`,
            url: "https://static-cdn.jtvnw.net/jtv_user_pictures/58a7369b-9a87-4c24-b8e0-99d71ff068ba-profile_image-70x70.png"
            })
          .addFields({ name: `In ${domainName} team.`, value: "\u200B" });

        const message = {
          content: "@business",
          tts: false,
          components: [
            {
              type: 1,
              components: [
                {
                  style: 5,
                  label: "View transaction on Colony",
                  url: "https://xdai.colony.io/colony/chronodao/tx/0xa04eea13a88920facb23b9d305bcf8aadbcbaccda595a3c53d821be1a374df00",
                  disabled: false,
                  type: 2,
                },
              ],
            },
          ],
          embeds: [embed],
        };
        await chan.send(message);
      });
  })
);
