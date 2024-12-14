
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
    const form = useRef();
   
   const sendEmail = (e) => {
     e.preventDefault();
    
 
     emailjs.sendForm('service_ac7zs8s', 'template_fqyu35e', form.current, 'CitIXmetU3DaEvfaq')
       .then((result) => {
         alert('Email sent successfully!', result.text);
     
         
       }, (error) => {
         alert('Error sending email:', error.text);
       });
   };
  return (
    <>
      
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Email</button>
        </form>
    
    </>
  )
}
