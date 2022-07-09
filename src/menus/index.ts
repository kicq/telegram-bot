import { Menu } from '@grammyjs/menu'
import { MyContext } from '../init'
import { toMain } from '../steps/main'

// register bot.use(FinishMenu)

export const FinishMenu = new Menu<MyContext>('FinishMenu')
  .text('На главную', (ctx) => toMain(ctx)).row()
  .text('Хочу связаться сам', (ctx) => ctx.reply('Много хочешь!'))

export const Contacts = new Menu<MyContext>('Contacts')
  .url(
    'Открыть диалог',
    'https://t.me/ambtvs',
  )
  .url(
    'whatsapp',
    'https://wa.me/89992484200',
  )