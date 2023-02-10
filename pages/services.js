import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button';
import Header from '../components/Header'
import Landing from '../components/Landing';
import { appear } from '../components/Appear'; 
import Image from "next/image"
import Head from 'next/head'

const Services = ( props ) => { 
    useEffect(() => {
            const func = async () => {
            const res = await fetch('https://ikaikascrapi-production.up.railway.app/api/services', {method: "GET"})
            const servicesResponse = await res.json()
            setServices(servicesResponse)
        }
        func()
    },
   []) 

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
                    {service.data?.map((item, index) => { 
                            return ( 
                                <motion.div key={item.id} className='service__container' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}}>
                                    <img alt={item.attributes.alt} width='50%' src={item.attributes.imageLink}/>
                                    <div> 
                                        <a className='service__tag'> {item.attributes.tag.toUpperCase()} </a> 
                                        <h3> {item.attributes.name.toUpperCase()} </h3> 
                                        <p> {item.attributes.description} </p>
                                        <Button className='button__big__hollow' text={item.attributes.calendlyLink ? "BOOK NOW" : "GET STARTED"} link={"/services/" + item.attributes.siteLink} />
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