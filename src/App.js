import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import OurStore from './pages/ourStore';
import Blogs from './pages/blogs';
import CompareProduct from './pages/compareProduct';
import Wishlist from './pages/wishlist';
import Login from './pages/login';
import SignUp from './pages/signUp';
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
import SingleBlog from './pages/singleBlog';
import TermsAndConditions from './pages/termsAndConditions';
import ShippingPolicy from './pages/shippingPolicy';
import RefundPolicy from './pages/refundPolicy';
import PrivacyPolicy from './pages/privacyPolicy';
import SingleProduct from './pages/singleProduct';
import Cart from './pages/cart';
import Checkout from './pages/cheackout';
function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route  index element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/store' element={<OurStore />}  />
            <Route path='/product/:id' element={<SingleProduct />}  />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<SingleBlog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/compare-product' element={<CompareProduct />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          </Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
