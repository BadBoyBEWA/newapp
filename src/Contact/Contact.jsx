import React from 'react'
import Map from './Map'
export default function Contact() {
  return (
    <>
     <section className='titleBar'>
      <div className='text'>
      <h1>Contact Us</h1>
        <p><b>Home</b>Contact</p>
        </div>
     </section>

    <section className='contact-location'>
      <section className='contact-flex'>
        <Map />
   <div className="contact-form">
    <div className="contact-form-details">
      <input type="text" placeholder='Your Name' />
      <br /><br />
      <input type="text" placeholder='Your Email' />
      <br /><br />
      <input type="text" placeholder='Subject' />
      <br /><br />
      <input type="text" placeholder='Message'className='messagebox' />
      <br /><br />
      <input type="button" value="Send Message" className='cntbtn' />
    </div>
   </div>
   </section>
   <br /><br /><br /><br />
   <section className="contact-boxes">
      <div className="contact-box">
        <p>Address:198th West 21st Street
          Suite 721 New York NY 10016
        </p>
      </div>
      <div className="contact-box">
        <p>Phone:<b>+234 802 122 3442 </b></p>
      </div>
      <div className="contact-box">
        <p>Email:<b>mb@hotmail.com</b>
        </p>
      </div>
      <div className="contact-box">
        <p>Website:<b>Madam Boutique</b>    
        </p>
      </div>
    </section>
    
    </section>
    </>
  )
}
