const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = "OTkzNDY3MDI5MzE3MjQyODkx.GGAOPZ.pPsLeyD026yhcFPNxdfxa-XHzEoNBu8qDMiDpA";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction: { isChatInputCommand: () => any; commandName: string; reply: (arg0: string) => any; }) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(token);