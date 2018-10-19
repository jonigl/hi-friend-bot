const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);
const packageInfo = require('./package.json');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});

bot.on('*', (msg) => msg.reply.text('Hi friend!'));

bot.start();
