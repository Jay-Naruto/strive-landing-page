import React, { useEffect, useRef, useState } from 'react'
import styles from "./Landing.module.css"
import { useParallax } from "react-scroll-parallax";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export default function Landing({scrollPosition}) {
    // const parallax = useParallax({
    //     rotate: [0, 360],


    //   });
    



    const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);

    const handleFirstAnimationComplete = () => {
      setIsFirstAnimationComplete(true);
    };
    const [rotation, setRotation] = useState(0);
    const elementRef = useRef(null);
    const elementRef2= useRef(null);

    useEffect(() => {
        const textDiv = document.querySelector(`.${styles.create}`);
        if (textDiv) {
          if (scrollPosition >= 500) {
            textDiv.classList.add('transition-text');
            setTimeout(() => textDiv.classList.remove('hidden'), 100);
          }
        }
      }, [scrollPosition]);
      
    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const elementX = elementRef.current.offsetLeft + elementRef.current.offsetWidth / 2;
                const elementY = elementRef.current.offsetTop + elementRef.current.offsetHeight / 2;
                const deltaX = window.scrollX - elementX;
                const deltaY = window.scrollY - elementY;
                const angle = Math.atan2(deltaY, deltaX);

                setRotation(angle + Math.PI / 2 * 2.0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

      


    return (
    <div  className={styles.container_body}>
        <img className={styles.wave} src='./wave.png' alt=''/>
        <img
                            ref={elementRef2}
                            style={{
                                position: 'absolute',
                                zIndex: 10,
                             
                                left: '50%',
                                top: '45%',
                                transform: `translate(-50%, -50%) rotate(${-rotation}rad)`,
                            }}
        className={styles.arrow} src='./arrow.png' alt=''/>
        <img className={ scrollPosition < 2000 ? styles.landingbtn :styles.landingbtn2 } src='./landing-btn.png' alt=''/>
       
        <div as={motion.div} initial="initial" animate="animate"  className={styles.spinner}>
            <motion.div initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1, rotate: -360 }} transition={{ duration: 2, ease: "easeInOut" }} >
            <img 
                    className={`${styles.spinnerImg}`}
                    ref={elementRef}
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                     
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${rotation}rad)`,
                    }}
        src='./cubes.png' alt=''/>
            </motion.div>

      </div>
        <div>
      {

                scrollPosition < 500 ? 
                <div id='id' className={styles.create}>
                CREATE
                </div>
                :scrollPosition < 1000 ? 
                <div  id='id' className={styles.create}>
                EARN
                </div>
                : scrollPosition < 2000 ? 
                <div id='id'  className={styles.create}>
                GROW
                </div>
                :null
      }


        </div>
  


        <div className={styles.landing_bottom}>
            <div className={styles.landing_bottom1}>
            Get funded for your 
            </div>
            <div className={styles.landing_bottom2}>
            creative projects instantly
            </div>

        </div>

    </div>
  )
}
