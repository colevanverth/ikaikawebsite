import Link from "next/link"
import { motion } from 'framer-motion';
import { appear } from './Appear'; 
import Image from 'next/image'

import Button from './Button'
import OutNow from './OutNow'

const Landing = ({outnows, amount}) => {
return ( 
   <>
      <div className='gif__container'> 
            <motion.main className='content__container'> 
               <motion.div className='landing__main' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}} > 

                  <div className='landing__main__headers'> 

                     <motion.h1
                     animate={{ color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)' ] }}
                     transition={{ duration: 2.5, repeat: Infinity, 
                     repeatDelay: 1.25 }}> 
                     MUSIC LABEL.  </motion.h1>

                     <motion.h1
                     animate={{ color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)' ] }}
                     transition={{ duration: 2.5, repeat: Infinity, 
                     repeatDelay: 1.25, delay: 1.25 }}> 
                     RECORDING STUDIO.  </motion.h1>

                     <motion.h1
                     animate={{ color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)' ] }}
                     transition={{ duration: 2.5, repeat: Infinity, 
                     repeatDelay: 1.25, delay: 2.5 }}> 
                     COMMUNITY.  </motion.h1>

                  </div> 

                  <h4> 
                     We are democratizing the music industry with an artist first approach, providing music services, 
                     and a home for a growing community of artists.
                  </h4>

                  <Link href="/services" className='button__big' whileHover={{borderColor: "#a6a6a6", backgroundColor: "#a6a6a6"}} transition={{duration: 0.25}}> 
                     VIEW  SERVICES
                  </Link>

                  <Button link='discord' text='join the community' className='button__big__hollow' icon="true" />

               </motion.div>
            </motion.main> 
      </div> 

      <div className='landing__transition'/>

      <div className='gradient__container'> 
         <section className='content__container'> 
            <motion.div className='landing__info'>

               <motion.div initial={{opacity: 0, y:35 }} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1, duration: 0.35}} viewport={{once:true}}> 
                  <Image src="/services-primary.png" width={60} height={60} unoptimized={true} alt="Galaxy icon superimposed over blue circle" />
                  <h4> SERVICES </h4> 
                  <p>
                     Need your album mixed and mastered? Your drums quantized? Your podcast edited? 
                     Whether we collaborate with you at our recording studio 
                     or remotely, our team will match the expertise and personal attention that our signed artists receive.
                  </p> 
               </motion.div> 

               <motion.div initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.2, duration: 0.35}}  viewport={{once:true}}> 
                  <Image src="/label-primary.png" width='60' height='60' unoptimized={true} alt="Star icon superimposed over blue circle"/>
                  <h4> LABEL </h4> 
                  <p>
                     We believe that a record label is an opportunity to inspire personal growth—not
                     a content churning behemoth. We work closely with our artists to foster their 
                     skills in recording, producing, and distribution.
                  </p> 
               </motion.div>
   
               <motion.div initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.3, duration: 0.35}}  viewport={{once:true}}>  
                  <Image src="/community-primary.png" width='60' height='60' unoptimized={true} alt="Moon shape superimposed over blue circle" />
                  <h4> COMMUNITY </h4> 
                  <p>
                     Dedicated to making music creation accessible, we foster a close connection 
                     with our community. On our Discord server you can connect with like-minded 
                     artists, hone your skills, and receive an inside look at our label.
                  </p>
               </motion.div> 

            </motion.div> 
         </section>
         <OutNow outnows={outnows} amount={amount} /> 
      </div> 
   </> 
   )
}

export default Landing;
