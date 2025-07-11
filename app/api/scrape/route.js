// app/api/scrape/route.js

export const dynamic = 'force-dynamic'

import cheerio from 'cheerio'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('https://real-estate-zanzibar.com')
    const html = response.data

    const $ = cheerio.load(html)

    const title = $('h1').first().text().trim()
    const links = []

    $('a').each((i, el) => {
      const href = $(el).attr('href')
      if (href) links.push(href)
    })

    return new Response(JSON.stringify({ title, links }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    })
  }
}
