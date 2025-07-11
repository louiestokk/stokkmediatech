'use client'

import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')

  const handleScrape = async () => {
    try {
      const res = await fetch('/api/scrape')
      console.log(res)      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Scraping Webapp</h1>
    <button onClick={()=> handleScrape()}>scare data</button>
    </div>
  )
}
