import { Collection } from "discord.js";
import { Command } from "../types";
import Ping from './ping'

const commands = new Collection<string, Command>();

commands.set(Ping.data.name, Ping)

export default commands;