import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
import newsletter from "../images/newsletter.png";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Footer = () => {
    const user = useSelector((state) => state.user);
    const [email,setEmail] = useState("");
  return (
    <>
        <footer className='py-4'>
            <div className="container-xxl container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src={newsletter} alt="newsletter" />
                            <h2 className="mb-0 text-white">Sign Up for newsletter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                        {
                            user && (
                                <div className="input-group">
                                        <input type="text" className="form-control border-0 py-1" 
                                        placeholder="Your email" value={user.email} onChange={(e) => setEmail(e.target.value)}
                                        id='floatingInputGroup1' aria-describedby="basic-addon2"/>
                                    <span className="input-group-span p-1" id="basic-addon2">
                                        <Link to="/subscribe" className='input-group-text'>Subscribe</Link>
                                    </span>
                                    
                                </div>
                            )
                        }
                        {
                            !user && (
                                <div className="input-group">
                                        <input type="text" className="form-control border-0 py-1" 
                                        placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        id='floatingInputGroup1' aria-describedby="basic-addon2"/>
                                    <span className="input-group-span p-1" id="basic-addon2">
                                        <Link to="/subscribe" className='input-group-text'>Subscribe</Link>
                                    </span>
                                    
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-4'>
            <div className="container container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6'>
                                Center Point Arcade : 277 Near Absa Bank, <br /> Kampala, Uganda <br />
                                PinCode: 131103
                            </address>
                            <a href="tel: +256 751096292"
                             className="mt-3 d-block mb-2 text-white">
                                +256 751096292
                            </a>
                            <a href="mailto:marcmukisa26@gmail.com" 
                            className="mt-2 d-block mb-2 text-white">
                                marcmukisa26@gmail.com
                            </a>
                            <div className="social-icons d-flex align-items-center gap-30">
                                <a href="#" className='text-white'>
                                    <BsLinkedin fs-4 />
                                </a>
                                <a href="#" className='text-white'>
                                    <BsInstagram fs-4 />
                                </a>
                                <a href="#" className='text-white'>
                                    <BsGithub fs-4 />
                                </a>
                                <a href="#" className='text-white'>
                                    <BsYoutube fs-4 />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white mb-4'>Information</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                            <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                            <Link  to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                            <Link to="/terms-and-conditions" className="text-white py-2 mb-1">Terms and Conditions</Link>
                            <Link to="/blogs" className="text-white py-2 mb-1">Blog</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className="text-white py-2 mb-1">About Us</Link>
                            <Link className="text-white py-2 mb-1">Faq</Link>
                            <Link className="text-white py-2 mb-1">Conact</Link>
                            <Link className="text-white py-2 mb-1">Watch</Link>
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className='text-white mb-4'>Quick Links</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className="text-white py-2 mb-1">Laptops</Link>
                            <Link className="text-white py-2 mb-1">Headphones</Link>
                            <Link className="text-white py-2 mb-1">Tablets</Link>
                            <Link className="text-white py-2 mb-1">Watch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className='py-4'>
            <div className="container-xxl container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center text-white mb-0">
                            &copy; { new Date().getFullYear() } Powered by marc dizzo
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer