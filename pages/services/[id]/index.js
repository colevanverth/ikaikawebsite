import Header from "../../../components/Header"
import ContactForm from "../../../components/ContactForm"
import EquipmentList from "../../../components/EquipmentList"

import Image from "next/image"
import Script from "next/script"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"

/**
 * Generates service pages on build; `params` is exposed to getStaticProps()
*/
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_IKAIKACMS}/api/services`)
  const services = await res.json()

   const paths = services.data?.map((item) => { 
      return {
         params: { id: item.attributes.siteLink }
      }
   })

  return { paths, fallback: false }
}

/**
 * Pulls service object corresponding to current slug and creates a prop for that service.
*/
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_IKAIKACMS}/api/services/?filters[siteLink][$eq]=${params.id}`)
  const serviceData = await res.json();
   const service = serviceData.data[0];

  return { props: { service } }
}

const ServicePage = ({service}) => {
   const [pageType, setPageType] = useState("");

   useEffect( ()=> {
      // Checks to see if there is a calendly link associated with the service
      if (service.attributes.calendlyLink) { 
         setPageType("calendar");
      }
      else { 
         setPageType("form");
      }
   })
   return (
      <div className="radial__gradient"> 
         <div className="page__padding" />
         <Header headerName={service.attributes.name} prev="services"/>

         { pageType == "calendar" ? 
               <>
                   <div className="calendly-inline-widget" data-url={`https://calendly.com/ikaikarecords/30min?hide_gdpr_banner=1&background_color=161A1E&text_color=ffffff&primary_color=1C6590`} style={{height: 850}}></div>
         <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script> 
               </>
         : null }

         <div className="content__container" > 
            <div className="servicepage__description">
               <Image src={service.attributes.imageLink} width={0} height={0} unoptimized={true} alt="Galaxy icon superimposed over blue circle" />
               <p> {service.attributes.description} </p>
            </div> 
         </div> 
         { pageType == "form" ? <ContactForm serviceName={service.attributes.name}/> : null } 

      { service.attributes.siteLink == "studio-recording" ? 
            <>
               <Header headerName="recording equipment" minor={true} />
               <div className="content__container">
                  <EquipmentList /> 
               </div>
            </>
      : null } 


      </div> 
   )
}

export default ServicePage;
