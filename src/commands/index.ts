import { Collection } from "discord.js";
import { Command } from "../types";
import Ping from './ping'
import Leetcode from './leetcode'

const commands = new Collection<string, Command>();

commands.set(Ping.data.name, Ping)
commands.set(Leetcode.data.name, Leetcode)

export default commands;
