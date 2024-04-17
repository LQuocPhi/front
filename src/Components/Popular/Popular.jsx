import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import arrow_icon from '../Assets/arrow.png'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Sản phẩm nổi bật</h1>
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price}/>
            })}
        </div>
        <div className='see-more-btn'>
            <div>xem thêm</div>
            <img src={arrow_icon} alt="" />
        </div>
    </div>

    
  )
}

export default Popular