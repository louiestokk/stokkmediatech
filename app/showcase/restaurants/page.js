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
        <h3 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>hotmat.se food delivery</h3>
           <div style={{width:'100%',position:'relative',marginBottom:'2rem'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/food-delivery-app.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Food deliver mobile and web Sass application</p>
          </div>
        </Link>
       <Link style={{textDecoration:'none'}} target='_blank' href={'https://yumyum.se/'}>
               <h3 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>yumyum.se fast food chain</h3>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/restaurant-chain.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Order/Crm system, food ordering and delivering app</p>
          </div>
       </Link>
       <div style={{height:'20px'}}></div>
                 <Link style={{textDecoration:'none'}} target='_blank' href={'https://maps.app.goo.gl/yS8yg44ph37Mtndt6'}>
                         <h3 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>Rainbow Restaurant Zanzibar</h3>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <img loading='lazy' alt='Rainbow Paje Restaurant Zanzibar' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',opacity:'0.8'}} src={'/images/rainbow-restaurant-cover.jpg'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Digital marketing -  maps, search & socials</p>
          </div>
       </Link>
          <div style={{height:'20px'}}></div>
                 <Link style={{textDecoration:'none'}} target='_blank' href={'https://maps.app.goo.gl/3PTL3viJLW1TyHSa9'}>
                         <h3 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>Al Casbah Restaurant Zanzibar</h3>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <img loading='lazy' alt='Al Casbah Restaurant Paje Zanzibar' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',opacity:'0.7'}} src={'/images/al-casbah-zanzibar.jpg'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Digital marketing -  maps, search & socials</p>
          </div>
       </Link>
      </section>
      <div style={{height:'30px'}}></div>
      <LastComp/>
      <FooterComp/>
      </div>
  )
}

export default ShowCaseRestaurant