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
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/compare-product' element={<CompareProduct />} />
          </Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
