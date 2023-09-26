
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/items' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App


