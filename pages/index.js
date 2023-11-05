import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const Landing = dynamic(() => import('@/components/Landing/Landing'), {
  ssr: false,
});
import AOS from 'aos';
import 'aos/dist/aos.css';
import Creator from '@/components/Creator/Creator'
import Features from '@/components/Features/Features'
const Works = dynamic(() => import('@/components/Works/Works'), {
  ssr: false,
});
import Dive from '@/components/Dive/Dive'
import Faqs from '@/components/FAQ/Faq'
import Faq2 from '../components/Faq2'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
const thr=2000

useEffect(() => {
  const bkgElements = document.querySelectorAll('.bkg');
  bkgElements.forEach((element) => {
    if (scrollPosition >= 2000) {
      element.style.opacity = 0; // Set opacity to 0 when scroll position is 2000 or greater
    } else {
      element.style.opacity = 1; // Set opacity to 1 when scroll position is less than 2000
    }
  })
}, [scrollPosition]);

useEffect(() => {
  const transitionElements = document.querySelectorAll('.transition');
  transitionElements.forEach((element) => {
    if (scrollPosition >= 2000) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}, [scrollPosition]);


useEffect(() => {
  AOS.init();
}, [])

  return (
    <>
      <Head>
        <title>Strive</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" />
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
          AOS.init();
        </script> */}
        
      </Head>
      <div className={ scrollPosition < thr ? 'absolute' : 'relative' }>
      <div className='bkg' style={{ position: scrollPosition < thr ? 'fixed' : 'relative', top:0,width:'100%',zIndex:999999999}}>
      <Header  />
      </div>
      <div   style={{ position: scrollPosition < thr ? 'fixed' : 'relative'}}>
      <Landing scrollPosition={scrollPosition}  />
      </div>
      </div>
      


      <div className={`transition transition1 ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Creator />
</div>
<div className={`transition ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Features />
</div>
<div className={`transition ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Works />
</div>
<div className={`transition ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Dive />
</div>
<div className={`transition ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Faqs />
</div>
<div className={`transition ${scrollPosition >= 2000 ? 'visible' : ''}`}>
  <Footer />
</div>

    </>
  )
}
