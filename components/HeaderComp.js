import React from 'react'
import styles from '../app/page.module.css'
import MenuIcon from '@mui/icons-material/Menu';
const HeaderComp = () => {
  return (
    <header className={styles.headerMoth}>
        <img className={styles.logoImg} alt='stokk tech mediatech ' src='/images/logo-stokk.png'/> 
               <MenuIcon className={styles.logoiconny} />
    </header>
  )
}

export default HeaderComp