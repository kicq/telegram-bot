import { bot } from './init'
import './db'
import './weather'
import './events'
import './news'

import users from './db/data/users.json'
import http  from 'http'
const port = process.env.PORT || 3000
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hello World!')
  res.end()
}).listen(port)


const data = users as UserList


bot.start((ctx) => {
  ctx.reply('Welcome'),
  console.log(`Logged in as ${ctx.from}`)
})
// bot.on('sta', () => {
//   console.log(`Logged in as ${client.user.username}`)
// })



// bot.on('message', async(ctx) => {

//   console.log(

//     `Client write [${new Date(ctx.message.date)}]:`,

//     `"${ctx.message.from.first_name + ' ' + ctx.message.from.last_name}"`

//   )
//   ctx.reply(JSON.stringify(ctx.message))
//   // bot.telegram.sendPhoto(ctx.chat.id, 'https://picsum.photos/200/300')
//   ctx.telegram.sendSticker(ctx.chat.id, 'https://picsum.photos/200/300')
//   const chatMember = await bot.telegram.getChatMember(ctx.chat.id, ctx.message.from.id)

// })

// bot.command('get', ctx => {

// })

// setInterval(() => {
//   data.users.forEach( user => {
//     bot.telegram.sendMessage(user.chatId, 'Hi!').catch(reason => destroyRecord(reason.on.payload.chat_id))
//   })
// }, 10000)

bot.launch()
console.log('Bot has been start!')


