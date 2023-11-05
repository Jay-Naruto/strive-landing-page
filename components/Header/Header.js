import React, { useState } from 'react'
import styles from "./Header.module.css"
import {useMediaQuery} from "react-responsive"
export default function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
    const [open,setOpen]=useState(0)
  return (
    <div  className={styles.nav}>
        <div className={styles.header}>
            <img className={styles.logo} src='./logo.png' alt=''/>
            {
                open ?
                (
                    <div className={styles.right}>
                <img className={styles.headerbtn} src='./btn.png' alt=''/>
                <img onClick={()=>{setOpen(0)}} className={styles.menu} src='./cross.png' alt=''/>
                        
                    </div>
                )
                    :
                    (
                        <div className={styles.right}>
                    <img className={styles.headerbtn} src='./btn.png' alt=''/>
                    <img className={styles.menubtn} onClick={()=>{setOpen(1)}}  src='./menu.png' alt=''/>

                        </div>
                    )

            }
            {
                open === 1 ?
                <div className={styles.menubox}>
                <div>
                    <a href='/'>
                        Home
                    </a>
                </div>

                <div>
                    <a href='#speakers'>
                        Speakers
                    </a>
                </div>
                <div>
                    <a href='#features'>
                        Features
                    </a>
                </div>
                <div>
                    <a href='#works'>
                        How it works
                    </a>
                </div>
                <div>
                    <a href='#FAQ'>
                        FAQ
                    </a>
                </div>
                <div>
                    <a href='#contact-us'>
                        Contact Us
                    </a>
                </div>


            </div>:null

            }
            

        </div>
    </div>
  )
}
