const { Bot } = require("..");

module.exports = {
    name: "ping",
    execute(message, args) {
        return message.reply(`${Date.now() - message.createdTimestamp}ms. Discord : ${Bot.ws.ping}ms <:construction:907432911978889216>`);
    }
}