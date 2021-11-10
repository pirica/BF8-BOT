const data = require('../functions/dataFortnite.js');

const chalk = require('chalk');
const schedule = require('node-schedule');
const { Bot, Kevin } = require('../index.js');

module.exports = async () => {
    await data.reloadShop()
    await data.reloadNewCos()
    await data.reloadData()
    await Bot.user.setActivity(`${text="18.30"} (108/110 pak files) `, { type: 'PLAYING' })
    console.log(chalk.blue(`DISCORD CLIENT`)+` Logged in as ${Bot.user.tag}`)
}