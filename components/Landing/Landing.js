import React from 'react'
import styles from "./Landing.module.css"
import { useParallax } from "react-scroll-parallax";
import Typewriter from 'typewriter-effect';
export default function Landing() {
    const parallax = useParallax({
        rotate: [0, 360],
        translateY:[0,0],
        translateX: [0, 0],
        // easing: [0.5, -0.75, 0.5, 1.34],

      });

  return (
    <div className={styles.container_body}>
        <img className={styles.wave} src='./wave.png' alt=''/>
        <img className={styles.arrow} src='./arrow.png' alt=''/>
        <img className={styles.landingbtn} src='./landing-btn.png' alt=''/>
        <div ref={parallax.ref} className={styles.spinner}>
        <img src='./cubes.png' alt=''/>
      </div>
        <div>

       <div className={styles.create}>
       <Typewriter
            options={{
                strings: ['CREATE', 'EARN','GROW'],
                autoStart: true,
                loop: true,
            }}
            />
       </div>

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
