import React, { useState } from 'react'
import BreadCrumb from '../components/breadCrumb';
import Meta from '../components/meta';
import ProductCard from '../components/productCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/color';
import { Link, useParams } from 'react-router-dom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios';
import { useEffect } from 'react';
import { updateProducts } from '../features/productSlice';
import Loading from '../components/loading';
import { useAddToCartMutation } from '../services/appApi';
import ToastMessage from '../components/ToastMessage';

const SingleProduct = () => {
    
    //  const dispatch = useDispatch();
     const { id } = useParams();
     const user = useSelector((state) => state.user);
     const products = useSelector((state) => state.products);
     const [product,setProduct] = useState(null);
     const [similar,setSimilar] = useState(null);
     const popularProducts = products.slice(0,4);
     const [addToCart, { isSuccess }] = useAddToCartMutation();
     useEffect(() => {
        axios.get(`/products/${id}`).then(({ data }) => {
            setProduct(data.product);
        })
     },[id]);
    

     if(!product){
       return   <Loading />
     }
     const image = product.pictures[0].url;
     
     const props = {
        width: 300,
        height: 300, 
        zoomWidth: 300, 
        img: image
       };
     

    
    // const [orderedProduct, setOrderedProduct] = useState(true);
    
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
     <>
        <div className='position-relative'>
        {isSuccess && <ToastMessage   bg="info" title="Added to cart" body={`${product.name} is in your cart`}  />}
        </div>
        
         <Meta title={"Product Name"} />
        <BreadCrumb title={product.name} />
        
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                              <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img   src={product.pictures[0].url} alt="images" className='img-fluid' />
                                </div>
                                <div>
                                    <img  src={product.pictures[1].url} alt="images" className='img-fluid' />
                                </div>
                                <div>
                                    <img  src={product.pictures[0].url} alt="images" className='img-fluid' />
                                </div>
                                <div>
                                    <img  src={product.pictures[1].url} alt="images" className='img-fluid' />
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                            <h3 className='title'>
                                {/* Kids Haedphones Bulk 10 Pack Multi Colored For Students */}
                                {product.name}
                            </h3>

                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    {/* $100 */}
                                    ${product.price}
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars 
                                    count={5} 
                                    size={24} 
                                    value="3"
                                    edit={false} 
                                    activeColor="#ffd700" />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href="#review">Write a Review</a>
                            </div>
                            <div className=" py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data mb-0'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3>
                                    <p className='product-data mb-0'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3>
                                    <p className='product-data mb-0'>{product.category}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3>
                                    <p className='product-data mb-0'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity :</h3>
                                    <p className='product-data mb-0'>{product.quantity}pcs In Stock</p>
                                </div>
                                {/* <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge text-dark border border-secondary border-1">S</span>
                                        <span className="badge text-dark border border-secondary border-1">M</span>
                                        <span className="badge text-dark border border-secondary border-1">XL</span>
                                        <span className="badge text-dark border border-secondary border-1">XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color </h3>
                                    <Color />
                                </div> */}
                                <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity </h3>
                                    <div className=''>
                                        <input type="number" name='' 
                                        style={{width: "60px", height:"30px"}}
                                        id=''
                                        className='form-control'
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button type='submit' onClick={() => addToCart({ userId: user._id, productId: id, price: product.price, image: product.pictures[0].url })} className="button border-0">
                                            Add to cart
                                        </button>
                                        <button className='button border-0 signup'>
                                            Buy it Now
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="">
                                            <TbGitCompare  className='fs-5 me-2'/> Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                          <AiOutlineHeart  className='fs-5 me-2'/>  Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column  my-3'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data mb-0'>
                                        Free shipping and returs available on all orders! <br /> We ship
                                        all Us domestic ordrs within <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link :</h3>
                                    <a href="javascript:void(0);"
                                    onClick={() => {
                                        copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                                    }}
                                    >
                                     Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
       
        <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        
                        <h4>Description</h4>
                        <div className='description-inner-wrapper'>
                        <p className="p-3">
                           {product.description}
                        </p>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center  gap-10'>
                                <ReactStars 
                                count={5} 
                                size={24} 
                                value="3"
                                edit={false} 
                                activeColor="#ffd700" />
                                <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                           {/* {
                                orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="#">Write a Review</a>
                                    </div>
                                )
                           } */}
                        </div>
                        <div  className="review-form py-4">
                        <h4 className='mb-2'>Write a Review</h4>
                        <form action="#" className='d-flex flex-column gap-15'>
                            <div>
                            <ReactStars 
                                count={5} 
                                size={24} 
                                value="3"
                                edit={true} 
                                activeColor="#ffd700" />
                            </div>
                            <div>
                            <textarea name=""
                            className='w-100 form-control' 
                            id="" cols="30" 
                            rows="4"
                            placeholder='Comments'
                            ></textarea>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <button className='button border-0'>
                                Submit Review
                            </button>
                            </div>
                  </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                    <h6 className='mb-0'>Navdeep</h6>
                                    <ReactStars 
                                    count={5} 
                                    size={24} 
                                    value="3"
                                    edit={false} 
                                    activeColor="#ffd700" />
                                </div>
                                <p className='mt-3'>
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
                                    Repellat, nam, minus odit iste perspiciatis quibusdam enim architecto nemo vero nisi suscipit dolorem ea iure recusandae atque eos, modi repudiandae mollitia?
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <div className="row">
            {
                popularProducts.map((product) => (
                    <ProductCard {...product} />
                ))
            }
          </div>
          </div>
        </Container>
     </>
  )
}

export default SingleProduct