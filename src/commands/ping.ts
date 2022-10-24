import { Interaction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction: Interaction) {
    if (interaction.isRepliable()) {
      await interaction.reply("Pong!")
    }
  }
}


