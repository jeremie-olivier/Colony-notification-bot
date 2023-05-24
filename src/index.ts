import { Client, GatewayIntentBits } from "discord.js";

import { runPayment } from "./components/payment/Payments";
import { runMotion } from "./components/motion/Motion";
import { discordAPIListner } from "./express/index";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import * as dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
const TOKEN = process.env.TOKEN;

async function run(): Promise<any> {
  await client.login(TOKEN);
}
run();

client.once("ready", listenToColonyEvent);

function listenToColonyEvent(): void {
  // runPayment(client);
  // runMotion(client);
  discordAPIListner(client);
}
