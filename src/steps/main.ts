import { Context, Keyboard } from 'grammy'
import { MyContext, router } from '../init'
import { Contacts } from '../menus'
import { toServices } from './services'

const keyboard = new Keyboard()
keyboard
  .text('Выбор услуги').row()
  .text('Я не знаю что мне нужно').row()
  .text('Связаться с геодезистом').row()

export const main = keyboard

const route = router.route('idle')


export const toMain = (ctx: MyContext) => {
  ctx.session.step = 'idle'
  ctx.reply('Главное меню', {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: main.build(),
    }
  })
}


route.on('message:text', async ctx => {
  if (ctx.update.message.text === 'Выбор услуги') {
    toServices(ctx)
  }
  if (ctx.update.message.text === 'Связаться с геодезистом') {
    ctx.reply('Я всеми известный геодезист Данило Мастер, у меня 10 летний стаж работы в этой сфере! Вы можете задать мне любой вопрос и проконсльтироваться бесплатно! Мой номер телефона +79992349900', {
      reply_markup: Contacts
    })
  }

  if (ctx.update.message.text === 'Я не знаю что мне нужно') {
    ctx.reply('Если ты не знаешь что тебе нужно то что ты здесь делаешь? Пиши тогда мне если всё плохо', {
      reply_markup: Contacts
    })
  }
})
