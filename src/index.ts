const Discord = require("discord.js");
import {runPayment} from "./components/test/payment/Payments"

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
runPayment(client, ServerConfig.test.allForcedPayments)
runPayment(client, ServerConfig.test.allMotions)
//runPayment(client, ServerConfig.eli5.motion)

}
