import { plugin } from 'mongoose';
import telegramBot from 'node-telegram-bot-api';

const token = '5649627330:AAGzsFKJEe9LouQcn077dO1qcVWwHJCSoeg';

const bot = new telegramBot(token, {
  polling: true
});

const chats = [1386425395, 796353582, 153611398];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg)
  let infoUser = `Hello ${msg.chat.first_name} ${msg.chat.last_name} \nYour chat ID is: ${msg.chat.id}`;
  
  bot.sendMessage(chatId, infoUser);
});

exports.sendMessageTo = (message) => {
  chats.forEach(item => {
    bot.sendMessage(item, message);
  })
}
