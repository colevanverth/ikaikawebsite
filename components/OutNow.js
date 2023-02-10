import Header from "./Header"; 
import Button from "./Button"; 
import { appear } from './Appear'; 
import { motion } from 'framer-motion';
import Image from "next/image"
import React, {useEffect, useState, Component} from 'react';



/*export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/outnows', {method: "GET"})
    const outnowsResponse = await res.json()
 //   console.log(outnows.data.map((item) => console.log(item.attributes.Artist)))
    return { 
        outnows: outnowsResponse
    }
}*/
const OutNow = () => {
    useEffect(() => {
            const func = async () => {
            const res = await fetch('https://ikaikascrapi-production.up.railway.app/api/outnows', {method: "GET"})
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

            if (window.innerWidth < 750) { 
                setX(x + 306)
            }
            else { 
                setX(x + 468)
            }setCurrentCard(currentCard -1)
        }
   }

   const [x, setX] = useState(0);
   const [amount, setAmount] = useState(0);
   const [currentCard, setCurrentCard] = useState(1);

    
    const [outnow, setOutNow] = useState([]);
    return ( 
        <>
            <Header headerName='out now'/> 
                <div className='outnow__container'> 
                <motion.section animate={{x, transition: {duration: 0.5}}} drag='x' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}} className='outnow'>
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
/*
React.useEffect(() => {
 const getBanners = async() => {
   const res = await fetch("http://localhost:1337/banners");
   const json = await res.json();
   setBanners(json);
 }

  getBanners();
}, [])*/