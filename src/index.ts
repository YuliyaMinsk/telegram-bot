import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const token: string = process.env.TELEGRAM_BOT_TOKEN || '';

const bot = new TelegramBot(token, { polling: true });

// /echo Hello World! - send message "Hello World!")
bot.onText(/\/echo (.+)/, function (msg: TelegramBot.Message, match: RegExpExecArray | null) {
  const fromId = msg.from?.id;
  const resp = match ? match[1] : '';
  if (fromId) {
    bot.sendMessage(fromId, resp);
  }
});

// send cat for all messages
bot.on('message', function (msg: TelegramBot.Message) {
  const chatId = msg.chat.id;
  const photo = 'src/cat.png';
  bot.sendPhoto(chatId, photo, { caption: 'Милый кот' });
});
