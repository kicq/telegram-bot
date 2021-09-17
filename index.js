const Telegram = require('@yuva1422/telegram.js')
const client = new Telegram.Client()
global.client = client
require('./weather.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`)
})

client.on('message', (msg) => {
  console.log(`Client write [${new Date(msg.createdAt*1000)}]:`, `"${msg.content}"`)
  if (msg.content === 'W') {
     msg.chat.sendChatAction('record_voice')
  }
})
//new Telegram.Chat(client)

client.commands.on('ping', (bot, msg, args) => {
  console.log(bot, 'msg', args);
  msg.chat.send('pong!')
})

client.login('511442107:AAG_tTRSL3FMuG67JivD4zoJvhFkMvOEJ9E')

client.startPolling()


