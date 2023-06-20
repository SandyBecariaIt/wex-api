import telegramBot from 'node-telegram-bot-api';

const token = '5649627330:AAGzsFKJEe9LouQcn077dO1qcVWwHJCSoeg';

const bot = new telegramBot(token, {
  polling: true
});

const chats = [1386425395, 796353582, 153611398];

exports.sendMessageTo = (message) => {
  chats.forEach(item => {
    bot.sendMessage(1386425395, message);
  })
}

