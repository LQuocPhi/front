import React, { useContext } from 'react'
import './Pages-CSS/MainCategory.css'
import  {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import banner_img from '../Components/Assets/banner.png'


const MainCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='MainCategory'>
       <img src={banner_img} alt="" className='banner_img' />
        
      <div className='MainCategory-indexSort'>
       
        <div className='MainCategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='MainCategory-products'>
        {all_product.map((item,i)=>{
          if (props.category === item.category){
            return <Item  key={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <p>
          <span>(Số trang)</span>
        </p>
    </div>
  )
}

export default MainCategory