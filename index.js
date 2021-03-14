require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.BOTTOKEN).then((data) => {
  console.log("BOT IS READY", data);
}).catch((err) => {
  console.log("LOGIN ERROR", err)
});

bot.on('ready', () => {
  const generalChannel = bot.channels.cache.find((channel) => channel.name === 'general');
  generalChannel.send(`Aloha future Computer Engineers! I'm ${bot.user.tag}, reporting for duty!`);
});

process.on('SIGINT', () => {
  bot.destroy();
  process.exit(1);
});