import React from 'react'
import BlocSocFooterLogo from '../../resources/BlocSoc-Transparent.png';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img className='footer_logo' src={BlocSocFooterLogo} alt="Footer logo"/>
        
        <ul className='footer_lists'>
            <span>About Us</span>
            <li className='footer_lists_item'>Aim</li>
            <li className='footer_lists_item'>Vision</li>
            <li className='footer_lists_item'>Team</li>
            <li className='footer_lists_item'>Recruitment</li>
        </ul>
        <ul className='footer_lists'>
            <span>Resources</span>
            <li className='footer_lists_item'>E-Books</li>
            <li className='footer_lists_item'>Youtube Courses</li>
            <li className='footer_lists_item'>Documentation</li>
            <li className='footer_lists_item'>Blogs</li>
        </ul>
    </div>
  )
}

export default Footer