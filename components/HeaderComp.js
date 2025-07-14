'use client'

import React,{useState} from 'react'
import styles from '../app/page.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import FooterComp from './FooterComp';
const HeaderComp = () => {
  const [show, setshow] = useState(false)
  return (
    <>
  <div className={styles.navMenu} style={{transform:show?'translateX(0%)': 'translateX(-100%)',transition:'all 0.3s linear',background:'black'}}>
    <div style={{display:'flex',justifyContent:'end'}}>
      <CloseIcon onClick={()=> setshow(false)} style={{background:'black',color:'whitesmoke',margin:'0.75rem 0.75rem',fontSize:'1.8rem',cursor:'pointer'}}/>
    </div>
   <FooterComp/>
  </div>
     <header className={styles.headerMoth}>
        <img className={styles.logoImg} alt='stokk tech mediatech ' src='/images/logo-stokk.png'/> 
               <MenuIcon onClick={()=> setshow(true)} className={styles.logoiconny} />
    </header>
    </>
   
  )
}

export default HeaderComp