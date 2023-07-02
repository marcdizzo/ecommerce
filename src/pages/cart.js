import React from 'react';
import BreadCrumb from '../components/breadCrumb';
import Meta from '../components/meta';
import { Link } from 'react-router-dom';
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai"
import Container from '../components/Container';
import { useSelector } from 'react-redux';
import { useDecreaseCartProductMutation, useIncreaseCartProductMutation, useRemoveFromCartMutation } from '../services/appApi';
import { Alert } from 'react-bootstrap';

const Cart = () => {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [increaseCart] = useIncreaseCartProductMutation();
    const [decreaseCart] = useDecreaseCartProductMutation();
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

    const handleDecrease = (product) => {
        const quantity = user.cart.count;
        if(quantity <= 0) return alert("Can't Procced");
        decreaseCart(product);
    }

  return (
   <>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
        <Container class1="cart-wrapper home-wrapper-2 py-5">
            {
                cart.length == 0 ? (
                    <Alert variant='info'>Cart is empty. Add products to your cart</Alert>
                ): (
                    <></>
                )
            }
            {
                cart.length > 0 && (
                    <div className="row">
                        {/* loop through products  */}
                                <>
                                        <table className='col-12'>
                                                <thead className='my-3  cart-header justify-content-between align-items-center'>
                                                        <tr>
                                                        <th scope="col">
                                                            <h4 className='cart-col-1'>Product</h4>
                                                        </th>
                                                        <th scope='col'>
                                                          <h4 className='cart-col-2'>Price</h4>
                                                        </th>
                                                        <th scope="col">
                                                          <h4 className='cart-col-3'>Quantity</h4>
                                                        </th>
                                                        <th scope="col">
                                                           <h4 className='cart-col-4'>Total</h4>
                                                        </th>
                                                        </tr>
                                                </thead>
                                            
                                            
                                            
                                                <tbody >
                                                    {/* loop through cart products  */}
                                                    {
                                                        cart.map((item) => (
                                                            <tr className='py-3 mb-2 cart-data justify-content-between align-items-center'>
                                                            <td className='cart-col-1 gap-15 d-flex align-items-center'>
                                                            <span className='my-4 w-50'>
                                                                    <img src={item.pictures[0].url} className='img-fluid' alt="product-img" />
                                                                    </span>
                                                                    <span className='w-75'>
                                                                        <p>{item.name}</p>
                                                                        <p>Size: hgf</p>
                                                                        <p>Color: gfd</p>
                                                                    </span>
                                                            </td>
                                                            <td>
                                                            <div className='cart-col-2'>
                                                                <h5 className="price">${item.price}</h5>
                                                            </div> 
                                                            </td>
                                                            <td className='align-items-center'>
                                                                <div className='cart-col-3 d-flex  gap-15 align-items-center'>
                                                                    <div className='d-flex align-items-center'>
                                                                        <i className='fa fa-minus-circle' onClick={() => handleDecrease({ productId: item._id,price: item.price, userId: user._id })}></i>
                                                                        <span className='mx-2'>{user.cart[item._id]}</span>
                                                                        <i className='fa fa-plus-circle' onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            !isLoading && <AiFillDelete  className='text-danger' onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                            <div className='cart-col-4'>
                                                                <h5 className="price">${item.price * user.cart[item._id]}</h5>
                                                            </div>
                                                            </td>
                                                        </tr>
                                                        ))
                                                    }
                                                </tbody>
                                        
                                            
                                            </table>
                                        
                                        <div className="col-12 py-2 mt-4">
                                        <div className="d-flex justify-content-between align-items-baseline">
                                        <Link to="/" className='button'>Continue to Shopping</Link>
                                        <div className='d-flex flex-column align-items-end'>
                                                <h4>SubTotal: ${user.cart.total}</h4>
                                                <p>Taxes and shipping calculated at checkout</p>
                                                <Link to="/checkout" className='button'>Checkout</Link>
                                        </div>
                                        </div>
                                        </div>
                                </>
                           
                        
                        
                    </div>
                )
            }
            
        </Container>
   </>
  )
}

export default Cart