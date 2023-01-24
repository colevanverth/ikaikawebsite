import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'

const NavigationMobile = ({setMobile}) => { 
    return ( 
    <motion.div  className='navigation__mobile__container' exit={{x: '100vw'}} initial={{x: '100vw'}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5}}> 
        <nav> 
                <i onClick={() => setMobile(false)} className='navigation__button__off'></i> 
                <a className='navigation__mobile__header'> IKAIKA RECORDS</a>
                <ul className='navigation__mobile__links'> 
                    <li> <Link onClick={() => setMobile(false)} className='navigation-item' href='/'>HOME <div/> </Link> </li>
                    <li> <Link onClick={() => setMobile(false)} className='navigation__item' href='/services'>SERVICES <div/> </Link> </li>
                </ul>  
                <a className='navigation__mobile__header'> SOCIALS </a>
                <ul className='navigation__mobile__socials'>
                <li> <a href='https://twitter.com/'> <Image src="/twitter-logo.svg" width='25' height='25'/> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="youtube-logo.svg" width='25' height='25'/> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="spotify-logo.svg" width='25' height='25'/> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="instagram-logo.svg" width='25' className='navigation-social' height='25'/> </a> </li>
                        <li> <a href='https://twitter.com/'> <Image src="discord-logo.svg" width='25' className='navigation-social' height='25'/> </a> </li>
                </ul>        
        </nav> 
    </motion.div> 
    )
}

export default NavigationMobile; 