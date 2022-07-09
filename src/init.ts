import { Router } from '@grammyjs/router'
import { Bot, Context, Keyboard, session, SessionFlavor } from 'grammy'
interface SessionData {
  step: 'idle' | 'service_choice' | 'area' | 'number'; // which step of the form we are on
  service?: string; // day of birthday
  area?: string; // month of birthday
  cadasterNumber?: string
}
export type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(process.env.BOT_TOKEN || '5474352278:AAGYyJDPyDu7kgdPIZTLWracvDT440yCcug')
bot.use(session({ initial: (): SessionData => ({ step: 'idle' }) }))
const router = new Router<MyContext>((ctx) => ctx.session.step)


export {bot, router}
