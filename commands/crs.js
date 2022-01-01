const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crs')
		.setDescription('Ei Caruso, ei Carusinho'),
	async execute(interaction) {
		await interaction.reply('só no cheirinho');
	},
};