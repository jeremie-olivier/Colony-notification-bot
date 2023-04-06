const { REST, Routes } = require('discord.js');


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("OTkzNDY3MDI5MzE3MjQyODkx.GGAOPZ.pPsLeyD026yhcFPNxdfxa-XHzEoNBu8qDMiDpA");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("993467029317242891"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();