import { LandingPage, 
  Login, 
  SignUp, 
  ForgotPassword,
  Wishlist,
  Cart,
  ProductListing,
  ProductDetail, 
  Address,
  Checkout
} from './Pages';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MockAPI from './Mockman/Mockman';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
return (
<div className="App">
  <ToastContainer />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product-listing/:pathname" element={<ProductListing />} />
    <Route path="/product-details/:id" element={<ProductDetail />} />
    <Route path="/address" element={<Address />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/mockman" element={<MockAPI/>} />
  </Routes>
</div>
);
}

export default App;