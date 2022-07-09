import { Menu } from '@grammyjs/menu'
import { InlineKeyboard, Keyboard } from 'grammy'
import { bot, MyContext, router } from '../../../../init'
import { FinishMenu } from '../../../../menus'
import { toMain } from '../../../main'


const route = router.route('number')

export const toCadasterNumber = (ctx: MyContext) => {
  ctx.session.step = 'number'
  ctx.reply('Напишите ваш кадастровый номер участка', {
    reply_markup: {
      input_field_placeholder: 'Введите кадастровой номер',
      one_time_keyboard: true,
      resize_keyboard: true,
      keyboard: new Keyboard()
        .text('Как узнать кадастровый номер?')
        .text('На главную')
        .build(),
    }
  })
}





route.on('message:text', async ctx => {
  // if(ctx.update.message.text === 'Выбор услуги'){
  if (ctx.update.message.text === 'На главную') return toMain(ctx)
  if (ctx.update.message.text === 'Продолжить') return toCadasterNumber(ctx)
  if (ctx.update.message.text === 'Как узнать кадастровый номер?') return ctx.reply(
    `Кадастровый номер земельного участка можно посмотреть на Публичной кадастровой карте Росреестра, указав адрес земельного участка или просто выбрав его на карте.
    https://xn--h1alcedd.xn--d1aqf.xn--p1ai/instructions/kadastrovyy-nomer-zemelnogo-uchastka
    `, {
      reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: new Keyboard()
          .text('Продолжить').row()
          .text('На главную').build(),
      }
    })
  
  ctx.session.cadasterNumber = ctx.update.message.text
  await ctx.reply('Спасибо, наш менеджер свяжется с вами в ближайшее время.', {
    reply_markup: FinishMenu,
  })
  const obj = Object.assign(ctx.session, { name: ctx.update.message.from.first_name, secondName: ctx.update.message.from.last_name, username: ctx.update.message.from.username  })
  console.log(obj)
  
  bot.api.sendMessage(1370583376, `
   Клиент ${obj.name}, подал заявку на услугу ${obj.service}
  Участок в ${obj.area}
  Кадастровый номер: ${obj.cadasterNumber}
  username: @${obj.username}
  `)
  // }
})