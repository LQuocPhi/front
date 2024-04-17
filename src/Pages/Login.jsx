import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <div className='login_container'>
        <h1>Đăng nhập</h1>
        <div className='login-fields'>
          <input type="text" placeholder='Tài khoản'/>
          <input type="password" placeholder='Mật khẩu'/>
        </div>
          <input type="checkbox" name="" id="" />
          <p>Nhớ mật khẩu</p>
          <button>Đăng nhập</button>
          <p className='create_account'>Chưa có tài khoản? Nhấn vào <span>đây</span></p>
      </div>
    </div>
  )
}

export default Login