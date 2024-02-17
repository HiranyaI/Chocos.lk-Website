import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import chocolate_banner from'./Components/Assets/Consistency (1).png';
import cafe_banner from './Components/Assets/coffee banner.png';
import nuts_banner from './Components/Assets/nuts banner.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/chocolate' element={<ShopCategory banner={chocolate_banner} category="chocolates"/>}/>
        <Route path='/cafes' element={<ShopCategory banner={cafe_banner} category="cafe"/>}/>
        <Route path='/nut' element={<ShopCategory banner={nuts_banner} category="nuts"/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
