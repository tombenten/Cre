module.exports = {
	name: 'alerts',
	async execute(message, args, Discord, client) {
    const channel = "867706672273424384"
    const creoRole = message.guild.roles.cache.find(role => role.name === "Cre's Options Alert");
    const creoEmoji = "👑";
		const crewRole = message.guild.roles.cache.find(role => role.name === "Cre's watchlist alert");
    const crewEmoji = "👀";
		const roRole = message.guild.roles.cache.find(role => role.name === "Returnz's Stocks Alerts");
    const roEmoji = "💎";
		const rwRole = message.guild.roles.cache.find(role => role.name === "Returnz's Watchlist Alert");
    const rwEmoji = "📊";

    const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Set your alerts here:")
        .setDescription(`Choose which alerts you want notifications for!\n\n`
          + `- ${creoEmoji} for **Cre's options** alerts\n\n`
					+ `- ${crewEmoji} for **Cre's watchlist** alerts\n\n`
					+ `- ${roEmoji} for **Returnz stocks** alerts\n\n`
					+ `- ${rwEmoji} for **Returnz watchlist** alerts\n`
        );

     let MessageEmbed = await message.channel.send({embed});
     MessageEmbed.react(creoEmoji);
		 MessageEmbed.react(crewEmoji);
		 MessageEmbed.react(roEmoji);
		 MessageEmbed.react(rwEmoji);


     client.on("messageReactionAdd", async (reaction, user) => {
       if(reaction.message.partial) await reaction.message.fetch();
       if(reaction.partial) await reaction.fetch();
       if(user.bot) return;
       if(!reaction.message.guild) return;

       if(reaction.message.channel.id === channel){
         if(reaction.emoji.name === creoEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(creoRole);
         }
				 if(reaction.emoji.name === crewEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(crewRole);
         }
				 if(reaction.emoji.name === roEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(roRole);
         }
				 if(reaction.emoji.name === rwEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.add(rwRole);
         }

				 else {
           return;
         }
       }

     });

     client.on("messageReactionRemove", async (reaction, user) => {
       if(reaction.message.partial) await reaction.message.fetch();
       if(reaction.partial) await reaction.fetch();
       if(user.bot) return;
       if(!reaction.message.guild) return;

       if(reaction.message.channel.id === channel){
         if(reaction.emoji.name === creoEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(creoRole);
         }
				 if(reaction.emoji.name === crewEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(crewRole);
         }
				 if(reaction.emoji.name === roEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(roRole);
         }
				 if(reaction.emoji.name === rwEmoji) {
           await reaction.message.guild.members.cache.get(user.id).roles.remove(rwRole);
         }

				  else {
           return;
         }
       }

     });
  },
};
