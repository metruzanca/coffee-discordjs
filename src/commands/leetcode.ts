import { Interaction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName('leetcode')
    .setDescription('Gets Daily Leetcode Challenge'),
  async execute(interaction: Interaction) {
    if (interaction.isRepliable()) {
      await interaction.reply("Pong!")
    }
  }
}


