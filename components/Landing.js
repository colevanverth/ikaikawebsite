//import OutNow from "./OutNow"
import { motion } from 'framer-motion';
//import Button from './Button'; 
import { appear } from './Appear'; 
import Image from 'next/image'
import Button from './Button'
import OutNow from './OutNow'

//import Navigation from '../components/Navigation';



const Landing = () => {
   /* useEffect(() => { 
        document.title = 'Ikaika Records - Record label, audio services, and community'; 
    })*/
    return ( 
        <>
        <div className='gif__container'> 
            <div className='landing__container'> 
                <motion.main className='landing__main__container'> 
                    <motion.div className='landing__main' initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}} viewport={{once: true}} > 
                        <div className='landing__main__icons'>
                            
                        </div>
                        <div className='landing__main__headers'> 
                            <h1> IKAIKA RECORDS, </h1> <h1 className='landing__main__more'> MORE </h1> <h1> THAN A RECORD LABEL</h1>
                        </div> 
                        <p> 
                            We are a record company that are striving to something. 
                            And we are also striving so hard that we needed a second 
                            sentence. And even a third one too.     
                        </p>
                  
                            <motion.a className='button__big' whileHover={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white'}} transition={{duration: 0.25}}> 
                                SERVICES 
                            </motion.a>
                   
                            <Button link='discord' text='discord' className='button__big__hollow' />
                    </motion.div>
                </motion.main> 
            </div>
        </div> 
        <div className='landing__transition'/>
        <div className='gradient__container'> 
            <section className='landing__info__container'> 
                <motion.div variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}}>
                    <div> 
                        <Image src="/services-primary.png" width ='60' height='60'/>
                        <a> SERVICES </a> 
                        <p> Ikaika Records consists of new and up coming talent from around the globe. 
                            This is another sentence explaining that. And one more just to get a little more.  </p> 
                    </div> 
                    <div> 
                    <Image src="/label-primary.png" width='60' height='60'/>
                        <a> LABEL </a> 
                        <p> Ikaika Records consists of new and up coming talent from around the globe. 
                            This is another sentence explaining that. And one more just to get a little more.  </p> 
                    </div>
                    <div> 
                        <Image src="/community-primary.png" width='60' height='60'/>
                        <a> COMMUNITY </a> 
                        <p> Ikaika Records consists of new and up coming talent from around the globe. 
                            This is another sentence explaining that. And one more just to get a little more.  </p> 
                    </div>
            </motion.div> 
            </section>
            <OutNow /> 
            </div> 
        </> 
    )
}

export default Landing;