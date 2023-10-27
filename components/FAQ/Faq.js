import React from 'react'
import Faq from 'react-faq-component';
import styles from "./Faq.module.css"
export default function Faqs() {
    const data = {
    
        rows: [
          {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
          },
          {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
          },
          {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
          },
          {
            title: "What is the package version",
            content: "v1.0.5"
          }]
      }
  return (
    <div id='FAQ' className={styles.faq}>
        <div className={styles.faqbox}>
            <div  className={styles.faqboxLeft}>
        <img className={styles.cubes} src='./cubes.png' alt=''/>

                <div  className={styles.faqboxLeft1}>
                Frequently<br></br>Asked 
                </div>
                <div  className={styles.faqboxLeft2}>
                Questions
                </div>

            </div>
            <div  className={styles.faqboxRight}>
            <Faq data={data}/>
            </div>

        </div>
    </div>
  )
}
