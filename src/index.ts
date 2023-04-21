const Discord = require("discord.js");
import {runPayment} from "./components/payment/Payments"
import {runMotion} from "./components/motion/Motion"

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
runPayment(client, ServerConfig.test.notificationsTest)
//runPayment(client, ServerConfig.shapeShift.forcedPayment)
//runPayment(client, ServerConfig.test.allForcedPayments)
runMotion(client, ServerConfig.test.notificationsTest)
//runMotion(client, ServerConfig.shapeShift.motion)
//runMotion(client, ServerConfig.eli5.motion)
//runMotion(client, ServerConfig.test.allMotions)

}
