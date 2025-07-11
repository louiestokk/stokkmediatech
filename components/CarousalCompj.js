'use client'

import React,{useEffect,useRef} from 'react'
import { besvarade } from '../dummy/carousaldata';
import styles from '../app/page.module.css'
const CarousalCompj = () => {
     const carouselRef = useRef(null);
        useEffect(() => {
        const interval = setInterval(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollTop += 1;
            if (carouselRef.current.scrollTop >= carouselRef.current.scrollHeight / 2) {
              carouselRef.current.scrollTop = 0;
            }
          }
        }, 30);
    
        return () => clearInterval(interval);
      }, []);
  return (
     <div ref={carouselRef} className={styles.carouselContainer}>
    <div className={styles.carouselContent}>
      {besvarade?.map((item, index) => (
        <div key={index} className={styles.carouselItem}>
        <div style={{display:'flex',alignItems:'center',background:'gray'}}>
        <div style={{background:'#ff3ff2',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',width:'3rem',height:'3rem',marginRight:'10px'}}>
        <img src={item.image} alt={item.title}  style={{width:'25px',height:'25px',objectFit:'cover',background:'transparent'}}/>
        </div>
          <p style={{fontSize:'0.7rem',color:'black',background:'transparent',color:'whitesmoke'}}>{item.title}</p>
        </div>
          <p style={{fontSize:'0.7rem',marginLeft:'5px',maxWidth:'40px',marginRight:'5px',background:'transparent',color:'whitesmoke'}}>{item.tid}</p>
        </div>
      ))}
      {besvarade?.map((item, index) => (
        <div key={index + besvarade.length} className={styles.carouselItem}>
        <div style={{display:'flex',alignItems:'center',background:'gray'}}>
        <div style={{background:'#ff3ff2',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',borderRadius:'0.5rem',width:'3rem',height:'3rem',marginRight:'10px'}}>
        <img src={item.image} alt={item.title}  style={{width:'25px',height:'25px',objectFit:'cover',background:'transparent'}}/>
        </div>
          <p style={{fontSize:'0.8rem',background:'transparent',color:'whitesmoke'}}>{item.title}</p>
        </div>
          <p style={{fontSize:'0.8rem',marginLeft:'5px',maxWidth:'40px',marginRight:'5px',background:'transparent',color:'whitesmoke'}}>{item.tid}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CarousalCompj