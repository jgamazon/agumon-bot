const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const { token, prefix } = require("./config.json");


const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });

//  incia o bot

client.once('ready', ()=> {
    console.log('Taaaaichi! Agu-bot funcionando!');
});
 
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'teste') {
		await interaction.reply('teste 123!');
	} else if (commandName === 'ajuda') {
		await interaction.reply('nao');
	}
});

client.login(token);

