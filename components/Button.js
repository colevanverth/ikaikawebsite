
import { motion } from 'framer-motion';

const Button = (props) => { 
    return (
            <motion.a className={props.className} whileHover={{backgroundColor: 'white', color: '#151515'}} transition={{duration: 0.25}} href={props.link}  > 
                {props.text.toUpperCase()} 
            </motion.a> 
    )
}

export default Button; 