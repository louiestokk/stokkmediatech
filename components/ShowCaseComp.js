import Link from 'next/link'
import React from 'react'
import styles from '../app/page.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const ShowCaseComp = () => {
  return (
    <div className={styles.showcasesmother} style={{padding:'1rem'}}>
      <div style={{height:'30px'}}></div>
              <h2 className={styles.showTitle}>Some of our selected customer cases</h2>
        <p className={styles.jasem} >Here you can see a selection of projects we have delivered. Do you have any questions about a project or want to know how we work? Do not hesitate to contact us and we will tell you more.</p>
        <Link className={styles.abbs} style={{fontSize:'0.8rem',color:'#ff3ff2',display:'flex',alignItems:'center',width:'100%'}} href={'/showcase/restaurants'}>See more we've done <ArrowRightAltIcon style={{marginTop:'0.2rem',marginLeft:'0.2rem'}}/></Link>
              <div style={{height:'30px'}}></div>
      <section>
        <Link style={{textDecoration:'none'}} target='_blank' href={'https://hotmat.se/'}>
           <div style={{width:'100%',position:'relative',marginBottom:'2rem'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',maxWidth:'700px'}} src={'/images/food-delivery-app.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Food deliver mobile and web Sass application</p>
          </div>
        </Link>
       <Link style={{textDecoration:'none'}} target='_blank' href={'https://yumyum.se/'}>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',maxWidth:'700px'}} src={'/images/restaurant-chain.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Order/Crm system, food ordering and delivering app</p>
          </div>
       </Link>
          
      </section>
    </div>
  )
}

export default ShowCaseComp