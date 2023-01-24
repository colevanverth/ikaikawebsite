 
import { motion } from 'framer-motion';

const Header = (props) => { 
    return ( 
        <div className='header__container' >
            <div className='header__space'/> 
            <header> 
                    <h2>{props.headerName.toUpperCase()}</h2> 
                    <div/> 
            </header> 
            <div className='header__fill'> <div> </div> </div> 
        </div> 
    )
}

export default Header; 