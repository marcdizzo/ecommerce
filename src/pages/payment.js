import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import watch from "../images/watch.jpg"
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCreateOrderMutation } from '../services/appApi'

const Payment = () => {
    // const stripe = useStripe();
    // const elements = useElements();
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    // const [cardNo,setCardNo] = useState("");
    // const [name,setName] = useState("");
    // const [expDate,setExpDate] = useState("");
    // const [securityCode,setSecurityCode] = useState("");
    const [paying, setPaying] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [address,setAddress] = useState("");
    const [country,setCountry] = useState("");
    const navigate = useNavigate();
    const [createOrder, { isLoading, isError, isSuccess }] = useCreateOrderMutation();

    const handlePay = async (e)  => {
        e.preventDefault();
        // if (!stripe || !elements || user.cart.count <= 0) return;
        setPaying(true);

        createOrder({ userId: user._id, cart: user.cart, address, country }).then((res) => {
            if (isLoading && isError) {
                setAlertMessage(`Payment Sucessfull`);
                
                setTimeout(() => {
                    navigate("/orders");
                }, 3000);
            }
        });
    }
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
                            <li className="breadcrumb-item " aria-current="page">
                                <Link className='total-price text-dark'>
                                    Information
                                </Link>
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item">
                                <Link className='text-dark total-price'>
                                    Shipping
                                </Link>
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item total-price text-dark" aria-current="page">
                                Payment
                            </li>
                        </ol>
                        </nav>
                        <div className='w-100 border py-2 px-2 rounded-sm my-4'>
                            <div className='mx-1 border-bottom d-flex py-2 justify-content-between align-items-center py-1'>
                                <span className='total-price'>Contact</span>
                                <span className='text-dark text-left'>{user.email}</span>
                                <span >
                                    <Link className='text-md' to="/checkout" >Change</Link>
                                </span>
                            </div>
                            <div className='mx-1 d-flex border-bottom py-2 justify-content-between align-items-center py-1'>
                                <span className='total-price'>Ship to</span>
                                <span className='text-dark'></span>
                                <span >
                                    <Link className='text-md' to="/shipping">Change</Link>
                                </span>
                            </div>
                            <div className='mx-1 d-flex py-2 justify-content-between align-items-center py-1'>
                                <span className='total-price'>Method</span>
                                <span className='text-dark'>Standard . $19.39</span>
                            </div>

                        </div>
                        <h5 className='mb-2'>Payment</h5>
                        <p className='mb-3 total-price'>All transactions are secure and encrypted.</p>
                        <form onSubmit={handlePay}>
                                {alertMessage && <Alert>{alertMessage}</Alert>}
                        <div className='d-flex mb-3 flex-wrap gap-15 justify-content-between'>
                            
                            <div className='w-100'>
                                    <div className='d-flex border rounded-sm flex-wrap gap-15 justify-content-between'>
                                        <div className='w-100 d-flex  justify-content-between align-items-center border-1 rounded-sm py-2 px-3'>
                                            <span>Credit card</span>
                                            <span className='bg-warning px-3 rounded-sm'>
                                                <b className='text-white'>B</b>
                                            </span>
                                        </div>
                                        <div className='w-100 px-3 mb-1 d-flex justify-content-between'>
                                            <input type="text" placeholder='Card number' 
                                             
                                            className="form-control" />
                                        </div>
                                        <div className='w-100 px-3 mb-1'>
                                            <input type="text" placeholder='Name on card' 
                                               
                                                className="form-control" />
                                        </div>
                                        <div className='ps-3 mb-3 flex-grow-1'>
                                            <input type="text"
                                                inputMode='numeric'
                                                pattern='[0-9]*'
                                                aria-invalid="false"
                                                autoComplete='cc-exp'
                                                placeholder='Expiration date(MM/ YY)' 
                                                
                                                className="form-control" />
                                        </div>
                                        <div className='pe-3 mb-3 flex-grow-1'>
                                            <input type="text" placeholder='Security Code'    
                                                    className="form-control" />
                                        </div>
                                    </div>
                                    
                            </div>
                           <div className='w-100'>
                              <h4 className='mb-3'>Shipping Address</h4>
                              <div className='d-flex flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value) } className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value) } className="form-control" />
                                    </div>
                              </div>
                           </div>
                           
                            <div className='w-100'>
                                <h5 className='mb-2'>Billing Address</h5>
                                <p className='mb-3 total-price'>Select the address that matches your card or payment method</p>
                                <div className='w-100  border rounded-sm'>
                                    <div className=' border-bottom  form-check py-2 ps-4'>
                                        <input class="form-check-input ms-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label ms-2" for="flexRadioDefault1">
                                           Same as shipping address
                                        </label>
                                    </div>
                                    <div class="form-check py-2 ps-4">
                                        <input class="form-check-input ms-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                                            Use a different billing address
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/shipping" className='text-dark'>
                                        <BiArrowBack className='me-2' />
                                        Return to Shipping
                                    </Link>
                                    {/* <label htmlFor="card-element">Card</label> */}
                                    {/* <CardElement id="card-element" /> */}
                                    <button type='submit' disabled={user.cart.count <= 0 || paying || isSuccess} className='button border-0'>
                                        {paying ? "Processing..." : "Pay Now"}
                                    </button>
                                </div>
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
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$19.39</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>${user.cart.total + 19.39}</h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Payment