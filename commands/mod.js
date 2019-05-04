const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("<:TAmod:444855093569781760> Moderation")
    .addField("`" + message.prefix + "ban`", "Ban a member.")
    .addField("`" + message.prefix + "unban`", "Un-ban a member. [Requires id]")
    .addField("`" + message.prefix +"clear`", "Clear messages")
    .addField("`" + message.prefix +"kick`", "Kick a member.")
    .addField("`" + message.prefix +"unmute`", "Unmute a member.")
    .addField("`" + message.prefix +"warn`", "Warn a member.")
    .addField("`" + message.prefix +"warnlvl`", "Check a user's warn level.")
    .setFooter("Require mod-log channel.")

message.channel.send(embed);
}

module.exports.help = {
  name: "mod"
}
