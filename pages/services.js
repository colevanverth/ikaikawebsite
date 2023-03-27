import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button';
import Header from '../components/Header'
import Landing from '../components/Landing';
import { appear } from '../components/Appear'; 
import Image from "next/image"
import Head from 'next/head'

export async function getStaticProps() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_IKAIKACMS}/api/services`, {method: "GET"})
   const services = await res.json()
   console.log("test");
  
   return {
      props: {
         services,
      },
   }
}

const Services = ({services}) => { 
   return ( 
      <>  
         <Head>
            <title> Services - Ikaika Records </title> 
         </Head> 

         <div className="services__content__image"/> 
         <div className="services__content__transition"/>
         <Header headerName='Services' />

         <div className="content__container radial__container">
               <main className='services'> 

                   {services.data?.map((item, index) => { 
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
                  })}

               </main> 
         </div>
      </>
   )
}

export default Services;
