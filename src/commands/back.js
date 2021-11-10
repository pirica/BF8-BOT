const Discord = require("discord.js");
const axios = require('axios');
const fs = require('fs');
const { generateNewCos } = require('../functions/newCosmetics.js')

module.exports = {
    name: "back",
    cooldown: 10,
    async execute(message, args) {

        message.channel.startTyping()
        const embed = new Discord.MessageEmbed()
        .setTitle(`Returns an array of all battle royale cosmetics`)
        .setColor("#0078ff")
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()

        fs.stat('./final/back.png', async function(err, stats) {
            if(!err) {
                embed.attachFiles('./final/baclk.png')
                .setImage('attachment://back.png')
            }
            else {
                const response = await axios({method: 'get',url: 'https://fortnite-api.com/v2/cosmetics/br?language=ar'})
                await generateNewCos(response.data.data).then(async (value) => {
                    const attach = new Discord.MessageAttachment(value, 'back.png')
                    embed.attachFiles(attach)
                    .setImage("attachment://back.png")
                })
            }
            await message.channel.send(embed)
            return message.channel.stopTyping()
        })
    }
}