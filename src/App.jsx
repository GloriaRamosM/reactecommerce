
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './pages/Cart'
import CartContextProvider from './context/cartContext/CartContextProvider';
import Footer from './components/Footer/Footer';
import UserContext from './context/UserContext';
import { useState } from 'react';
import UserProfile from './components/User/UserProfile';
import UserContextProvider from './context/UserContextProvider';

function App() {


  return (

    <div className='page-container'>

      <BrowserRouter>
        <UserContextProvider>
          <CartContextProvider>

            <Navbar />
            <div className='content-wrap'>
              <Routes>

                <Route path='/' element={<LandingPage />} />
                <Route path='/items' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/user' element={<UserProfile />} />

              </Routes>
            </div>
            <Footer />

          </CartContextProvider>
        </UserContextProvider>
      </BrowserRouter>


    </div >

  );
}

export default App


