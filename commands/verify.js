module.exports = function (msg, args){
    const verify_embed = new Discord.MessageEmbed()
                    .setTitle("Verification Bot")
                    .setColor(0xF8DD1A)
                    .setDescription("Please enter your full name to be verified")

                    msg.author.send({embeds:[verify_embed]})
}