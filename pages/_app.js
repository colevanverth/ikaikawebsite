import React, {useEffect, useState} from 'react';
import { AnimatePresence } from 'framer-motion';

import '@/styles/globals.css'

import Landing from '../components/Landing'
import Footer from '../components/Footer'; 
import Newsletter from '../components/Newsletter';
import Navigation from '../components/Navigation'; 
import NavigationMobile from '../components/NavigationMobile'; 

export default function App({ Component, pageProps }) {

   const [mobile, setMobile] = useState(false); 
   const [width, setWidth] = useState(); 

   useEffect(() => {
      if (mobile) { document.body.style.overflow = "hidden";}
      else { document.body.style.overflow = "";}
      function handleResize() {
         setWidth(window.innerWidth); 
         if (window.innerWidth > 1350) { setMobile(false); } 
   }
      window.addEventListener('resize', handleResize)
   })

   return (
      <>
         <Navigation setMobile={setMobile}/>
         <AnimatePresence> 
         {mobile ? <NavigationMobile mobile={mobile} setMobile={setMobile}/> : null}
         </AnimatePresence>
         <Component {...pageProps} />
         <Newsletter /> 
         <Footer />
      </>
   )
}
