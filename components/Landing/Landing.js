import React, { useEffect, useRef, useState } from 'react'
import styles from "./Landing.module.css"
import { useParallax } from "react-scroll-parallax";
import Typewriter from 'typewriter-effect';
export default function Landing() {
    // const parallax = useParallax({
    //     rotate: [0, 360],


    //   });
    const [rotation, setRotation] = useState(0);
    const elementRef = useRef(null);

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
    <div className={styles.container_body}>
        <img className={styles.wave} src='./wave.png' alt=''/>
        <img className={styles.arrow} src='./arrow.png' alt=''/>
        <img className={styles.landingbtn} src='./landing-btn.png' alt=''/>
        <div className={styles.spinner}>
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
