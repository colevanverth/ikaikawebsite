import {useState} from "react"

import { motion } from "framer-motion";

const ContactForm = ({serviceName}) => { 
   const [formSent, setFormSent] = useState(false);
   const [name, setName] = useState("");

   const handleFormSent = async (e) => {
      setFormSent(true); // Change the state

      e.preventDefault(); // Prevent page reset
      setName(document.getElementById('project__input__name').value); // For success message

      // Info that gets sent by email
      const contactInfo = { 
         name: document.getElementById('project__input__name').value,
         phone: document.getElementById('project__input__phone').value,
         email: document.getElementById('project__input__email').value,
         message: document.getElementById('project__input__message').value,
         type: serviceName
      }

      // Send contact info to backend for node mailer to process
      const res = await fetch("http://localhost:3000/api/contact", {
         method: "POST",
         body: JSON.stringify(contactInfo),
         headers: {
            'Content-Type': 'application/json'
         }
      })

      // Optional msg from node mailer send
      const msg = await res.json()
   }

   return (
      <>
         { !formSent ? 
            <div className="project__container">
               <form className="project__form">
               <h3> CONTACT FORM </h3> 

                  <div className="project__input" first="">
                     <a> NAME </a> 
                     <input className="project__input__text" id="project__input__name" placeholder="Anthony Fantano"/>
                  </div> 

                  <div className="project__input" second="">
                     <a> PHONE (OPTIONAL) </a> 
                     <input type="tel" id="project__input__phone" placeholder="999-999-9999" className="project__input__text"/> 
                  </div>

                  <div className="project__input" third="">
                     <a> EMAIL </a> 
                     <input type="email" placeholder="email@example.com" id="project__input__email" className="project__input__text"/>
                  </div>

                  <div className="project__input" fourth="">
                     <a> MESSAGE </a> 
                     <textarea className="project__input__text" id="project__input__message" placeholder={`Tell us a little about your ${serviceName.toLowerCase()} project...`} rows="3"/>
                  </div> 

                  <motion.input  whileHover={{backgroundColor: '#a6a6a6' }} transition={{duration: 0.25}} className="project__input__submit" type="submit" value="SUBMIT" onClick={handleFormSent} />

               </form>
            </div>

         : 
            <div className="project__sent">
                   Thanks {name}! We look forward to working with you 
                    and will get back to you as soon as possible.
            </div> 
         }
      </>
   )
}

export default ContactForm;
