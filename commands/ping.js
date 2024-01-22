const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("get my current letancy"),
  async execute(interaction) {
    const client = interaction.client;
    await interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
