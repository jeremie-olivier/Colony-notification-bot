const Discord = require("discord.js");
import {runChronoDaoPayment} from "./components/test/payment/chronoDaoPayment"
import {runChronoDaoMotion} from "./components/test/motion/chronoDaoMotion"
import {runShapeShiftPayment} from "./components/test/payment/shapeShiftPayment"
import {runShapeShiftMotion} from "./components/test/motion/shapeShiftMotion"
import {runEli5Motion} from "./components/test/motion/eli5Motion"
import {runNotifTestPayment} from "./components/test/payment/NotificationsTestPayments"
import {runNotifTestMotion} from "./components/test/motion/NotificationsTestMotiont"

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
runNotifTestPayment(client)

runChronoDaoMotion(client)
runEli5Motion(client)
runShapeShiftMotion(client)
runNotifTestMotion(client)
}
