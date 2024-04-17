import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Products from './Pages/Products';
import MainCategory from './Pages/MainCategory';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/piano' element={<MainCategory category="piano"/>} />
          <Route path='/guitar' element={<MainCategory category="guitar"/>}/>
          <Route path='/drum' element={<MainCategory category="drum"/>} />
          <Route path='/vocal' element={<MainCategory category="vocal"/>} />
          <Route path='/product' element={<Products />} >
            <Route path='/product/:productID' element={<Products />} />
          </Route>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
