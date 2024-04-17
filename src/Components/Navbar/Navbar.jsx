import React from 'react'
import './Navbar.css'
import { useState } from 'react'

import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [menu,setMenu] = useState("main");
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p className='nav-WebName'>Sapphire of the Sky</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("main")}}><Link style={{textDecoration: 'none', color: 'black'}} to={'/'}>Trang chủ</Link>{menu==="main"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("piano")}}><Link style={{textDecoration: 'none', color: 'black'}} to={'/piano'}>Đàn Piano</Link>{menu==="piano"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("guitar")}}><Link style={{textDecoration: 'none', color: 'black'}} to={'/guitar'}>Guitars, bases</Link> {menu==="guitar"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("drum")}}><Link style={{textDecoration: 'none', color: 'black'}} to={'/drum'}>Trống</Link>{menu==="drum"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("vocal")}}><Link style={{textDecoration: 'none', color: 'black'}} to={'/vocal'}>Vocal </Link>{menu==="vocal"? <hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button className='nav-btn-login' onClick={()=>{setMenu("Login")}}><Link style={{textDecoration: 'none',color: 'black'}} to={'/Login'}>Login</Link></button>
        <button className='nav-btn-signup' onClick={()=>{setMenu("SignUp")}}><Link style={{textDecoration: 'none',color: 'black'}} to={'/SignUp'}>SignUp</Link></button>
        <img src={cart_icon} alt="" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar