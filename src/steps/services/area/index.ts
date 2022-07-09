import { Keyboard } from 'grammy'
import { MyContext, router } from '../../../init'
import { toMain } from '../../main'
import { toCadasterNumber } from './number'


const route = router.route('area')

export const toArea = (ctx: MyContext) => {
  ctx.session.step = 'area'
  ctx.reply('Выберете ваш район', {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: new Keyboard()
        .text('СПБ')
        .text('Бокситогорский')
        .text('Лодейнопольский').row()
        .text('Ломоносовский').row()
        .text('На главную')
        .build(),
    }
  })
}

route.on('message:text', async ctx => {
  // if(ctx.update.message.text === 'Выбор услуги'){
  if (ctx.update.message.text === 'На главную') return toMain(ctx)
  ctx.session.step = 'service_choice'
  ctx.session.area = ctx.update.message.text
  toCadasterNumber(ctx)
  // }
})