import Link from "next/link"
import { motion } from 'framer-motion';
import { appear } from './Appear'; 
import Image from 'next/image'

import Button from './Button'
import OutNow from './OutNow'

const Landing = () => {
return ( 
   <>
      <div className='gif__container'> 
         <div className='landing__container'> 
            <motion.main className='landing__main__container'> 
               <motion.div className='landing__main' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}} > 

                  <div className='landing__main__headers'> 
                     <h1> MUSIC LABEL. RECORDING STUDIO. </h1> <h1 className='landing__main__more'>  COMMUNITY.</h1> <h1> </h1>
                  </div> 

                  <h4> 
                     We are disrupting the music industry with an artist first approach, providing state-of-the-art 
                     music services, and a home for a growing community of artists.
                  </h4>

                  <Link href="/services" className='button__big' whileHover={{borderColor: "#a6a6a6", backgroundColor: "#a6a6a6"}} transition={{duration: 0.25}}> 
                     VIEW OUR SERVICES
                  </Link>

                  <Button link='discord' text='join the community' className='button__big__hollow' icon="true" />

               </motion.div>
            </motion.main> 
         </div>
      </div> 

      <div className='landing__transition'/>

      <div className='gradient__container'> 
         <section className='landing__info__container'> 
            <motion.div >

               <motion.div initial={{opacity: 0, y:35 }} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1, duration: 0.35}}> 
                  <Image src="/services-primary.png" width={60} height={60} unoptimized={true} alt="Galaxy icon superimposed over blue circle" />
                  <h4> SERVICES </h4> 
                  <p>
                     Whether you need your mix quantized or podcast edited, we 
                     will collaborate with you to create something awesome. Our 
                     team will provide you the same expertise and personal attention that our signed artists receive.
                  </p> 
               </motion.div> 

               <motion.div initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.2, duration: 0.35}}> 
                  <Image src="/label-primary.png" width='60' height='60' unoptimized={true} alt="Star icon superimposed over blue circle"/>
                  <h4> LABEL </h4> 
                  <p>
                     We believe that a record label is an opportunity to inspire
                     personal growth—not a content churning behemoth.
                     We work closely with our artists to foster their skills in 
                     recording, producing, and distribution.   
                  </p> 
               </motion.div>
   
               <motion.div initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.3, duration: 0.35}}>  
                  <Image src="/community-primary.png" width='60' height='60' unoptimized={true} alt="Moon shape superimposed over blue circle" />
                  <h4> COMMUNITY </h4> 
                  <p>
                     Dedicated to making music creation accessible, we foster a
                     close connection with our community. On our Discord server 
                     you can connect with like-minded artists, hone your skills, and get an inside look at our label.</p> 
               </motion.div> 

            </motion.div> 
         </section>
         <OutNow /> 
      </div> 
   </> 
   )
}

export default Landing;
