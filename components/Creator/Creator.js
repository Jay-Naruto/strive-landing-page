import React from 'react'
import styles from "./Creator.module.css"
import { useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

export default function Creator() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

      // const parallaxMobile = useParallax({
      
      //   translateY: isDesktopOrLaptop ?  [70,-60] : [50,-80],
      // });
      // const parallax1 = useParallax({
      //   translateX:[-100,0],
      //   easing: [1, -0.75, 0.5, 1.34],
      // });
      // const parallax2 = useParallax({
      //   translateX:[0,100],
      // });
      // const parallax3 = useParallax({

      //   scale: [0.5, 1],
      // });
    //   const parallax4 = useParallax({
    //     translateX:[0,300],

    //     scale: [0.1, 1.5],
    //   });
      
  return (
    <div id='speakers' className={styles.creator}>
        <div  className={styles.creatorBox}>


        {isDesktopOrLaptop &&
         <div  className={styles.parallaxBtn4}>

         <img
         
                 className={styles.creator_btn4} src='./creator-btn3.png' alt=''/>
         
         
                 </div>
}

        <img className={styles.logo} src='./bkg-logo.png' alt=''/>

        <div className={styles.creatorLeft}>
            <div className={styles.creatorLeftText1}>
            Creator Led Campaigns

            </div>
            <div className={styles.creatorLeftText2}>
            Powered By strive
            </div>
            <div  className={styles.creatorLeftText3}>
            Lorem ipsum dolor sit amet consectetur. Bibendum sit iaculis volutpat nisl enim in at. Amet dignissim proin vitae dui vitae consequat mattis. Sit aliquam quam morbi aliquet.
            </div>

        </div>
        
        <div className={styles.creatorRight}>
            <div className={styles.creatorRightBox}>
            <img className={styles.ellipse} src='./Ellipse.png' alt=''/>
            
              <div  className={styles.parallaxPhone}>
 
              <img
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="center-bottom"
              className={styles.phone} src='./phone.png' alt=''/>

  
              </div>
         


            <div  className={styles.parallaxBtn1}>
            <img
    
            className={styles.creator_btn1} src='./creator-btn1.png' alt=''/>


            </div>

            <div  className={styles.parallaxBtn2}>

            <img
         data-aos="fade-left"
     
            className={styles.creator_btn2} src='./creator-btn2.png' alt=''/>


            </div>

            <div  className={styles.parallaxBtn3}>
            <img
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.creator_logo} src='./creator-logo.png' alt=''/>


            </div>


            </div>

            {
              !isDesktopOrLaptop &&
              <div  className={styles.parallaxBtn4}>

              <img
          
              className={styles.creator_btn4} src='./creator-btn3.png' alt=''/>
  
  
              </div>
            }




        </div>



 

        </div>

    </div>
  )
}
