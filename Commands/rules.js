module.exports = {
	name: 'rules',
	execute(message, args) {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("BT Investing rules:")
        .setDescription(`**1.** Do not private message advertisements, promotions, opinions, or advice to anyone from BT

**2.** Do not be rude, immature, disrespectful to anyone in the server

**3.** Do not repost our content.

**4.** Do not post false information about news, stocks etc.

**5.** Do not give or ask for any financial advice or management.

**6.** Keep stock channels to stock talk only. Chill channels are for whatever.`)
        .setThumbnail("https://cdn.discordapp.com/attachments/867692457579905024/867710734720040960/image0.jpg")

    message.channel.send({
        embed
    });
	},
};
