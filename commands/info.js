const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Developer", "`Gundalf#9590`")
    .addField("Library", "`discord.js@11.3.2`")
    .addField("Honorable Mentions", "`Daddy#0001` Help and Support New Command Ideas")
    .setColor("#e2df1b")
    .setFooter("A Coder's Hangout")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}
