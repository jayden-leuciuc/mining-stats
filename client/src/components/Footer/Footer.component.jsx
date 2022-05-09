import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

import './Footer.styles.scss';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='logocredit-container'>
          <img src={logo} alt='LOGO' />
          <p>
            Site created by{' '}
            <a href='https://jaydenleuciuc.com' target='_blank'>
              <span id='personal'>Jayden Leuciuc</span>
            </a>
          </p>
          <p>
            <a
              href='https://www.flaticon.com/free-icons/asic'
              title='asic icons'
            >
              Asic icons created by Vitaly Gorbachev - Flaticon
            </a>
          </p>
          <p>
            <a
              href='https://www.flaticon.com/free-icons/graphic-card'
              title='graphic card icons'
            >
              Graphic card icons created by rukanicon - Flaticon
            </a>
          </p>
        </div>

        <div className='footerlinks-container'>
          <div className='column'>
            <p>Company</p>
            <ul>
              {/* 
              <li>
                <Link to='/about' className='link'>
                  About Us
                </Link>
              </li>*/}
              <li>
                <Link to='/terms' className='link'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to='/privacy' className='link'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='column'>
            <p>Support</p>
            <ul>
              <li>
                <Link to='/contact' className='link'>
                  Contact Us
                </Link>
              </li>
              {/* 
              <li>
                <Link to='/faq' className='link'>
                  FAQ
                </Link>
              </li>*/}
            </ul>
          </div>

          <div className='column'>
            <p>Social</p>
            <ul>
              <li>
                <a href='https://facebook.com' target='_blank' className='link'>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  className='link'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://twitter.com' target='_blank' className='link'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
