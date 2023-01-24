import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button';
import Header from '../components/Header'
import Landing from '../components/Landing';
import Service from '../components/Service'
import { appear } from '../components/Appear'; 
import Head from 'next/head'

const Services = ( props ) => { 
    const [service, setServices] = useState([]);

    return ( 
        <>  
            <Head>
                <title> Services - Ikaika Records </title> 
            </Head> 
            <div className='content__container'> 
            <Header headerName='Services' />
            
                <div className='services__container'> 
                    <main className='services'> 
                    {service.map((item, index) => { 
                            return ( 
                                <motion.div className='service__container' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}}>
                                    <img alt={item.alt} width='50%' src={item.imageLink}/>
                                    <div> 
                                        <a className='service__tag'> {item.tag.toUpperCase()} </a> 
                                        <h3> {item.name.toUpperCase()} </h3> 
                                        <p> {item.description} </p>
                                        <Button text='GET STARTED' className='button__small' link={item.buttonLink} />
                                    </div>
                                </motion.div>  
                            )
                        }
                        )}
                    </main> 
                </div> 
                </div>
            </>
    )
}
export default Services;