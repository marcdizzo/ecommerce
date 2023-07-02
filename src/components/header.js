import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { logout, resetNotifications } from '../features/userSlice'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import cart_img from '../images/cart.svg';
import compare from '../images/compare.svg';
import user_img from '../images/user.svg';
import wishlist from '../images/wishlist.svg';
import menu from '../images/menu.svg';

const Haeder = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const bellRef = useRef(null);
    const notificationRef = useRef(null);
    const [bellPos, setBellPos] = useState({})
    const handleLogout = () => {
        dispatch(logout());
    }
    const unreadNotifications = user?.notifications?.reduce((acc, current) => {
        if(current.status === "unread") return acc + 1;
        return acc;
    },0);
    const handleToggleNotifications = () => {
        const position = bellRef.current.getBoundingClientRect();
        setBellPos(position);
        notificationRef.current.style.display = notificationRef.current.style.display === "block" ? "none" : "block";
        dispatch(resetNotifications > 0) 
        if(unreadNotifications > 0) axios.post(`/users/${user._id}/updateNotifications`);
    }

  return (
    <>

       <header className="header-top-strip py-3">
        <div className="container-xxl container">
            <div className="row">
                <div className="col-6">
                    <p className='text-white mb-0'>
                        Free Shipping Over $100 & Free Returns
                    </p>
                </div>
                <div className="col-6">
                    <p className='text-end text-white mb-0'>
                        Hotline: <a className='text-white' href="tel:+256 751096292">+256 751096292</a>
                    </p>
                </div>
            </div>
        </div>
        </header> 
        <div className="header-upper py-3">
            <div className="container-xxl container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h2>
                             <Link className='text-white'>Dizzo Mart</Link>
                        </h2>
                    </div>
                    <div className="col-5">
                    <div className="input-group">
                         <input type="text" className="form-control py-2" 
                         placeholder="Search product here..." 
                         aria-label="Search product here..." aria-describedby="basic-addon2"/>
                         <span className="input-group-text p-3" id="basic-addon2">
                            <BsSearch  className='fs-6'/>
                        </span>
                    </div>

                    </div>
                    <div className="col-5">
                        <div className="header-upper-links  d-flex align-items-center justify-content-between gap-15">
                           {
                            user && !user.isAdmin && (
                                <div>
                                         <Link to="/compare-product" className='d-flex align-items-center text-white gap-10'>
                                                <img src={compare} alt="compare" />
                                                <p className='mb-0 text-sm'>
                                                    Compare <br /> Products
                                                </p>
                                         </Link>
                                </div>
                            )
                           }
                            <div>
                               
                            </div>
                            {/* if no user  */}
                            {
                                !user && (
                                    <div>
                                        <Link to="/login" className='d-flex align-items-center text-white gap-10'>
                                        <img src={user_img} alt="user" />
                                        <p className='mb-0 text-sm'>
                                            Log in <br /> My Account
                                        </p>
                                        </Link>
                                    </div>
                                )
                            }
                            {
                                user && !user.isAdmin && (
                                    <div>
                                        
                                        <Link to="/wishlist" className='d-flex align-items-center text-white gap-10'>
                                        <img src={wishlist} alt="wishlist" />
                                            <p className='mb-0 text-sm'>
                                                Favourite <br /> Wishlist
                                            </p>
                                         </Link>
                                    </div>
                                )
                            }
                            {
                                user && !user.isAdmin && (
                                    <div>
                                        <Link to="/cart" className='d-flex align-items-center text-white gap-10'>
                                        <img src={cart_img} alt="cart" />
                                        <div className='d-flex flex-column gap-10'>
                                            {
                                                user?.cart.count > 0 && (
                                                    <span className="badge text-dark bg-white" id='cartcount'>
                                                        {user.cart.count}
                                                    </span>
                                                )
                                            }
                                                <p className='mb-0 text-sm'>${user.cart.total}</p>
                                        </div>
                                        </Link>
                                    </div>
                                )
                            }
                            {
                                user && (
                                    <div class="dropdown">
                                            <button class="btn btn-secondary border-0 bg-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {`${user.name}`}
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                {
                                                    user.isAdmin && (
                                                        <>
                                                            <li>
                                                                <Link to='/admin' class="dropdown-item">
                                                                  Dashboard
                                                                </Link>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                                {
                                                    !user.isAdmin && (
                                                        <>
                                                            <li><Link to='/cart' class="dropdown-item">Cart</Link></li>
                                                            <li><Link to='/orders' class="dropdown-item">My Orders</Link></li>
                                                        </>
                                                    )
                                                }

                                                <li><hr class="dropdown-divider"/></li>
                                                <li>
                                                    <button onClick={handleLogout} className='button-2 dropdown-item text-center  border-0'>
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                    </div>
                                )
                            }
                           
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="header-bottom py-3">
            <div className="container-xxl container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                              <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle 
                                    bg-transparent border-0 gap-15 d-flex align-items-center" 
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={menu} alt="menu" />
                                       <span className='me-5 d-inline-block'> 
                                            Shop Categories
                                       </span>  
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15">
                                    <NavLink  to="/">Home</NavLink>
                                    <NavLink  to="/store">Our Store</NavLink>
                                    <NavLink  to="/blogs">Blogs</NavLink>
                                    <NavLink  to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Haeder