import { REST, Routes } from 'discord.js';

const { CLIENT_ID, TOKEN } = process.env;

type Commands = Array<{
  name: string
  description: string
}>

export default async function registerCommands(commands: Commands) {
  const rest = new REST({ version: '10' }).setToken(TOKEN);
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}
