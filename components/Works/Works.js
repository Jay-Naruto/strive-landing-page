import React from 'react'
import styles from "./Works.module.css"
import { useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
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
    <ScrollAnimation style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',position:'relative'}} animateIn="animate__zoomIn"> 
                     <img className={styles.mobile_works} src='./work-mobile.png' alt=''/>
                  <div className={styles.lady} animateIn="animate__slideInUp">
                  <img  src='./works.png' alt=''/>

                  </div>

    </ScrollAnimation>
          )
          :
          
            <>
            <div  className={styles.parallaxBox1}>
                <div className={`${styles.box} ${styles.box1}`}>
                <ScrollAnimation animateIn="animate__backInLeft">
                <img src='./w1.png' alt=''/>

                  </ScrollAnimation>

                </div>
            </div>

            <div  className={styles.parallaxBox2}>
                <div className={`${styles.box} ${styles.box2}`}>
                <ScrollAnimation animateIn="animate__backInLeft">
                <img src='./w2.png' alt=''/>

                  </ScrollAnimation>


                </div>
            </div>

            <div  className={styles.parallaxBox3}>
                <div className={`${styles.box} ${styles.box3}`}>
                <ScrollAnimation animateIn="animate__backInRight">
                <img src='./w3.png' alt=''/>

                  </ScrollAnimation>
                    
                </div>
            </div>

            <div  className={styles.parallaxBox4}>
                <div className={`${styles.box} ${styles.box4}`}>
                <ScrollAnimation animateIn="animate__backInRight">
                <img src='./w4.png' alt=''/>

                  </ScrollAnimation>


                </div>
            </div>

            <div  className={styles.parallaxBox5}>
                <div className={`${styles.box} ${styles.box5}`}>
                <ScrollAnimation animateIn="animate__backInRight">
                <img src='./w5.png' alt=''/>

                  </ScrollAnimation>

                </div>
            </div>

            <div  className={styles.parallaxBox6}>
                <div className={`${styles.box} ${styles.box6}`}>
                <ScrollAnimation animateIn="animate__backInRight">
                <img src='./w6.png' alt=''/>

                  </ScrollAnimation>
                    

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
