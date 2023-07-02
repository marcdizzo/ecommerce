import React, { useState } from 'react'
import BreadCrumb from '../components/breadCrumb'
import Meta from '../components/meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/productCard';
import Color from '../components/color';
import Container from '../components/Container';
import axios from '../axios';
import { useEffect } from 'react';
import { updateProducts } from "../features/productSlice";
import { useDispatch, useSelector } from 'react-redux';

const OurStore = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [grid,setGrid] = useState(4);
    // const gridSetter = (i) => {
    //     setGrid(i);
    // }

    // const lastProducts = products.slice(0,4);
    useEffect(() => {
        axios.get("/products").then(( { data } ) => dispatch(updateProducts(data)));
      },[])
  return (
    
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title="Our Store" />
        <Container class1="store-warapper home-wrapper-2 py-5">
            <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <div className="filter-title">Shop By Categories</div>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <div className="filter-title">Filter By</div>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div>
                                <div className="form-check">
                                    <input type="checkbox" value="" id="" 
                                    className="form-check-input" />
                                    <label htmlFor="" className="form-check-label">
                                        In Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" value="" id="" 
                                    className="form-check-input" checked />
                                    <label htmlFor="" className="form-check-label">
                                       Out of Stock(0)
                                    </label>
                                </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                <div className="form-floating">
                                     <input type="email" 
                                     className="form-control py-1" 
                                     id="floatingInput" 
                                     placeholder="from"/>
                                     <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating">
                                     <input type="email" 
                                     className="form-control py-1" 
                                     id="floatingInput1" 
                                     placeholder="to"/>
                                     <label htmlFor="floatingInput1">To</label>
                                </div>
                                </div>
                                <h5 className="sub-title">Color</h5>
                                <div>
                                    <div className="d-flex flex-wrap">
                                       <Color />
                                    </div>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                <div className="form-check">
                                    <input type="checkbox" value="" id="color-1" 
                                    className="form-check-input" />
                                    <label htmlFor="color-1" className="form-check-label">
                                        S (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" value="" id="color-1" 
                                    className="form-check-input" />
                                    <label htmlFor="color-1" className="form-check-label">
                                        M (2)
                                    </label>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <div className="filter-title">Product Tags</div>
                            <div>
                                <div className="product-tags mt-3 d-flex flex-wrap align-items-center gap-10">
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Headphone
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Laptop
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Mobile
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <div className="filter-title">Random Product</div>
                            <div>
                                <div className='random-products my-3 pb-3 d-flex'>
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphones bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="3"
                                        edit={false} 
                                        activeColor="#ffd700" />
                                        <b>$300</b>
                                    </div>
                                </div>
                                <div className='random-products  d-flex'>
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphones bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="3"
                                        edit={false} 
                                        activeColor="#ffd700" />
                                        <b>$300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid">
                           <div className="d-flex justify-content-between align-items-center">
                           <div className='d-flex align-items-center gap-10'>
                                <p className="mb-0" style={{width: "100px"}}>Sort By:</p>
                                <select name="" id="" 
                                className="form-control form-select">
                                   <option value="manual">Featured</option>
                                   <option value="best-selling">Best Selling</option>
                                   <option value="title-ascending">Alphabetically, A-Z</option>
                                   <option value="title-descending">Alphabetically, Z-A</option>
                                   <option value="price-ascending">Price,low to high</option>
                                   <option value="price-descending">Price,high to low</option>
                                   <option value="created-descending">Date,new to old</option>
                                   <option value="created-desceending">Date, new to old</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                    <p className="total-products mb-0">21 products</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img onClick={() => {setGrid(3);}}  src="images/gr4.svg" 
                                        className='d-block img-fluid' alt="grid" />
                                        <img onClick={() => {setGrid(4);}} src="images/gr3.svg" 
                                        className='d-block img-fluid' alt="grid" />
                                        <img onClick={() => {setGrid(6);}} src="images/gr2.svg" 
                                        className='d-block img-fluid' alt="grid" />
                                        <img onClick={() => {setGrid(12);}} src="images/gr.svg" 
                                        className='d-block img-fluid' alt="grid" />
                                    </div>
                            </div>
                           </div>
                        </div>
                        <div className="products-list mt-2 pb-5">
                           <div className="d-flex gap-10 flex-wrap">
                                {
                                    products.map((product) => (
                                        <ProductCard grid={grid} {...product} />
                                    ))
                                }
                               
                           </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default OurStore