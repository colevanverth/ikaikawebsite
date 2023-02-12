import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import NavigationMobile from './NavigationMobile'; 

const Navigation = ({setMobile}) => { 
   const onMouseEnter = () => {
      if (window.innerWidth > 1350) {
         document.body.style.overflow = ""; 
      }
   };

   return ( 
   <>
   <div className='navigation__container'> 
   <nav>
   <Link href="/"><Image src="/logo.svg" width='65' height='65' className='navigation__logo' alt="Ikaika Records logo in blue color"/> </Link>
   <ul className='navigation__socials'>
   <li key={Math.random()}> <a href='https://twitter.com/ikaikarecords'> <Image src="/twitter-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
   <li key={Math.random()}> <a href='https://www.youtube.com/@IkaikaRecords/'> <Image src="/youtube-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
   <li key={Math.random()}> <a href=' https://open.spotify.com/user/1rb7msvqg87wccfaxnb2gzsmb/'> <Image src="/spotify-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
   <li key={Math.random()}> <a href='https://www.instagram.com/ikaikarecords/?hl=en/'> <Image src="/instagram-logo.svg" width='25' className='navigation-social' height='25' alt="White filled twitter icon"/> </a> </li>
   <li key={Math.random()}> <a href='https://discord.gg/4Nb9qf26vt'> <Image src="/discord-logo.svg" width='25' className='navigation-social' height='25' alt="White filled twitter icon"/> </a> </li>
   </ul>
   <div className='navigation__bar'> 
   </div> 
   <ul  className='navigation__menu'>
   <li> <Link className='navigation-item' href='/about'>ABOUT</Link> <div/> </li>
   <li> <Link className='navigation__item' href='/services'>SERVICES</Link> <div/> </li>
   </ul>
   <i onClick={() => setMobile(true)} className='navigation__button__on'></i> 
   </nav>
   </div> 
   </> 
   )
}

export default Navigation;
