import React from 'react'
import Link from 'next/link'
import styles from '../../page.module.css'
import HeaderComp from '../../../components/HeaderComp'
import LastComp from '../../../components/LastComp'
import FooterComp from '../../../components/FooterComp'
const ShowCaseRestaurant = () => {
  return (
    <div>  
        <HeaderComp/>
        <div style={{width:'100%',height:'1px',background:'#ff3ff2',marginBottom:'1rem'}}></div>
        <h2 style={{color:'white',padding:'0.5rem',marginTop:'1rem'}}>Showcase Restaurants</h2>
            <p style={{padding:'0.5rem'}} className={styles.jasem} >Here you can see a selection of projects we have delivered. Do you have any questions about a project or want to know how we work? Do not hesitate to contact us and we will tell you more.</p>
        <section style={{padding:'0.5rem'}}>
        <Link style={{textDecoration:'none'}} target='_blank' href={'https://hotmat.se/'}>
           <div style={{width:'100%',position:'relative',marginBottom:'2rem'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/food-delivery-app.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Food deliver mobile and web Sass application</p>
          </div>
        </Link>
       <Link style={{textDecoration:'none'}} target='_blank' href={'https://yumyum.se/'}>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/restaurant-chain.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Order/Crm system, food ordering and delivering app</p>
          </div>
       </Link>
          
      </section>
      <LastComp/>
      <FooterComp/>
      </div>
  )
}

export default ShowCaseRestaurant