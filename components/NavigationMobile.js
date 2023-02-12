import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'

const NavigationMobile = ({setMobile}) => { 
   return ( 
      <motion.div className='navigation__mobile__container' exit={{x: '100vw'}} initial={{x: '100vw'}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5}}> 
         <nav> 
            <i onClick={() => setMobile(false)} className='navigation__button__off'></i> 
            <a className='navigation__mobile__header'> IKAIKA RECORDS</a>
            <ul className='navigation__mobile__links'> 
            <li> <Link onClick={() => setMobile(false)} className='navigation-item' href='/about'>ABOUT <div/> </Link> </li>
            <li> <Link onClick={() => setMobile(false)} className='navigation__item' href='/services'>SERVICES <div/> </Link> </li>
            </ul>  
            <a className='navigation__mobile__header'> SOCIALS </a>
            <ul className='navigation__mobile__socials'>
            <li key='1'> <a href='https://twitter.com/ikaikarecords'> <Image src="/twitter-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
            <li key='2'> <a href='https://www.youtube.com/@IkaikaRecords/'> <Image src="/youtube-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
            <li key='3'> <a href=' https://open.spotify.com/user/1rb7msvqg87wccfaxnb2gzsmb/'> <Image src="/spotify-logo.svg" width='25' height='25' alt="White filled twitter icon"/> </a> </li>
            <li key='4'> <a href='https://www.instagram.com/ikaikarecords/?hl=en/'> <Image src="/instagram-logo.svg" width='25' className='navigation-social' height='25' alt="White filled twitter icon"/> </a> </li>
            <li key='5'> <a href='https://discord.gg/4Nb9qf26vt'> <Image src="/discord-logo.svg" width='25' className='navigation-social' height='25' alt="White filled twitter icon"/> </a> </li>
            </ul>        
         </nav> 
      </motion.div> 
   )
}

export default NavigationMobile; 
