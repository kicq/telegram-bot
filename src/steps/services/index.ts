import { Keyboard } from 'grammy'
import { MyContext, router } from '../../init'
import { toMain } from '../main'
import { toArea } from './area'


const route = router.route('service_choice')

export const toServices = (ctx: MyContext) => {
  ctx.session.step = 'service_choice'
  ctx.reply('Выберете услугу', {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .text('Межевание').row()
        .text('Вынос границ').row()
        .text('Техплан').row()
        .text('Топографическая съемка').row()
        .text('Назад')
        .build(),
    }
  })
}

route.on('message:text', async ctx => {
  // if(ctx.update.message.text === 'Выбор услуги'){
  if (ctx.update.message.text === 'Назад') return toMain(ctx)
  ctx.session.step = 'service_choice'
  ctx.session.service = ctx.update.message.text
  toArea(ctx)
  // }
})