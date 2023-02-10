import Header from "../../../components/Header"
import Script from "next/script"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"

const ServicePage = () => { 
    const router = useRouter()
    const {id} = router.query
    const [service, setService] = useState(null)
    useEffect(() => { 
        const func = async () => {
      
        if (!router.isReady) return
        console.log('https://ikaikascrapi-production.up.railway.app/api/services?filters[siteLink][$eq]=' + id)
        const res = await fetch('https://ikaikascrapi-production.up.railway.app/api/services?filters[siteLink][$eq]=' + id,  {method: "GET"})
        const serviceResponse = await res.json()
        setService(serviceResponse)
        console.log(serviceResponse.data[0].attributes)
        }
        func()
    },
    [router.isReady])
    return (
       <div className="content__container" >
            {id ? <Header headerName={id} prev="services"/> : null}
        {service?.data[0].attributes.calendlyLink ? 
            <>
                <div className="calendly-inline-widget" data-url={`https://${service.data[0].attributes.calendlyLink}?hide_gdpr_banner=1&background_color=161A1E&text_color=ffffff&primary_color=1C6590`} style={{height: 850}}></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script> 
            </>
            
        
        : null}
        {!service?.data[0].attributes.calendlyLink ?
            <div className="project__container">
                <form className="project__form">
                    <div className="project__input" first="">
                        <a> NAME </a> 
                        <input className="project__input__text" id="project__input__name" placeholder="Anthony Fantano"/>
                    </div> 
                    <div className="project__input" second="">
                        <a> PHONE (OPTIONAL) </a> 
                        <input type="tel" placeholder="999-999-9999" className="project__input__text"/> 
                    </div>
                    <div className="project__input" third="">
                        <a> EMAIL </a> 
                        <input type="email" placeholder="email@example.com" className="project__input__text"/>
                    </div>
                    <div className="project__input" fourth="">
                        <a> MESSAGE </a> 
                        <textarea className="project__input__text" placeholder="Tell us a little about your project..." rows="3"/>
                    </div> 
                    <motion.input  whileHover={{backgroundColor: '#a6a6a6' }} transition={{duration: 0.25}} className="project__input__submit" type="submit" value="SUBMIT"/>

                </form>
            </div> 
        : null}
       </div>  
    )
}

export default ServicePage; 
