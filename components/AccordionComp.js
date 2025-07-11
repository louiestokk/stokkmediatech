'use client'

import React from 'react'
import {Accordion,AccordionActions,AccordionSummary,AccordionDetails,Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
const AccordionComp = () => {
      const [expanded, setExpanded] = React.useState(false);
      
    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
      <div style={{margin:'3rem 0'}}>
        <h2 style={{color:'whitesmoke',textAlign:'center',marginBottom:'1.5rem'}}>FAQ</h2>
        {accordionArray?.map((el,i)=>(
          <Accordion expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)} key={i} style={{background:'transparent',color:'white',borderBottom:'0.5px solid white',width:'80%',margin:'1rem auto',padding:'0.25rem'}}>
        <AccordionSummary
          expandIcon={<AddIcon style={{color:'rgb(251, 248, 248)',fontSize:'0.95rem'}}/>}
          aria-controls="panel1-content"
          id="panel-header"
          style={{fontFamily:'Montserrat,sans-serif',fontWeight:'700',color:'rgb(251, 248, 248)',fontSize:'0.95rem'}}
        >
         {el.title}
        </AccordionSummary>
        <AccordionDetails>
        {el.text}
        </AccordionDetails>
      </Accordion>
        ))}
      </div>
  )
}

export default AccordionComp

const accordionArray = [
  {
    title: 'What services do web agencies in Zanzibar typically offer?',
    text: 'Web agencies in Zanzibar commonly provide website design, development, app development, hosting, SEO, digital marketing, e-commerce solutions, maintenance, social media management, and content creation.'
  },
  {
    title: 'How much does it cost to build a website in Zanzibar?',
    text: 'Costs vary depending on the complexity and features required. A basic website might cost between $300–$800, while e-commerce or multilingual sites may range from $1,000 to several thousand USD.'
  },
  {
    title: 'How long does it take to develop a website or mobile app?',
    text: 'A standard website can take 3–6 weeks. Mobile apps or more complex platforms may take 2–4 months, depending on features, revisions, and testing.'
  },
  {
    title: 'How can I promote my website or app in Zanzibar?',
    text: 'Effective promotion includes search engine optimization (SEO), Google Ads, Facebook/Instagram marketing, influencer collaborations, email campaigns, and creating high-quality content such as blogs or videos.'
  },
  {
    title: 'Do I need to update and maintain my website regularly?',
    text: 'Yes. Regular updates improve security, performance, and search rankings. Many agencies offer monthly maintenance packages that include backups, updates, and content management.'
  }
];

