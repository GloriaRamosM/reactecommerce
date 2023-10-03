
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './pages/Cart'
import CartContextProvider from './context/cartContext/CartContextProvider';
import Footer from './components/Footer/Footer';


function App() {
  return (

    <div className='page-container'>
      <div className='content-wrap'>
        <BrowserRouter>
          <CartContextProvider>

            <Navbar />

            <Routes>

              <Route path='/' element={<LandingPage />} />
              <Route path='/items' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />

            </Routes>
            <Footer />
          </CartContextProvider>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App


