import React from 'react'
import Navbar from '../component/Navbar'
import contact from '../assets/Images/contact.jpg'
import "../App.css";

function Contact() {
  return (
    <div>
        <Navbar/>
        < img className='contact' src={contact} alt="" />
        <form action="">
        <h2>We love to hear from you</h2>
        <div class="form-details">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="E-mail"/>
                <button>Submit</button>

            </div>

        </form>
    </div>
  )
}

export default Contact
