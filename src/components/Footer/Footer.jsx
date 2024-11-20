import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="logo" />
                <p>Enthusiastic Frontend Developer specializing in HTML, CSS, and JavaScript, dedicated to building engaging and intuitive web applications. Proficient in crafting responsive designs and optimizing performance to deliver smooth and enjoyable user interactions.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your name' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>

        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Nayana-Cyber. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Private Policy</p>
                <p>Connect with me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer