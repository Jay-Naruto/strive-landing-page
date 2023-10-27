import React from 'react'
import styles from "./Works.module.css"
import { useParallax } from 'react-scroll-parallax';
export default function Works() {
    const parallax = useParallax({

        scale: [0.1, 1.2],
      });
      const parallaxb1 = useParallax({
        scale: [0.5, 1],

      });
      const parallaxb2 = useParallax({
        scale: [0.8, 1],
      

      });
      const parallaxb3 = useParallax({
        scale: [0.5, 1],
        
      });
      const parallaxb4 = useParallax({
        scale: [0.9, 1],
       
      });
      const parallaxb5 = useParallax({
        scale: [0.8, 1],
       
        
      });
      const parallaxb6 = useParallax({

        scale: [0.7, 1],
      });
  return (
    <div id='works' className={styles.works} >
            <img className={styles.bkg} src='./workbkg.png' alt=''/>

        <div className={styles.workInner}>
            <div  className={styles.workInnerTitle}>
                HOW IT WORKS
            </div>
            <div  className={styles.workInnerboxes}>
            <div ref={parallax.ref} className={styles.parallaxLady}>
            <img className={styles.lady} src='./works.png' alt=''/>
            </div>

            <div ref={parallaxb1.ref} className={styles.parallaxBox1}>
                <div className={`${styles.box} ${styles.box1}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    The project campaign page can be set up by your or your team within a day. You must have details about your project ready to get your page set up
                    </div>


                </div>
            </div>

            <div ref={parallaxb2.ref} className={styles.parallaxBox2}>
                <div className={`${styles.box} ${styles.box2}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    The funds are raised in exchange for revenue share with your investors. For instance if you want to raise $30k for 30%, your project is valued at $100k and you must distribute 30% of revenue generated to your investors/fans via Strive Network
                    </div>


                </div>
            </div>

            <div ref={parallaxb3.ref} className={styles.parallaxBox3}>
                <div className={`${styles.box} ${styles.box3}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    You need to be an eligible content creator on platforms such instagram, youtube, spotify, tiktok or twitter. (check eligibility criteria)
                    </div>


                </div>
            </div>

            <div ref={parallaxb4.ref} className={styles.parallaxBox4}>
                <div className={`${styles.box} ${styles.box4}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    Apply to join Strive Network as a creator
                    </div>


                </div>
            </div>

            <div ref={parallaxb5.ref} className={styles.parallaxBox5}>
                <div className={`${styles.box} ${styles.box5}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    Once you are approved, you can set up a campaign to raise funds for your project such as music video, reels, youtube video, instagram/tiktok content and much more
                    </div>


                </div>
            </div>

            <div ref={parallaxb6.ref} className={styles.parallaxBox6}>
                <div className={`${styles.box} ${styles.box6}`}>
                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>
                    Your fans/investors can invest in your project via cryptocurrency and will receive utility tokens in their wallet which can also be traded as the value of your project increases.
                    </div>


                </div>
            </div>


            </div>

        </div>
        {/* <div>
            <img className={styles.banner} src='./banner.png' alt=''/>
        </div> */}
    </div>
  )
}
