import React from 'react'
import Faq from 'react-faq-component';
import styles from "./Faq.module.css"
import Faq2 from '../Faq2'
import { useMediaQuery } from 'react-responsive';

export default function Faqs() {    
  const isDesktopOrLaptop = useMediaQuery({
  query: '(max-width: 1000px)'
})
  const data = {
    rows: [
      {
        label: "Q1", // Add labels here
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        label: "Q2", // Add labels here
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        label: "Q3", // Add labels here
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        label: "Q4", // Add labels here
        title: "What is the package version",
        content: "v1.0.5"
      }
    ]
  };
  
  return (
    <div id='FAQ' className={styles.faq}>
        <div className={styles.faqbox}>
            <div  className={styles.faqboxLeft}>
        <img className={styles.cubes} src='./cubes.png' alt=''/>

                <div  className={styles.faqboxLeft1}>
                  {
                    isDesktopOrLaptop ?
<>
Frequently Asked 

</>
:
<>
Frequently<br></br>Asked 
</>
                  }
                </div>
                <div  className={styles.faqboxLeft2}>
                Questions
                </div>

            </div>
            <div  className={styles.faqboxRight}>
            <Faq2 data={data}/>
            </div>

        </div>
    </div>
  )
}
