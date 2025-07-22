import React from 'react'
import styles from '../app/page.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
const FooterComp = () => {
  return (
    <>
    <div style={{height:'50px'}}></div>
      <footer className={styles.footermoth}>
          <div>
            <img style={{width:'125px',height:'125px'}} alt='stokk tech mediatech ' src='/images/logo-stokk.png'/> 
            <h4 style={{color:'whitesmoke',marginBottom:'0.3rem'}}>Stokk MediaTech</h4>
            <p style={{fontSize:'0.7rem',width:'150px',lineHeight:'18px',color:'gray'}}> Tech, Media and Web Agency in Zanzibar with its origin from Sweden.</p>
        </div>
          <div>
            <h4 style={{marginTop:'1rem'}}>Services</h4>
            <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Website</p>
             <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Web Design</p>
              <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Web App</p>
              <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Sass App</p>
              <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Web3</p>
               <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Mobile App</p>
                <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Hosting & Domains</p>
              <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>CRM System</p>
               <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Digital marketing</p>
                <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Scraping data</p>
                  <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Search engine optimization</p>
                    <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Socials Automation</p>
                      <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Social Media Management</p>
                      <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>AI Development</p>
                       <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Foto/Video Creation & Editing</p>
                        <p style={{color:'gray',fontSize:'0.8rem',margin:'0.3rem 0'}}>Logo & Branding</p>
              
        </div>
         <div>
            <h4 style={{marginTop:'1rem'}}>Showcase</h4>
            <div style={{display:'flex',flexDirection:'column'}}>
              <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='/showcase/restaurants'>Restaurants</a>
                            <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='https://www.hotmat.se/' target='_blank'>Food Delivery</a>
  <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='https://www.zanzihome.com/'>Real Estate</a>
                        <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='https://www.huba-tours.com/' target='_blank'>Tours & Safari</a>
                        <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='https://www.recyclerapp.com/' target='_blank'>Recycling</a>
                          <a style={{color:'#ff3ff2',fontSize:'0.8rem',margin:'0.3rem 0'}} href='https://www.bokabord.se/lediga-bord?excludeEmpty=true&amount=2&date=2025-07-07&cityId=86915' target='_blank'>Book a restaurant</a>
            </div>
        </div>
          <div>
            <h4 style={{marginTop:'1rem'}}>Contact us</h4>
           <a style={{color:'#ff3ff2',marginRight:'1rem',display:'flex',alignItems:'center',textDecoration:'none',marginTop:'0.5rem'}} href='https://chat.whatsapp.com/EFh57YoFJbE5gTUY9B796f'>
           <WhatsAppIcon/>
           <p style={{fontSize:'0.8rem',marginLeft:'0.2rem'}}>WhatsApp</p>
           </a>
           <a title='louiestokk@gmail.com' style={{color:'#ff3ff2',marginRight:'1rem',display:'flex',alignItems:'center',textDecoration:'none',marginTop:'0.5rem'}} href="mailto:louiestokk@gmail.com">
           <EmailIcon/>
           <p style={{fontSize:'0.8rem',marginLeft:'0.2rem'}}>Send us Email</p>
           </a>
           <a style={{color:'#ff3ff2',marginRight:'0.5rem',display:'flex',alignItems:'center',textDecoration:'none',marginTop:'0.5rem'}} href="tel:+255655912498">
           <SmartphoneIcon/>
           <p style={{fontSize:'0.8rem',marginLeft:'0.2rem'}}>Call us</p>
           </a>
        </div>
        
    </footer>
    <div style={{height:'120px',width:'100%',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <h6 style={{color:'gray'}}>Stokk Tech Limited, Paje Zanzibar &copy; All Rights Reserved </h6>
        </div>
    </>
  )
}

export default FooterComp