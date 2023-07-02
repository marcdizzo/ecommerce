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
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogCatlist from './pages/BlogCatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import Categorylist from './pages/Categorylist';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';
import { io } from 'socket.io-client';
import { addNotification } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Haeder from './components/header';
import Footer from './components/footer';
import EditProduct from './pages/EditProduct';
import Shipping from './pages/shipping';
import Payment from './pages/payment';
import MyOrders from './pages/myOrders';
function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
      const socket = io("ws://localhost:8080");
      socket.off("notification").on("notification", (msgObj, user_id) => {
        // logic for notification 
        if(user_id === user._id) {
          dispatch(addNotification(msgObj));
        }
      });
      socket.off("new-order").on("new-order", (msgObj) => {
        if(user.isAdmin) {
          dispatch(addNotification(msgObj));
        }
      })
  },[])
  return (
   <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route  index element={<Home />}/>
            {
              !user && (
                <>
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/blog/:id' element={<SingleBlog />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/forgotpassword' element={<ForgotPassword />} />
                  <Route path='/resetpassword' element={<ResetPassword />} />
                  <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
                  <Route path='/shipping-policy' element={<ShippingPolicy />} />
                  <Route path='/refund-policy' element={<RefundPolicy />} />
                  <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                </>
              )
            }
            {
              user && (
                <>
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/checkout' element={<Checkout />} />
                  <Route path='/compare-product' element={<CompareProduct />} />
                  <Route path='/shipping' element={<Shipping />} />
                  <Route path='/payment' element={<Payment />}  />
                  <Route path='/wishlist' element={<Wishlist />} />
                  <Route path='/orders' element={<MyOrders />} />
                  {/* <Route path='/product' element={<AddProduct />} /> */}
                </>
              )
            } 
                  <Route path='/store' element={<OurStore />}  />
                  <Route path='/product/:id' element={<SingleProduct />}  />
          </Route>
          
          {
            user && user.isAdmin && (
              <>
                  <Route path='/admin' element={<MainLayout />}>
                      <Route index element={<Dashboard />} />
                      <Route path='enquiries' element={<Enquiries />} />
                      <Route path='blog-list' element={<BlogList />} />
                      <Route path='blog-category-list' element={<BlogCatlist />} />
                      <Route path='orders' element={<Orders />} />
                      <Route path='customers' element={<Customers />} />
                      <Route path='list-color' element={<ColorList />} />
                      <Route path='list-category' element={<Categorylist />} />
                      <Route path='list-brand' element={<BrandList />} />
                      <Route path='product-list' element={<ProductList />} />
                      <Route path='blog' element={<AddBlog />} />
                      <Route path='blog-category' element={<AddBlogCat />} /> 
                      <Route path='color' element={<AddColor />} />
                      <Route path='category' element={<AddCat />} />
                      <Route path='brand' element={<AddBrand />} />
                      <Route path='products' element={<AddProduct />} />
                  </Route>

                  <Route path='/product/:id/edit-product' element={<EditProduct />} />
              </>
            )
          }
          
        </Routes>
      </Router>
   </>
  );
}

export default App;
