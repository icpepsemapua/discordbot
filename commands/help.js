module.exports = function (msg, args) {
    const help_embed = new Discord.MessageEmbed()
                    .setTitle("Helper Bot")
                    .setColor(0x1EC1FE)
                    .setDescription("Make sure to use the !help to get access to the commands")

                    msg.author.send({embeds:[help_embed]})
  }