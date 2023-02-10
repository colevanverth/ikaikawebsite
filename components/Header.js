 
import { motion } from 'framer-motion';

const Header = (props) => { 
    return ( 
        <div className='header__container' >
            <header> 
                    <a href={`/${props.prev} `}> {props.prev ? `${props.prev.toUpperCase()} /`  : null}  </a> 
                    <h2>{props.headerName.toUpperCase()}</h2> 
                    <div/> 
            </header> 
        </div> 
    )
}

export default Header; 