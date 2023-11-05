import React from 'react'
import styles from "./Works.module.css"
import { useParallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleImageSlider from "react-simple-image-slider";
export default function Works() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const images = [
        { url: "./hw1.png" },
        { url: "./hw1.png" },
        { url: "./hw1.png" },
        { url: "./hw1.png" },
        { url: "./hw1.png" },
        { url: "./hw1.png" },
        { url: "./hw1.png" },
      ];
  return (
    <div id='works' className={styles.works} >

        <div className={styles.workInner}>
            <div  className={styles.workInnerTitle}>
                HOW IT WORKS
            </div>
            <div  className={styles.workInnerboxes}>
              {
                isDesktopOrLaptop ?

                <SimpleImageSlider
                width='100%'
                height={400}
                images={images}
                showBullets={false}
                showNavs={true}
                autoPlay={true}
                slideDuration={2}
              />
              :
              <Carousel
              className='carousel'
             swipeable={true}
             draggable={false}
             responsive={responsive}
             ssr={true} 
             infinite={true}
             autoPlaySpeed={4000}
             autoPlay={true}
           >
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
    <img
               className="carousel_img"
               src="./hw1.png"
               alt=""
               draggable={false}
             />
             
             
           </Carousel>
              }

             



            </div>

        </div>
    </div>
  )
}
