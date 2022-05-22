// Импорт Telegraf и Markup
const {
  Telegraf,
  Markup
} = require('telegraf')
// Импорт dotenv для защиты API токена
require('dotenv').config()

// Инициализация бота с помощью Telegraf
const bot = new Telegraf('')

const web_link = 'https://cool-quokka-c05cee.netlify.app/'

// Обработка команды /start
bot.start((ctx) => ctx.reply('Welcome', {
  reply_markup: {
    keyboard: [[{
      text: "web_app",
      web_app: {url:web_link}
    }]]
  }
}))

bot.launch()

// Запустить бота
bot.launch()

