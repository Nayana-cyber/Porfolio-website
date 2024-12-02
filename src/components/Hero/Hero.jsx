import React from 'react'
import './Hero.css'
import profile_img from '../../assets/photo.jpg'
import logo_img from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
     
        <img src={profile_img} alt="" />
        <h1><span>I'm Nayana M R ,</span>Front end developer based in India</h1>
        <p>A dedicated Frontend Developer with a talent for designing stunning and intuitive web applications that enhance user engagement.</p>
    
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero