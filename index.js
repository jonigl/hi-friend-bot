const TeleBot = require('telebot');
const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on('*', (msg) => msg.reply.text('Hi friend!'));

bot.start();
