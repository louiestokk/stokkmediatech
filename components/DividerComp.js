'use client'

import React, { useEffect, useState } from 'react';
import CarousalCompj from './CarousalCompj'
import styles from '../app/page.module.css'
const DividerComp = () => {
      const [count, setCount] = useState(1);
      useEffect(() => {
    let start = 1;
    const end = 379;
    const duration = 3000; // Räknar upp under 2 sekunder
    const increment = (end - start) / (duration / 50); // Ökar snabbt

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50); // Uppdaterar var 50 millisekund

    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{width:'100%'}}>
        <div style={{height:'30px'}}></div>
           <div style={{ textAlign: 'center', width: '100%', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Georgia, sans-serif',fontSize:'2rem',color:'whitesmoke' }}>
          + {count.toLocaleString()}
        </h2>
        <p style={{ fontSize: '1rem', marginTop: '0.75rem', marginBottom: '4rem', fontFamily: 'Montserrat, sans-serif', textAlign: 'center',color:'whitesmoke' }}>
         customers have been helped by us
        </p>
      </div>
        <CarousalCompj/>
        <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
          <a title='louiestokk@gmail.com' className={styles.bookBtn} href="mailto:louiestokk@gmail.com">
          Book a consultation
          </a>

        </div>
        
    </div>
  )
}

export default DividerComp