



import { motion } from 'framer-motion';
import { useState } from "react"; 
const Newsletter = () => { 
    //const request = require('request'); 
    const [sent, setSent] = useState(false); 
    
    const handleFormSubmit = async (e) => { 
        e.preventDefault();
        const email = document.getElementById('footer__input__text').value; 
        const res = await fetch(`ikaikarecords-production.up.railway.app/api/newsletter`, {
            method: "POST", 
            body: email
        }); 
        const message = await res.json()
        console.log(message) 
        setSent(true);

        
    // Construct req data
    }

    return ( 
        <section className='form__container'> 
            <form>
                {!sent ? <label> <h2> SIGN UP FOR UPDATES FROM IKAIKA RECORDS </h2> </label> : null}
                {!sent ? <a> EMAIL</a> : null} 
                {!sent ? <input type="email"  placeholder="email@example.com" id='footer__input__text' className='input__text' required></input> : null}
                {!sent ? <motion.input whileHover={{backgroundColor: '#a6a6a6' }} transition={{duration: 0.25}} className="input__submit" type='submit' value='SUBSCRIBE' onClick={handleFormSubmit} id='footer__input__submit' required></motion.input > : null}
                {sent ? <p> Thanks for signing up to the Ikaika Records Newsletter! You should receive an email confirmation shortly. </p>: null}
            </form>
        </section>
    )
}

export default Newsletter; 
