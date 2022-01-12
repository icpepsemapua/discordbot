require('dotenv').config({
    path: './env/.env'
})

const Discord = require('discord.js')


const bot = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})


bot.login(process.env.Disc_TOKEN)

bot.on("ready", () =>{
    const generalChannel = bot.channels.cache.find((channel) => channel.name === 'general');
    console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on("messageCreate", (message) => {
    if(message.content == "Hello"){
        message.reply(`Hi! My name is ${bot.user.tag}`)
    }
})

