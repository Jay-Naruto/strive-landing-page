import React from 'react'
import styles from "./Works.module.css"
import { useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
export default function Works() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
    const parallax = useParallax({

        scale: isDesktopOrLaptop ? [1,1] : [0.1, 1.2],
        // translateY : isDesktopOrLaptop && [-0,100] 
      });
      const parallaxb1 = useParallax({
        scale: isDesktopOrLaptop ? [1,1] : [0.5, 1],

      });
      const parallaxb2 = useParallax({
        scale: isDesktopOrLaptop ? [1,1] : [0.8, 1],
      

      });
      const parallaxb3 = useParallax({
        scale:isDesktopOrLaptop ? [1,1] : [0.5, 1],
        
      });
      const parallaxb4 = useParallax({
        scale:isDesktopOrLaptop ? [1,1] : [0.9, 1],
       
      });
      const parallaxb5 = useParallax({
        scale:isDesktopOrLaptop ? [1,1] : [0.8, 1],
       
        
      });
      const parallaxb6 = useParallax({

        scale:isDesktopOrLaptop ? [1,1] : [0.7, 1],
      });
  return (
    <div id='works' className={styles.works} >
            {/* <img className={styles.bkg} src='./workbkg.png' alt=''/> */}

        <div className={styles.workInner}>
            <div  className={styles.workInnerTitle}>
                HOW IT WORKS
            </div>
            <div  className={styles.workInnerboxes}>
            <div ref={parallax.ref}></div>

 {
  !isDesktopOrLaptop &&
  <div ref={parallax.ref} className={styles.parallaxLady}>
  <img className={styles.lady} src='./works.png' alt=''/>
  </div>
 }
           

            <div ref={parallaxb1.ref}></div>
            <div ref={parallaxb2.ref}></div>
            <div ref={parallaxb3.ref}></div>
            <div ref={parallaxb4.ref}></div>
            <div ref={parallaxb5.ref}></div>
            <div ref={parallaxb6.ref}></div>


        
        {
          isDesktopOrLaptop ?
          (
    <div> <img className={styles.mobile_works} src='./mobile_works.png' alt=''/>
    </div>
          )
          :
          
            <>
            <div ref={parallaxb1.ref} className={styles.parallaxBox1}>
                <div className={`${styles.box} ${styles.box1}`}>

 <img src='./w1.png' alt=''/>

                </div>
            </div>

            <div ref={parallaxb2.ref} className={styles.parallaxBox2}>
                <div className={`${styles.box} ${styles.box2}`}>
                <img src='./w2.png' alt=''/>


                </div>
            </div>

            <div ref={parallaxb3.ref} className={styles.parallaxBox3}>
                <div className={`${styles.box} ${styles.box3}`}>
 <img src='./w3.png' alt=''/>
                    
                </div>
            </div>

            <div ref={parallaxb4.ref} className={styles.parallaxBox4}>
                <div className={`${styles.box} ${styles.box4}`}>
                <img src='./w4.png' alt=''/>



                </div>
            </div>

            <div ref={parallaxb5.ref} className={styles.parallaxBox5}>
                <div className={`${styles.box} ${styles.box5}`}>
                <img src='./w5.png' alt=''/>


                </div>
            </div>

            <div ref={parallaxb6.ref} className={styles.parallaxBox6}>
                <div className={`${styles.box} ${styles.box6}`}>
 <img src='./w6.png' alt=''/>
                    

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
