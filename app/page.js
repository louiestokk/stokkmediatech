import Image from 'next/image'
import styles from './page.module.css'
import HeaderComp from '../components/HeaderComp'
import HeroComp from '../components/HeroComp'
import FooterComp from '../components/FooterComp'
import ShowCaseComp from '../components/ShowCaseComp'
import DividerComp from '../components/DividerComp'
import LastComp from '../components/LastComp'
import AccordionComp from '../components/AccordionComp'
import LazyPopBtns from '../components/LazyPopBtns'

export default function Home() {
  return (<div className={styles.mother}>
    <HeaderComp/>
 <main className={styles.main}>
   <HeroComp/>
   <DividerComp/>
   <div style={{height:'40px'}}></div>
 <ShowCaseComp/>
 <div style={{height:'40px'}}></div>
 <AccordionComp/>
  <div style={{height:'100px'}}></div>
  <LazyPopBtns/>
   <div style={{height:'100px'}}></div>
 <LastComp/>
 <div style={{height:'20px'}}></div>
    </main>
    <FooterComp/>
  </div>
   
  )
}
