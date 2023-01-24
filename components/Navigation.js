import { motion } from 'framer-motion';
import NavigationMobile from './NavigationMobile'; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
const Navigation = ({setMobile}) => { 
    /* TODO: Fix this janky way of fixing the problem */
    const onMouseEnter = () => {
        if (window.innerWidth > 1350) {
            document.body.style.overflow = ""; 
        }
      };

    return ( 
        <>
            <div className='navigation__container'> 
                <nav>
                    <Image src="/logo.svg" width='65' height='65' className='navigation__logo'/> 
                    <ul className='navigation__socials'>
                        <li> <a href='https://twitter.com/'> <Image src="/twitter-logo.svg" width='25' height='25' /></a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="/discord-logo.svg" width='25' height='25' /> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="/instagram-logo.svg" width='25' height='25' /> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="/spotify-logo.svg" width='25' className='navigation-social' height='25' /></a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="/youtube-logo.svg" width='25' className='navigation-social' height='25' /> </a> </li>
                    </ul>
                    <div className='navigation__bar'> 
                    </div> 
                    <ul onMouseEnter={onMouseEnter} className='navigation__menu'>
                        <li> <Link className='navigation-item' href='/'>HOME</Link> <div/> </li>
                        <li> <Link className='navigation__item' href='/services'>SERVICES</Link> <div/> </li>
                    </ul>
                        <i onClick={() => setMobile(true)} className='navigation__button__on'></i> 
                </nav>
            </div> 
        </> 
    )
}

export default Navigation;