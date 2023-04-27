const Discord = require("discord.js");
import { runPayment } from "./components/payment/Payments";
import { runMotion } from "./components/motion/Motion";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import * as dotenv from "dotenv";
import { ServerConfig } from "./ServerConfig";
dotenv.config();

const client = new Discord.Client({
  intents: [Discord.GatewayIntentBits.Guilds],
});
const TOKEN = process.env.TOKEN;

async function run(): Promise<any> {
  await client.login(TOKEN);
}
run();

client.once("ready", listenToColonyEvent);

function listenToColonyEvent(): void {
  runPayment(client, ServerConfig.test.notificationsTest);
  // runPayment(client, ServerConfig.shapeShift)

  // runMotion(client, ServerConfig.test.notificationsTest)
  // runMotion(client, ServerConfig.shapeShift)
  // runMotion(client, ServerConfig.eli5)
}
