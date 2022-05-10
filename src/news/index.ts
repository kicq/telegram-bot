import { bot } from '../init'

import NewsAPI from 'ts-newsapi'
import translate from '@vitalets/google-translate-api'
import { INewsApiArticle } from 'ts-newsapi/lib/types'
const newsapi = new NewsAPI('9c2e807f05984d9b8c1fb661c1289337')



async function transl(str: string) {
  const res = await translate(str, { to: 'ru' })

  return res.text
}

bot.command('news', ctx => {
  newsapi.getTopHeadlines({
    sources: ['bbc-news', 'the-verge'],
    q: 'bitcoin',
  }).then(async (response) => {
    const articles: INewsApiArticle[] = []
    for await (const article of response.articles) {
      article.title = await transl(article.title ?? 'Nothing')
      article.content = await transl(article.content ?? 'Nothing')
      articles.push(article)
    }
    articles.forEach(article => {
      bot.telegram.sendPhoto(ctx.chat.id, article.urlToImage ?? '')
      bot.telegram.sendMessage(ctx.chat.id, `${article
        .title} \n ${article.content}`)
    })
    
  
    console.log(articles)
  })
})