
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/items' element={<ItemListContainer />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App


