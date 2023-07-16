// import bot token from .env file
const TOKEN = require('dotenv').config();

// import discord.js module
const {Client,GatewayIntentBits} = require('discord.js');

// not sure what this does
const { json } = require('stream/consumers');

// configure permissions(intents)
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,
	]
});

// log successful login
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// respond to messages if they include certain words
client.on("messageCreate", async function (message) {

// ignore messages from bots
  if (message.author.bot) return;

  else if (message.content.toLowerCase().includes('trump')) {
    let response = await fetch("https://tronalddump.io/random/quote");
    let data = await response.json();
    message.reply(`${data.value}`)
  };
});

// bot login using token from .env file
client.login(process.env.TOKEN);