import React from 'react'
import './HomePage.css'
import arrow_icon from '../Assets/arrow.png'
import guitar1 from '../Assets/guitar1.png'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <div className='HomePage-left'>
            <div>
            <h2>SẢN PHẨM VỪA CẬP BẾN</h2>
                <p>Only the best for you</p>
            </div>
        <div className='new-btn'>
            <div>SỰ LỰU CHỌN PHÙ HỢP</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className='HomePage-right'>
            <img src={guitar1} alt="" />
        </div>
    </div>
  )
}

export default HomePage