import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

interface Note {
  uid: number;
  time: string;
  text: string;
}

const token: string = process.env.TELEGRAM_BOT_TOKEN || '';

const bot = new TelegramBot(token, { polling: true });

let notes: Note[] = [];

bot.onText(/remind (.+) in (.+)/, function (msg: TelegramBot.Message, match: RegExpExecArray | null) {
  const userId = msg.from?.id;
  const text = match ? match[1] : '';
  const time = match ? match[2] : '';

  console.log('GOT INFO: ', userId, text, time);

  if (userId === undefined || text === undefined || time === undefined) {
    return;
  }

  notes.push({ 'uid': userId, 'time': time, 'text': text });

  bot.sendMessage(userId, 'OK) Got it!');
});

setInterval(function () {
  for (var i = 0; i < notes.length; i++) {
    const curDate = new Date().getHours() + ':' + new Date().getMinutes();
    if (notes[i]['time'] === curDate) {
      sendCat(notes[i]['uid']);
      bot.sendMessage(notes[i]['uid'], 'Remain that: ' + notes[i]['text'] + ' now.');
      notes.splice(i, 1);
    }
  }
}, 1000);

function sendCat(chatId: number) {
  const photo = 'src/cat.png';
  const options = {
    caption: 'Cute cat',
    contentType: 'application/octet-stream',
  };
  bot.sendPhoto(chatId, photo, options);
}
