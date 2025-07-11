'use client'

import React from 'react'
import { FormControlLabel,Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from '../app/page.module.css'
const LastComp = () => {
  return (
    <div id='starter'>
         <div style={{ width: '100%', marginTop: '0rem', padding: '3rem' }}>
            <h2 style={{ fontFamily: 'Georgia, sans-serif', fontSize: '2.4rem', lineHeight: '3rem',maxWidth:'400px',color:'whitesmoke' }}>Want to have more customers?</h2>
            <h2 style={{ fontFamily: 'Georgia, sans-serif', fontSize: '1.75rem', lineHeight: '2.5rem', maxWidth: '300px',color:'whitesmoke' }}>fast, safe and easy</h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', color: 'gray', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: '24px',maxWidth:'400px' }}>{'With our help, we will take your business to a whole new level.'}</p>
            <div style={{ padding: '0.4rem',display:'flex',flexDirection:'column' }}>
                <FormControlLabel style={{ marginTop: '0.5rem', marginBottom: '1rem',color:'whitesmoke' }} control={<CheckCircleIcon style={{ marginRight: '0.75rem',color:'whitesmoke',borderRadius:'50%',fontSize:'1.7rem' }} />} label={'1200 satisfied customers'} />
                <FormControlLabel style={{ marginBottom: '1rem',color:'whitesmoke' }} control={<CheckCircleIcon style={{ marginRight: '0.75rem',color:'whitesmoke',borderRadius:'50%',fontSize:'1.7rem'}} />} label={'Latest technologies'} />
                <FormControlLabel style={{color:'whitesmoke'}} control={<CheckCircleIcon style={{ marginRight: '0.75rem',color:'whitesmoke',borderRadius:'50%',fontSize:'1.7rem' }} />} label={'Free consultation'} />
            </div>
         <div style={{height:'30px'}}></div>
         <button style={{width:'14rem',height:'3.4rem'}} className={styles.bookBtn}>Book a consultation</button>
           
        </div>
    </div>
  )
}

export default LastComp