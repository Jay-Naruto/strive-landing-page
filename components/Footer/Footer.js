import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <div id='contact-us' className={styles.footer}>
        <div className={styles.footerBox}>
            <div  className={styles.footerBoxLeft}>
                <div>
                    <img className={styles.footerBoxLeftLogo} src='./logo.png' alt=''/>
                </div>


            </div>
            <div  className={styles.footerBoxMid}>
                <div>
                <ul>
                <li>
                    <a href='/'>
                        Home
                        </a>
                    </li>

                    <li>
                    <a href='#speakers'>
                       Speaker
                        </a>
                    </li>

                    <li>
                <a href='#features'>
                       Features
                        </a>
                    </li>

                </ul>
                </div>
                <div>
                <ul>

                    <li>
                    <a href='#works'>
                        How it works
                        </a>
                    </li>
                    <li>
                    <a href='#FAQ'>
                       FAQ
                        </a>
                    </li>
                    <li>
                    <a href='#contact-us'>
                       Contact Us
                        </a>
                    </li>
                </ul>
                </div>

            </div>

            <div  className={styles.footerBoxRight}>
                <div>
                    <input type='email' placeholder='Enter your email' className={styles.input} />
                </div>
                <img src='./btn.png' alt=''/>

            </div>
        </div>
        <div className={styles.foot}>
        <div>
        Copyright ©2023
        </div>
        <div>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Policy and Cookie Policy</span>

        </div>
        </div>
    </div>
  )
}
