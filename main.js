require('dotenv').config({
    path: './env/.env'
})
//channel IDs
const ver_channel = '930711292203921428'
const welc_channel = '930455522153472021'

const Discord = require('discord.js')

const bot = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})


bot.login(process.env.Disc_TOKEN)

bot.on('ready', () =>{console.log(`Logged in as ${bot.user.tag}!`)})

bot.on ('messageCreate', async message => {
    if(message.author.bot) return //ignores bot messages
    if(message.content.toLowerCase()==='!verify' && message.channel.id === '930711292203921428' )
    {
        await message.delete() //to avoid spam
        //role ID
        const role = message.guild.roles.cache.get('930714095869636639')
        if(role){
            try{
                await message.member.roles.add(role)
                console.log("Role Added!")
            }
            catch(err){
                console.log(err)
            }
        }
    }
})
//prompts user to verify
bot.on('guildMemberAdd', member => {
    console.log(member.user.tag)
    
    const welc_message = `Welcome <@${member.user.id}>
    to the server!. Click ${member.guild.channels.cache.get(ver_channel).toString()}
    and type !verify to be verified in the server.`
    
    const send2ver = member.guild.channels.cache.get(welc_channel)
    send2ver.send(welc_message)
})


