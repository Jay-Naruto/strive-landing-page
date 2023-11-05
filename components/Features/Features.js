import React, { useEffect, useRef } from 'react'
import styles from "./Features.module.css"
import { useMediaQuery } from 'react-responsive'
import Typewriter from 'typewriter-effect';
export default function Features() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })

    
  return (
    <div id='features' className={styles.features}>
            <div className={styles.featuresBox}>
                <div className={styles.featurestitle}>
                    Features
                    <div className={styles.featurestitlebkg}>
                    Features
                    </div>
                </div>
            <div className={styles.featuresBoxr1}>

            <div className={`${styles.box} ${styles.box1}`}>

                    <div className={styles.border}></div>
                    <div className={styles.border2}></div>

                    <div  className={styles.boxContent}>

                        {
                            isDesktopOrLaptop ?
                            <div>
                            <Typewriter
                                    options={{
                                        strings: ['Invest in creators using our creator launchpad'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed:Infinity
                                    }}
                              
                                    />
                            </div>
                            :
                            <div>
                            Invest in creators using our creator launchpad
                            </div>
        
                        }

                    <div>
                    <img className={styles.f1} src='./f1.png' alt=''/>

                    </div>
                    </div>


                </div>


                <div className={`${styles.box} ${styles.box2}`}>
                    <div className={styles.border2}></div>
                    <div className={styles.border}></div>
                    <div  className={styles.boxContent}>

                    {
                            isDesktopOrLaptop ?
                            <div>
                            <Typewriter
                                    options={{
                                        strings: ['Raise funds for your creative projects using our fundraising platform'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed:Infinity
                                    }}
                                    />
                            </div>
                            :
                            <div >
                            Raise funds for your creative projects using our fundraising platform
                            </div>
        
                        }

                    <div>
                    <img className={styles.f2} src='./f2.png' alt=''/>

                    </div>
                    </div>


                </div>
                </div>


                <div className={styles.featuresBoxr2}>

                <div className={`${styles.box} ${styles.box3}`}>

                    <div className={styles.border2}></div>
                    <div className={styles.border}></div>
                    <div  className={styles.boxContent}>


                    {
                            isDesktopOrLaptop ?
                            <div>
                            <Typewriter
                                    options={{
                                        strings: [' Engage with your fans / investors using messaging, streams, merchandise drops, subscriptions and anything else you can think of.'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed:Infinity
                                    }}
                                    />
                            </div>
                            :
                            <div className={styles.div1}>
                            Engage with your fans / investors using messaging, streams, merchandise drops, subscriptions and anything else you can think of.
                            </div>
        
                        }




                    <div  className={styles.div2}>
                    <img className={styles.f3} src='./f3.png' alt=''/>

                    </div>
                    </div>


                </div>


                <div className={`${styles.box} ${styles.box4}`}>

                    <div className={styles.border2}></div>
                    <div className={styles.border}></div>
                    <div  className={styles.boxContent}>

                    {
                            isDesktopOrLaptop ?
                            <div>
                            <Typewriter
                                    options={{
                                        strings: [' Trade utility/social/fan tokens launched by top creators and earn from the growth of leading influencers and creators'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed:Infinity
                                    }}
                                    />
                            </div>
                            :
                            <div  className={styles.div2}>
                            Trade utility/social/fan tokens launched by top creators and earn from the growth of leading influencers and creators
                            </div>
        
                        }



                    <div  className={styles.div1} >
                    <img  className={styles.f4} src='./f4.png' alt=''/>

                    </div>
                    </div>


                </div>
                </div>



                
        
        </div>
        <img className={styles.cubes} src='./cubes.png' alt=''/>
    </div>
  )
}
