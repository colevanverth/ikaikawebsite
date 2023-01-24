import Header from "./Header"; 
import Button from "./Button"; 
import { appear } from './Appear'; 
import { motion } from 'framer-motion';

import React, {useEffect, useState, Component} from 'react';


const OutNow = (props) => { 
    const [outnow, setServices] = useState([]);

    return ( 
        <>
            <Header headerName='out now'/> 
                <div className='outnow__container'> 
                <motion.section drag='x' whileDrag={{scale: 0.9}} dragConstraints={{left: -500, right: 0}} variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}} className='outnow'>
                    {outnow.map((item, index) => { 
                        return ( 
                            <div className='music__container'> 
                                <div style={{backgroundImage: `url(${item.imageLink})`}}/>
                                <a> {item.name} </a>
                                <a className='music__artist'> {item.artist} </a>
                                <Button className='button__small' text='listen now' link={item.spotifyLink}/> 
                            </div> 
                        )
                    }

                    )}
                </motion.section>
            </div> 
        </>
    )
}

export default OutNow; 