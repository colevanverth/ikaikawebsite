import { motion }  from "framer-motion"
import { appear } from '../../components/Appear'; 
import Image from "next/image" 

import Header from "../../components/Header"

const About = () => { 
   return (
      <>
         <div className="about__content__image"/>
         <div className="about__content__transition"/>
         <div className="about__content">
            <Header headerName="about" /> 
            <div className="about__container">
               <div className="about">
                  <motion.div  className="about__vision" variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}}>
                     <h2> THE IKAIKA RECORDS VISION </h2>
                     <a> We are on a mission to democratize the music creation process. </a> 
                     <p>
                        The reality of the music industry today is that record
                        labels simply throw money at the wall—hoping that their artists succeed.
                        Artists are left behind in a disconnected process where marketing,
                        distribution, and licensing are controlled by the corporation. If you fail 
                        to bring profits to a record label—off you pop—and good luck making it 
                        on your own without those skill sets!
                     </p>
                  </motion.div> 
                  <div className="about__text__container">
                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35}}>
                        <Image src="/label-primary.png" unoptimized={true} width={60} height={60}/>
                        <p> 
                           Instead of conforming to the hierarchical, “bank-like” business model that plagues the music industry, we believe in putting our artists first. We are firmly committed to developing relationships with our artists and expanding their skill sets in recording, production, and distribution. Our aim is to create a more positive experience for artists and also help them to deepen their connection with their audience. 
                        </p> 
                     </motion.div>
                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35, delay: 0.1}}>
                        <Image src="/services-primary.png" unoptimized={true} width={60} height={60}/>
                        <p> 
                     We are a local business located in Santa Cruz, California, home to our recording studio used by our artists and community. Our studio was crafted with inclusivity in mind, crafted to feel welcoming regardless of your background, experience level, or musical genre. We strive to create an atmosphere where you feel valued and heard. 
                        </p> 
                     </motion.div>
                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35, delay: 0.2}} >
                        <Image src="/community-primary.png" unoptimized={true} width={60} height={60}/>
                        <p> 
                           Instead of conforming to the hierarchical, “bank-like” business model that plagues the music industry, we believe in putting our artists first. We are firmly committed to developing relationships with our artists and expanding their skill sets in recording, production, and distribution. Our aim is to create a more positive experience for artists and also help them to deepen their connection with their audience. 
                        </p> 
                     </motion.div >
                  </div> 
               </div>
            </div> 
         </div> 
         <motion.div className="about__cj__container" variants={appear} whileInView='visible' initial='hidden' viewport={{once: true}}>
            <div className="about__cj">
               <Image src="/cjikaika.jpg" width={400} height={400}/>
               <div>
                  <h2> WHO IS CJ FORD (CJ IKAIKA) </h2> 
                  <p> Ford is the creator of Ikaika Records and a music artist himself. In elementary school, he experimented with GarageBand (an audio creation app for the iPad) and by middle school was producing his own beats. By age sixteen, he released his first song, “Frankenstein”, under the name “CJ Ikaika”. The name “Ikaika” (pronounced “ee-kai-kuh”) was carefully chosen from his ancestral heritage, symbolizing strength and steadfastness. Ford began utilizing his abilities in mastering and producing to create beats for his friends and grow their audiences. He realized that he could apply his musical aptitude to help other artists, and created his record label: Ikaika Records. Since the creation of Ikaika Records in 2019, Ford has continued to hone his craft, working with artists from a diverse array of genres and releasing his second album, “The Sound of My Dreams”. 
               </p>
               </div> 
            </div> 
         </motion.div>
      </>
   )
}

export default About
