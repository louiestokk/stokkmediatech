'use client'

import React, { useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import { Button } from '@mui/material'

const HeroComp = () => {
  const fullText = "Your trusted web agency for tailored digital solutions. We help businesses grow online through professional web development, web design, SEO and Digital presence. We can turn your idea to a Sass Application, MobileApp our a WebApplication to manage your hotel, restaurant, real estate agency and other branches."
  const [displayedText, setDisplayedText] = useState('')

useEffect(() => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      setDisplayedText(prev => prev + fullText.charAt(index)) // safer with charAt
      index++
    } else {
      clearInterval(interval)
    }
  }, 20)

  return () => clearInterval(interval)
}, [])

  return (
    <div className={styles.heromother}>
      <h1 className={styles.herotitle}>Web, App, Sass & Digital Marketing</h1>

      <p
        className={styles.heropara}
        style={{
          color: 'gray',
          fontSize: '0.8rem',
          padding: '0.5rem',
          lineHeight: '20px',
          maxWidth: '700px',
          whiteSpace: 'pre-wrap',
          minHeight: '100px'
        }}
      >
        {displayedText}
      </p>

      <div className={styles.iconsstackmoth}>
        <img className={styles.stackicons} alt='ios' src={'/images/ios-log-removebg-preview.png'} />
        <img style={{ height: '30px', width: '40px' }} className={styles.stackicons} alt='android' src={'/images/android-lg.png'} />
        <img style={{ height: '90px', width: '90px' }} className={styles.stackicons} alt='netxjs' src={'/images/nextjs-logo-removebg-preview.png'} />
        <img style={{ height: '45px', width: '45px' }} className={styles.stackicons} alt='reactjs' src={'/images/reactjs.png'} />
      </div>
    </div>
  )
}

export default HeroComp
