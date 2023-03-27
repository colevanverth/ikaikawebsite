 
import { motion } from 'framer-motion';

const Header = (props) => { 
    return ( 
      <div className="content__container">
         <header className={!props.minor ? "header__major" : "header__minor"}> 
                 <a href={`/${props.prev} `}> {props.prev ? `${props.prev.toUpperCase()} /`  : null}  </a> 
             { !props.minor ? <h2>{props.headerName.toUpperCase()}</h2> 
            : <h3> {props.headerName.toUpperCase()} </h3> } 

                 <div/> 
         </header> 
      </div> 
    )
}

export default Header; 
