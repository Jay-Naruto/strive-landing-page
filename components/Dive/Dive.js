import React from 'react'
import styles from "./Dive.module.css"
import { useMediaQuery } from 'react-responsive'
export default function Dive() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  return (
    <div className={styles.dive}>
      {isDesktopOrLaptop ?

<div>
          
<img className={styles.banner} src='./b1.png' alt=''/>
    <img className={styles.banner} src='./b2.png' alt=''/>
</div> :
        <div>
          
        <img className={styles.banner} src='./banner.png' alt=''/>
        </div> 
          }


        
    </div>
  )
}
