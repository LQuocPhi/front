import React from 'react'
import './Footer.css'
import facebook_icon from '../Assets/facebook_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import zalo_icon from '../Assets/zalo_icon.png'

const Footer = () => {
  return (

    <div className='footer'>
    <div className='footer-icon'>
            <div className='icon-container'>
                <img src={facebook_icon} alt="" />
            </div>
            <div className='icon-container'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='icon-container'>
                <img src={zalo_icon} alt="" />
            </div>
        </div>
        <ul className='footer-link'>
            <li>Công ty</li>
            <li>Sản phẩm</li>
            <li>Văn phòng</li>
            <li>Thông tin liên lạc</li>
            <li>Về chúng tôi</li>
        </ul>
        
    </div>
  )
}

export default Footer