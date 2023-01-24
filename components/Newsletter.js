
const fetch = require('node-fetch'); 

import { motion } from 'framer-motion';
import { useState } from "react"; 
const Newsletter = () => { 
    //const request = require('request'); 
    const [fail, setFail] = useState(false); 
    
    const handleFormSubmit = async (e) => { 
        e.preventDefault();
        const email = document.getElementById('footer__input__text').value; 
        console.log(email)
        
    // Construct req data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
            }
        ]
    };

  const postData = JSON.stringify(data);

  fetch('https://us14.api.mailchimp.com/3.0/lists/26861e53a9', {
    method: 'POST',
    headers: {
      Authorization: 'auth 0c23a8fd563586c7db467e5d51d4d82a-us14'
    },
    body: postData
  })

    }

    return ( 
        <section className='form__container'> 
            <form>
                <label> <h2> NEWSLETTER </h2> </label>
                <input type='email' placeholder="Enter email" id='footer__input__text'></input>
                <motion.input whileHover={{backgroundColor: 'white', color: '#151515'}} transition={{duration: 0}} type='submit' value='SUBSCRIBE' onClick={handleFormSubmit} id='footer__input__submit'></motion.input >
            </form>
        </section>
    )
}

export default Newsletter; 