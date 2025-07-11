import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box,Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ChairIcon from '@mui/icons-material/Chair';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Link from 'next/link';
import styles from '../app/page.module.css'

const TimeLineComp = () => {
  return (
    <div>
   <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <CalculateIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Box className={styles.timelinebox} style={{border:'1px solid #1976d2'}}>
                <Typography variant='h6'>Värdera dödsbo</Typography>
                <p>
                    Vi på <Link className={styles.timelinnelinks} title='öteborgs Dödsbo Hjälp' href={'https://goteborgs-dodsbo.com'}>Göteborgs Dödsbo Hjälp</Link> erbjuder alla kostnadsfri <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/vardera-dodsbo-goteborg'} title='värdering av dödsbon'>värdering av dödsbon</Link> och bohag i Göteborg. Vi börjar oftast med att värdera bohag och lösöre innan vi <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/koper-dodsbo-goteborg'} title='köper upp dödsboet'>köper upp dödsboet</Link> och dess lösöre.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AddBusinessIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Box className={styles.timelinebox} style={{border:'1px solid #9c27b0'}}>
                <Typography variant='h6'>Köpa dödsbo</Typography>
                <p>
                Vill du att vi skall <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/koper-dodsbo'} title='köpa ett dödsbo'>köpa ett dödsbo</Link>? Vi köper upp dödsbon, bohag och allt i hemmet. Oftast hjälper vi till med att värdera sakerna och sedan <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/koper-dodsbo'} title='köpa ett dödsbo'>köpa upp</Link> för att sälja vidare i våra butiker.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{background:'#32de84'}}>
            <MonetizationOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Box className={styles.timelinebox} style={{border:'1px solid #32de84'}}>
                <Typography variant='h6'>Sälja dödsbo</Typography>
                <p>
                Har du ett <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/salja-dodsbo'} title='sälja ett dödsbo'>dödsbo att sälja</Link>? Vi köper och <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/salja-dodsbo'} title='köpa ett dödsbo'>säljer dödsbon</Link>, bohag och allt i hemmet. Lösöre av större värden kan säljas på olika auktioner och vi hjälper diig hela vägen för att få maximalt betalt för ditt <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/'} title='köpa ett dödsbo'>dödsbo</Link>.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{background:'pink'}}>
            <ChairIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Box className={styles.timelinebox} style={{border:'1px solid pink'}}>
                <Typography variant='h6'>Bortforsling dödsbo</Typography>
                <p>
            Saker som vi själva inte har användning av skänker vi till olika hjälporganisationer som <Link className={styles.timelinnelinks} href={'https://www.stadsmissionen.org/'} title='GÖTEBORGS STADSMISSION'>GÖTEBORGS STADSMISSION </Link>
             och det allra sista återvinner vi och kör till tippen. Vi kan hjälpa dig med  <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/bortforsling-dodsbo'} title='bortforsling dödsbo'>bortforsling </Link> av enskilda möbler och lösöre till auktioner som <Link className={styles.timelinnelinks} href={'https://goteborgsauktionskammare.se/'} title='Göteborgsauktionskammare'>Göteborgsauktionskammare</Link>.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{background:'orange'}}>
            <LocalShippingIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Box className={styles.timelinebox} style={{border:'1px solid orange'}}>
                <Typography variant='h6'>Tömma dödsbo</Typography>
                <p>
                Behöver du hjälp med att  <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/tomma-dodsbo'} title='tömma ett dödsbo'>tömma ett dödsbo</Link>? Vi på <Link className={styles.timelinnelinks} title='Göteborgs Dödsbo Hjälp' href={'https://goteborgs-dodsbo.com'}>Göteborgs Dödsbo Hjälp </Link>tömmer och <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/stada-dodsbo'} title='städa ett dödsbo'>städa</Link> dödsbon och bohag i Göteborg. Att tömma ett dödsbo är krävande både fysiskt och känslomässigt. Vi stöttar dig med ditt dödsbo hela vägen.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{background:'red'}}>
            <CleaningServicesIcon/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        <Box className={styles.timelinebox} style={{border:'1px solid red'}}>
                <Typography variant='h6'>Städa dödsbo</Typography>
                <p>
                <Link className={styles.timelinnelinks} title='Göteborgs Dödsbo Hjälp' href={'https://goteborgs-dodsbo.com'}>Göteborgs Dödsbo Hjälp </Link> har nu  <Link className={styles.timelinnelinks} href={'https://goteborgs-dodsbo.com/stada-dodsbo'} title='städa dödsbo'>städat dödsbon i Göteborg </Link>i över 50 år tillsamans i vårt team. Vår dödsbostädning garanterar dig en smidiig, trygg och kvalitativ dödsbostädning. Slipp krångel och tjafs och låt proffsen hjälpa dig.
                </p>
            </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  )
}

export default TimeLineComp