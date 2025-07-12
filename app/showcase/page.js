import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import HeaderComp from '../../components/HeaderComp'
import LastComp from '../../components/LastComp'
import FooterComp from '../../components/FooterComp'
const ShowCaseRestaurant = () => {
  return (
    <div>  
        <HeaderComp/>
        <div style={{width:'100%',height:'1px',background:'#ff3ff2',marginBottom:'1rem'}}></div>
        <h2 className={styles.showcasetitlennnn} style={{color:'white',padding:'0.5rem',marginTop:'1rem'}}>Showcases</h2>
            <p style={{padding:'0.5rem'}} className={styles.jasem} >Here you can see a selection of projects we have delivered. Do you have any questions about a project or want to know how we work? Do not hesitate to contact us and we will tell you more.</p>
        <section style={{padding:'0.5rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Link style={{textDecoration:'none'}} target='_blank' href={'https://hotmat.se/'}>
        <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>hotmat.se food delivery</h4>
           <div style={{width:'100%',position:'relative',marginBottom:'2rem'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',maxWidth:'700px'}} src={'/images/food-delivery-app.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Food deliver mobile and web Sass application</p>
          </div>
        </Link>
       <Link style={{textDecoration:'none'}} target='_blank' href={'https://yumyum.se/'}>
               <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>yumyum.se fast food chain</h4>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',maxWidth:'700px'}} src={'/images/restaurant-chain.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Order/Crm system, food ordering and delivering app</p>
          </div>
       </Link>
      <div style={{height:'20px'}}></div>
         <Link style={{textDecoration:'none'}} target='_blank' href={'https://www.zanzihome.com/'}>
               <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>zanzihome.com real estate, cars & tours</h4>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img className={styles.ssssss} loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/zanzihome-new.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Sass application properties, car rentals and tours</p>
          </div>
       </Link>
        <div style={{height:'20px'}}></div>
         <Link style={{textDecoration:'none'}} target='_blank' href={'https://www.recyclerapp.com/'}>
               <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>recyclerapp.com recycling application</h4>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4  className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',maxWidth:'700px'}} src={'/images/recycler-banner.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Get help with recycling application</p>
          </div>
       </Link>
        <div style={{height:'20px'}}></div>
        <Link style={{textDecoration:'none'}} target='_blank' href={'https://www.huba-tours.com/'}>
               <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>hubatours.com tours & safari</h4>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/safarai.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Book tours & safari application</p>
          </div>
       </Link>
         <div style={{height:'20px'}}></div>
        <Link style={{textDecoration:'none'}} target='_blank' href={'https://www.bokabord.se'}>
               <h4 style={{color:'whitesmoke',marginBottom:'0.35rem'}}>bokabord.se restaurant booking</h4>
         <div style={{width:'100%',position:'relative',margin:'1rem 0'}}>
            <h4 className={styles.showcaseitemtitle}>App</h4>
            <img loading='lazy' style={{width:'100%',objectFit:'cover',height:'250px',boxShadow:'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}} src={'/images/book-table.png'}/>
            <p style={{color:'gray',fontSize:'0.85rem',marginTop:'1.5rem'}}>Book table at restaurants application</p>
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