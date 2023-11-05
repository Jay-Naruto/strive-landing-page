import React from 'react'
import styles from "./Works.module.css"
import { useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

export default function Works() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })

  return (
    <div id='works' className={styles.works} >
            {/* <img className={styles.bkg} src='./workbkg.png' alt=''/> */}

        <div className={styles.workInner}>
            <div  className={styles.workInnerTitle}>
                HOW IT WORKS
            </div>
            <div  className={styles.workInnerboxes}>
       

 {
  !isDesktopOrLaptop &&
  <div  className={styles.parallaxLady}>
  <img className={styles.lady} src='./works.png' alt=''/>
  </div>
 }
           



        
        {
          isDesktopOrLaptop ?
          (
    <div
    data-aos="fade-left"
    data-aos-delay="300"

    style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',position:'relative'}} > 
                     <img className={styles.mobile_works} src='./work-mobile.png' alt=''/>
                  <div className={styles.lady} >
                  <img  src='./works.png' alt=''/>

                  </div>

    </div>
          )
          :
          
            <>
            <div  className={styles.parallaxBox1}>
                <div className={`${styles.box} ${styles.box1}`}>

                <img 
                data-aos="fade-right"
                
                src='./w1.png' alt=''/>

                </div>
            </div>

            <div  className={styles.parallaxBox2}>
                <div className={`${styles.box} ${styles.box2}`}>
          
                <img 
              data-aos="fade-right"
              
                src='./w2.png' alt=''/>


                </div>
            </div>

            <div  className={styles.parallaxBox3}>
                <div className={`${styles.box} ${styles.box3}`}>
             
                <img
              data-aos="fade-left"
              
                src='./w3.png' alt=''/>

         
                    
                </div>
            </div>

            <div  className={styles.parallaxBox4}>
                <div className={`${styles.box} ${styles.box4}`}>
            
                <img
                   data-aos="fade-left"
                   
                src='./w4.png' alt=''/>

         


                </div>
            </div>

            <div  className={styles.parallaxBox5}>
                <div className={`${styles.box} ${styles.box5}`}>
     
                <img
                 data-aos="fade-left"
                 
                src='./w5.png' alt=''/>

                

                </div>
            </div>

            <div  className={styles.parallaxBox6}>
                <div className={`${styles.box} ${styles.box6}`}>
             
                <img 
                data-aos="fade-up"
                
                src='./w6.png' alt=''/>

                
                    

                </div>
            </div>
            </>
          
        }



            </div>

        </div>
        {/* <div>
            <img className={styles.banner} src='./banner.png' alt=''/>
        </div> */}
    </div>
  )
}