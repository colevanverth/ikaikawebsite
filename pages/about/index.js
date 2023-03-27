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
                           In the current state of the music industry, the well-being and well-rounded skills of artists are far too often an after-thought. An artist’s development, marketing, distribution, and licensing are controlled by big budget labels in a disconnected process that is counterproductive to a foundational skill set. If an artist misses their quota—good riddance!
                     </p>
                     <p> Good luck creating something beautiful without those skills. </p>
                  </motion.div> 

                  <div className="about__text__container">

                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35}}>
                        <Image src="/label-primary.png" unoptimized={true} width={36} height={36}/>
                        <p>
      Instead of conforming to the hierarchical, “bank-like” business model that plagues the music industry, we believe in putting our artists first.
                        </p> 
                        <p> We are committed to developing relationships with our artists and expanding their skill sets in recording, production, and distribution. We aim to create a more positive experience for artists and deepen the connection the artist has with their audience. </p>
                     </motion.div>

                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35, delay: 0.1}}>
                        <Image src="/services-primary.png" unoptimized={true} width={36} height={36}/>
                        <p> 
                           We are a local business in Santa Cruz, California, home to our recording studio used by our artists and community. We take pride in offering the same caliber of services to our community that we provide to our signed artists.
                        </p> 
                        <p> Our studio was created with inclusivity in mind, crafted to feel welcoming regardless of your background, experience level, or musical genre. We strive to create an atmosphere where you feel valued and heard.
                        </p>
                     </motion.div>

                     <motion.div className="about__text" initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.35, delay: 0.2}} >
                        <Image src="/community-primary.png" unoptimized={true} width={36} height={36}/>
                        <p> 
                        We believe that a strong community is invaluable to making music creation accessible. On our Discord server, you can find like-minded peers to get inspiration, challenge your music abilities, and make invaluable connections that will give you a leg up in the industry.
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
                  <h2> WHO IS CJ IKAIKA? </h2> 
                  <p> 
                     Ikaika is the creator of Ikaika Records and a music artist himself. In elementary school, he experimented with GarageBand (an audio creation app for Apple devices). By middle school, Ikaika was producing his own songs. At age sixteen, he released his first song, “Frankenstein”, going onto release multiple albums over the course of the following two years.
                  </p> 
                  <p>
                     Ikaika began to utilize his abilities in production and mixing to create beats for his friends and grow their audiences. Realizing that he could apply his musical aptitude to help other artists, he founded <em>Ikaika Records</em> in 2019.
                  </p>
                  <p>
                     Ikaika has continued to hone his craft, collaborating with artists from many genres and preparing to release his fourth multi-track project, <em>Lazy Language & Lovesongs, Vol. 2</em>.
                  </p>
               </div> 
            </div> 
         </motion.div>
      </>
   )
}

export default About
