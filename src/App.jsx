
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from './pages/Cart'
import CartContextProvider from './context/cartContext/CartContextProvider';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';


function App() {


  return (

    <div className='page-container'>

      <BrowserRouter>

        <CartContextProvider>

          <Navbar />
          <div className='content-wrap'>
            <Routes>

              <Route path='/' element={<LandingPage />} />
              <Route path='/items/:category?' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />

              <Route path='/checkout' element={<Checkout />} />

            </Routes>
          </div>
          <Footer />

        </CartContextProvider>

      </BrowserRouter>


    </div >

  );
}

export default App


