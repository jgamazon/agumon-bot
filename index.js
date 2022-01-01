const { Client, Collection, Intents } = require('discord.js');
const { token} = require("./config.json");

//const prefix = '-';
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.data.name, command);
}

//  incia o bot

client.once('ready', ()=> {
    console.log('Agu-bot funcionando!');
});



// comandos no index

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	//console.log(interaction);
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Sem interação', ephemeral: true });
	}
});

client.login(token);

