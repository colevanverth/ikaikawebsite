import { appear } from './Appear'; 
import { motion } from 'framer-motion';
import Image from "next/image"
import React, {useEffect, useState, Component} from 'react';

import Header from "./Header"; 
import Button from "./Button"; 

const OutNow = () => {

   const [x, setX] = useState(0);
   const [amount, setAmount] = useState(0);
   const [currentCard, setCurrentCard] = useState(1);
   const [outnow, setOutNow] = useState([]);

   useEffect(() => {
      const func = async () => {
         const res = await fetch(`${process.env.NEXT_PUBLIC_IKAIKACMS}/api/outnows`, {method: "GET"})
         const outnowsResponse = await res.json()
         setAmount(outnowsResponse.data.length)
         setCurrentCard(1);
         setOutNow(outnowsResponse)
      }
      func()
      },
   []) 

   function buttonRight() {
      console.log("left")
      if (currentCard < amount) {
         setCurrentCard(currentCard + 1)
         if (window.innerWidth < 750) { 
            setX(x - 306)
         }
         else { 
            setX(x - 468)
         }
      }
   }

   function buttonLeft() { 
      console.log("right")
      if (currentCard > 1) {
         setCurrentCard(currentCard -1)
         if (window.innerWidth < 750) { 
            setX(x + 306)
         }
         else { 
            setX(x + 468)
         }
      }
   }

   return ( 
   <>
   <Header headerName='out now'/> 
   <div className='outnow__container'> 
   <motion.section animate={{x, transition: {duration: 0.5}}} variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}} className='outnow'>
   {outnow.data?.map((item, index) => { 
   return ( 
   <div className='music__container' key={item.id}> 
   <div style={{backgroundImage: `url(${item.attributes.imageLink})`}} />
   <a> {item.attributes.title} </a>
   <a className='music__artist'> {item.attributes.artist} </a>
   <Button className='button__small' text='listen now' link={item.attributes.spotifyLink}/> 
   </div> 
   )
   }
   )} 
   </motion.section>

   </div> 
   <div className="outnow__shifters__container">
   <div className="outnow__shifters">
   <Image src="/chevron-left.svg" width="40" height="40" onClick={buttonLeft}/>
   <Image src="/chevron-right.svg" width="40" height="40" onClick={buttonRight}/>
   </div> 
   </div>

   </>
   )
}

export default OutNow; 
