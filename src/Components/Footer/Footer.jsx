import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="f-top">
        <div className="f-topleft">
            <img src="" alt="" />
            <p>I am a fullstack developer from coimbatore,seeking oppurtunities to begin my career .</p>
        </div>
        <div className="f-topright">
            <div className="f-email">
                <i className=' bi-person'></i>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="f-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="f-bottom">
        <p className='bottomleft'>© 2024 Ragavi. All rights reserved.

</p>
        <div className="bottomright">
            <p>Term of Services</p>
            <p>privacy policy</p>
            <p>Connect with me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
