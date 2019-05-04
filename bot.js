// Calling the Packages and Files  WOW
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
let bot = new Discord.Client();
bot.commands = new Discord.Collection();

// Ready event
bot.on('ready', () => {
  console.log("Loading...");
  setTimeout(function(){
  console.log("Bot has been loaded completely.");
  }, 1000);

// Bot Status
function botStatus() {
  let status = [
    `In ${bot.guilds.size} guilds.`,
    `Mention Me For Info | .. `
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        
}; setInterval(botStatus, 20000)
  setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 1800000);
});

// Message event
bot.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	
  let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
    
// Bot Mention Embed
  if(message.content.toLowerCase() === '<@572123320238211072>'){
    let embed = new Discord.RichEmbed()
    .setTitle("Phoenix Development")
    .addField("Prefix", `\`${prefix}\``, true)
    .addField("Help", `\`${prefix}help\``, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
    message.channel.send(embed);
  };

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  
	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
    
	if(!commandFile) return message.channel.send("Tritax AI Error: No Command found with that name.");
  
  console.log(`[${message.author.tag}]: Command: "${cmd}" [${message.guild.name}]`);
	} catch (err) {
    console.log(`Tritax AI Error: I found an Error while Loading my Commands!\n${err.stack}`);
  };   
});

// Member Join Event
	bot.on('guildMemberAdd', member => {   
    if(member.guild.id === "421853697027473408"){
	  const members = member.guild.memberCount;
	  const channel = member.guild.channels.find('name', 'member-log');
	  if (!channel) return;

    let Role = member.guild.roles.find(`name`, "Bots");
    if(member.user.bot){
	    member.addRole(Role.id)
    }else{
      let role = member.guild.roles.find(`name`, "Members");
	    member.addRole(role.id)
    };
 
	  let Embed = new Discord.RichEmbed()
	  .setFooter(`User Joined | ${member.guild.memberCount} Members`)
	  .setColor("#cde246")    
	  .setAuthor(`${member.displayName} has joined ${member.guild.name}`, member.user.displayAvatarURL)
	  .setTimestamp()
	  channel.send(Embed);
  }else{return; }
	});

// Member Leave Event
	bot.on('guildMemberRemove', member => {
    if(member.guild.id === "421853697027473408"){
	  const channel = member.guild.channels.find(`name`, 'member-log');
	  if(!channel) return; 
	    
	  let Embed = new Discord.RichEmbed()
	  .setColor("#e26346")
	  .setAuthor(`${member.displayName}, has left ${member.guild.name}.`, member.user.displayAvatarURL)
	  .setTimestamp()
	  .setFooter(`User Left | ${member.guild.memberCount} Members`)
	  channel.send(Embed);
    }else{return; }
	});

// Guild Join event
	bot.on('guildCreate', guild => {
	  let channel = bot.channels.get("428564028239904790");
    
    const embed = new Discord.RichEmbed()
    .setColor("#cde246")
    .setAuthor(`Joined ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Owner", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Users", guild.memberCount, true)
    .addField("Channels", guild.channels.size, true)
    channel.send(embed);
	});

// Guild Leave event
	bot.on('guildDelete', guild => {
	  let channel = bot.channels.get("428564028239904790");
    
    const embed = new Discord.RichEmbed()
    .setColor("#cde246")
    .setAuthor(`Left ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Owner", guild.owner.user.tag)
    .addField("ID", guild.id, true)
    .addField("Users", guild.memberCount, true)
    .addField("Channels", guild.channels.size, true)
    channel.send(embed);
	});



  bot.on("message", (message) => {
  
    if (message.content.includes("https://discord.gg/")) {
      console.log("deleted " + message.content + " from " + message.author)
      message.delete(1);
      message.channel.sendMessage("No links here, " + message.author)
    }
    if (message.content.includes("https://discord.gg/discord-developers")) {
      console.log("deleted " + message.content + " from " + message.author)
      message.delete(1);
      message.channel.sendMessage("No links here, " + message.author)
      }
    });


// Tritax AI Login:
	bot.login(process.env.TOKEN);
