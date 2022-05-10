import { newRecord } from '../db'
import { bot } from '../init'

bot.start(ctx => {
  const params: User = {
    chatId: ctx.chat.id,
    userId: ctx.from.id
  }
  newRecord(params)
})