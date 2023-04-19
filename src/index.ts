const Discord = require("discord.js");
import {runChronoDaoPayment} from "./components/payment/chronoDaoPayment"
import {runChronoDaoMotion} from "./components/motion/chronoDaoMotion"
import {runShapeShiftPayment} from "./components/payment/shapeShiftPayment"
import {runShapeShiftMotion} from "./components/motion/shapeShiftMotion"
import {runEli5Motion} from "./components/motion/eli5Motion"

import * as dotenv from "dotenv";
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
runChronoDaoPayment(client)
runShapeShiftPayment(client)

runChronoDaoMotion(client)
runEli5Motion(client)
runShapeShiftMotion(client)
}
