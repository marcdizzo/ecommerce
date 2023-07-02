import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import watch from "../images/watch.jpg"
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Checkout = () => {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [name,setName] = useState("");
    const [country,setCountry] = useState("");
    const [address,setAddress] = useState("");
    const [suite,setSuite] = useState("");
    const [city,setCity] = useState("");
    const [zip,setZip] = useState("");
    
    
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
    <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="website-name">
                            Dizzo Tech
                        </h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className='text-dark total-price' to="/cart">
                                    Cart
                                </Link>
                            </li>
                            &nbsp; /&nbsp;
                            <li className="breadcrumb-item text-dark total-price active" aria-current="page">
                                Information
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item total-price active">
                               Shipping
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item total-price active" aria-current="page">
                                Payment
                            </li>
                        </ol>
                        </nav>
                        <h4 className='title total'>
                            Contact Information
                        </h4>
                        <p className="user-details total">
                            {user.name}({user.email})
                        </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                            <div className='w-100'>
                                <select name="" id="" value={country}  onChange={(e) => setCountry(e.target.value)}
                                className='form-control  form-select'
                                >
                                    <option value="" selected disabled>
                                        Select Country
                                    </option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Tanzaina">Tanzania</option>
                                    <option value="Rwanda">Rwanda</option>
                                </select>
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='Name' value={user.name} onChange={(e) => setName(e.target.value) } className="form-control" />
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value) } className="form-control" />
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='Apartment, Suite,etc' value={suite} onChange={(e) => setSuite(e.target.value)} className="form-control" />
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} className="form-control" />
                            </div>
                            <div className='flex-grow-1'>
                                    <select name="" id=""
                                    className='form-control  form-select'
                                    >
                                        <option value="" selected disabled>Select State</option>
                                        <option value="">Gulu</option>
                                        <option value="">Masaka</option>
                                        <option value="">Jinja</option>
                                        <option value="">Mengo</option>
                                        <option value="">Mukono</option>
                                        <option value="">Namasuba</option>
                                    </select>
                            </div>
                            <div className='flex-grow-1'>
                                 <input type="text" placeholder='Zipcode' value={zip} onChange={(e) => setZip(e.target.value)} className="form-control" />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/cart" className='text-dark'>
                                        <BiArrowBack className='me-2' />
                                        Return to Cart
                                    </Link>
                                    <Link to="/shipping" className='button'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    {
                        cart.map((item) => (
                            <div className='border-bottom py-4'>
                            <div className="d-flex gap-10 mb-2 align-itmes-center">
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span style={{top:"-3px", right:"-6px"}} 
                                    className="badge bg-secondary text-white rounded-circle  position-absolute">{user.cart[item._id].count}</span>
                                    <img src={item.pictures[0].url} className='img-fluid' alt="product" />
                                </div>
                                <div>
                                    <h5 className="total-price">{item.name}</h5>
                                    <p className='total-price'>Havels</p>
                                </div>
                            </div>
                            <div className='flex-grow-1'> 
                                <h5 className='total'>${item.price * user.cart[item._id]}</h5>
    
                            </div>
                            </div>
                        </div>
                        ))
                    }
                   
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>${user.cart.total}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Total</p>
                            <p className='mb-0 total-price'>${user.cart.total}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>${user.cart.total}</h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Checkout