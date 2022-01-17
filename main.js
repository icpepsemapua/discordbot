require('dotenv').config({
    path: './env/.env'
})

const Discord = require('discord.js');

const bot = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

console.log(process.env.Disc_TOKEN);
bot.login(process.env.Disc_TOKEN)

bot.on('ready', () =>{console.log(`Logged in as ${bot.user.tag}!`)})


const commandHandler = require('./commandHandler')
bot.on("message", commandHandler)

//note try await messages

//draft of discord bot commands
//for now it sends a message, will implement database comparison later on


/*bot.on('messageCreate', async message =>{
    if(message.author.bot) return
    await message.delete() //to avoid spam

        if(message.channel.id === ver_channel && message.content==='!verify' && member.roles.cache === null){
                    const verify_embed = new Discord.MessageEmbed()
                    .setTitle("Verification Bot")
                    .setColor(0xF8DD1A)
                    .setDescription("Please enter your full name to be verified")

                    message.author.send({embeds:[verify_embed]})
        }
        else{
                    const error_embed = new Discord.MessageEmbed()
                    .setTitle("Verification Bot")
                    .setColor(0xFF0000)
                    .setDescription("Sorry, your command does not belong in channel")
                    message.author.send({embeds:[error_embed]})
        }
    
})

bot.on('messageCreate', async message =>{
    if(message.author.bot) return
    await message.delete() //to avoid spam
    let args = message.content.substring(command_PREFIX.length).split(" ")


    if (message.content.includes("!")){
        if(message.channel.id === ver_channel || message.channel.id('930418892415852586')){

            switch(args[0]){
                case 'help':
                    const help_embed = new Discord.MessageEmbed()
                    .setTitle("Helper Bot")
                    .setColor(0x1EC1FE)
                    .setDescription("Make sure to use the !help to get access to the commands")

                    message.author.send({embeds:[help_embed]})
                break;

                default:
                    const error_embed = new Discord.MessageEmbed()
                    .setTitle("Error Bot")
                    .setColor(0xFF0000)
                    .setDescription("Sorry, your command does not belong in command list")

                    message.author.send({embeds:[error_embed]})
            }
        }
    }
})

/*
//Feature 1 part 1//////////////////////////////////////////////////
//user types !verify to #verification
bot.on ('messageCreate', async message => {
    if(message.author.bot) return //ignores bot messages
    if(message.content.toLowerCase()==='!verify' && message.channel.id === '930711292203921428' )
    {
        await message.delete() //to avoid spam
        //role ID
        const ver_role = message.guild.roles.cache.get('930714095869636639')
        if(role){
            try{
                await message.member.roles.add(ver_role)
                console.log("Role Added!")
            }
            catch(err){
                console.log(err)
            }
        }
    }
})
*/


//prompts user to verify
bot.on('guildMemberAdd', member => {
    console.log(member.user.tag)
    
    const welc_message = `Welcome <@${member.user.id}>to the server!
    Click ${member.guild.channels.cache.get(ver_channel).toString()}
    and type *!verify* to see channels and have a Verified Role.`
    
    const send2ver = member.guild.channels.cache.get(welc_channel)
    send2ver.send(welc_message)
})


//pms user additional instructions whenever they type !verify

