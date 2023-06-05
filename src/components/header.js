import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Haeder = () => {
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
                             <Link className='text-white'>Dev Coner</Link>
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
                            <div>
                                <Link to="/compare-product" className='d-flex align-items-center text-white gap-10'>
                                <img src="images/compare.svg" alt="compare" />
                                <p className='mb-0 text-sm'>
                                    Compare <br /> Products
                                </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/wishlist" className='d-flex align-items-center text-white gap-10'>
                                <img src="images/wishlist.svg" alt="wishlist" />
                                <p className='mb-0 text-sm'>
                                    Favourite <br /> Wishlist
                                </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/login" className='d-flex align-items-center text-white gap-10'>
                                <img src="images/user.svg" alt="user" />
                                <p className='mb-0 text-sm'>
                                    Log in <br /> My Account
                                </p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/cart" className='d-flex align-items-center text-white gap-10'>
                                <img src="images/cart.svg" alt="cart" />
                                <div className='d-flex flex-column gap-10'>
                                    <span className="badge text-dark bg-white">
                                        0
                                    </span>
                                    <p className='mb-0 text-sm'>$ 500</p>
                                </div>
                                </Link>
                            </div>
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
                                        <img src="images/menu.svg" alt="menu" />
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