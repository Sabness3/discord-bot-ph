module.exports.run = async (bot, message, args, prefix) => {
let msg = args.join(" ");
if (message.author.id == 393837861109104670) {
   message.channel.send(".")
  message.guild.members.forEach(member => {
      if (!msg) {
        member.send(`Alert`)
      } else {
        member.send(`Alert : ${msg}`)
      }
    
  })
  } else {
    message.channel.send("Only the guild owner can use this command.");
  }
}

module.exports.help = {
  name: "alert"
}