// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Product from './Shop/Product.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//import Cart from './Shop/Cart.jsx';
import Productdetails from './Shop/Productdetails.jsx';
import Cart from './Shop/Cart.jsx';
import Navbar from './Shop/Navbar.jsx';
import Footer from './Shop/Footer.jsx';
import Home from './components/Home.jsx'
//import Data from './Shop/Data.jsx';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Productdetails/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
