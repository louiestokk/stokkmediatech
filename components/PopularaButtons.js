'use client'

import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Link from 'next/link'

const servicesArrayPop = [
    { title: "Web Design" },
    { title: "App development" },
    { title: "Social media" },
    { title: "Marketing" },
    { title: "Web3" },
    { title: "Web development" },
    { title: "Sass apps" },
    { title: "SEO" },
    { title: "Scraping data" },
    { title: "CRM" },
    { title: "Hosting" },
    { title: "Mobile app" }
];

const PopularaButtons = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: '-10%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#a100ff' fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,186.7C672,171,768,181,864,154.7C960,128,1056,64,1152,85.3C1248,107,1344,213,1392,266.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#a100ff', height: '650px' }}>
        <h2 style={{ fontFamily: 'Georgia,sans-serif', maxWidth: '80%', marginBottom: '2rem', background: '#a100ff', color: '#31024bff' }}>Populära services</h2>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', background: '#a100ff' }}>
          {servicesArrayPop.map((el, i) => (
            <Link href="/" key={i} style={{ borderRadius: '10rem', background: '#ff8be8', color: '#31024bff', margin: '0.5rem 0.5rem', display: 'flex', alignItems: 'center', padding: '0.75rem', textDecoration: 'none' }}>
              <WhatshotIcon style={{ fontSize: '1.2rem', marginRight: '0.35rem', background: 'transparent', color: 'red' }} />
              {el.title}
            </Link>
          ))}
        </div>
      </div>
      <svg style={{ position: 'absolute', bottom: '-5%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a100ff" fillOpacity="1" d="M0,320L48,298.7C96,277,192,235,288,208C384,181,480,171,576,181.3C672,192,768,224,864,245.3C960,267,1056,277,1152,234.7C1248,192,1344,96,1392,48L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
  )
}

export default PopularaButtons
