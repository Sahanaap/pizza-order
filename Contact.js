import React from 'react';
import pizzaLeft from "../assets/pizzaLeft.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide'   style={{ backgroundImage: `url(${pizzaLeft})` }}>
  
    </div>
      <div className='rightSide'>
      <h1> Contact Us</h1>
       
     <form id="contact-form" method="POST" >
      <label htmlFor="name">Full Name</label>
      <input name="name" placeholder="Enter your full name.." type="text" />
      <label htmlFor="email">Email</label>
      <input name="name" placeholder="Enter your full name.." type="text" />
      <label htmlFor="message">Message</label>
      <textarea
      rows={6}
      placeholder='message'
      required
      ></textarea>
      <button type='Submit'>Send Message</button>

    
     </form>


     
    </div>
     </div>
  )
}

export default Contact
