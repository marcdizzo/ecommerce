import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/blogCard';
import ProductCard from '../components/productCard';
import SpeacialProduct from '../components/specialProduct';
import Container from '../components/Container';
import { services } from "../utils/data";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateProducts } from "../features/productSlice";
import axios from '../axios';
import { useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const [products, setProducts] = useState(null);
  const lastProducts = products.slice(0,4);
  
  useEffect(() => {
    axios.get("/products").then(( { data }) => dispatch(updateProducts(data)));
  },[])
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                  <img src="images/main-banner-1.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner"
                   />
                  <div className='main-banner-content position-absolute'>
                      <h4>SUPERCHARGED FOR PROS.</h4>
                      <h5>ipad S13+ Pro.</h5>
                      <p>From $999.00 or $41.62/mo.</p>
                      <Link className='button'>BUY NOW</Link>
                  </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                  <div className="small-banner position-relative">
                      <img src="images/catbanner-01.jpg" 
                      className='img-fluid rounded-3' 
                      alt="small banner"
                      />
                      <div className='small-banner-content position-absolute'>
                          <h4>Best Sale</h4>
                          <h5>ipad S13+ Pro.</h5>
                          <p>From $999.00 <br /> or $41.62/mo.</p>
                      </div>
                  </div>
                  <div className="small-banner position-relative">
                      <img src="images/catbanner-02.jpg" 
                      className='img-fluid rounded-3' 
                      alt="small banner"
                      />
                      <div className='small-banner-content position-absolute'>
                          <h4>NEW ARRIVAL</h4>
                          <h5>Buy Ipad Air</h5>
                          <p>From $999.00 <br /> or $41.62/mo.</p>
                      </div>
                  </div>
                  <div className="small-banner position-relative">
                      <img src="images/catbanner-03.jpg" 
                      className='img-fluid rounded-3' 
                      alt="small banner"
                      />
                      <div className='small-banner-content position-absolute'>
                          <h4>NEW ARRIVAL</h4>
                          <h5>Buy Ipad Air</h5>
                          <p>From $999.00 <br /> or $41.62/mo.</p>
                      </div>
                  </div>
                  <div className="small-banner position-relative">
                      <img src="images/catbanner-04.jpg" 
                      className='img-fluid rounded-3' 
                      alt="small banner"
                      />
                      <div className='small-banner-content position-absolute'>
                          <h4>NEW ARRIVAL</h4>
                          <h5>Buy Ipad Air</h5>
                          <p>From $999.00 <br /> or $41.62/mo.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                  {
                    services?.map((i,j) => {
                      return(
                        <div className='d-flex align-items-center gap-15' key={j}>
                          <img src={i.image} alt="services" />
                          <div>
                            <h6 className='text-md'>{i.title}</h6>
                            <p className="mb-0 text-sm">{i.tagline}</p>
                          </div>
                        </div>
                  
                      )
                    })
                  }
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
            <div className="row">
                    <div className="col-12">
                      <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                        <div className='d-flex gap-30 align-items-center'>
                          <div>
                            <h6>Music & Gaming</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Smart Tv</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/tv.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Headphones</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/headphone.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Muisc & Gaming</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Cameras</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/camera.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Smart Tv</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/tv.jpg" alt="camera" />
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <div>
                            <h6>Headphones</h6>
                            <p>10 Items</p>
                          </div>
                  
                          <img src="images/headphone.jpg" alt="camera" />
                        </div>

                      </div>
                    </div>
                  </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            {/* <ProductCard /> */}
            {
              lastProducts.map((product) => {
                  return(
                    <ProductCard {...product} />
                  )
                     
              }  
                    )
            }
           
           {/* <ProductCard />
           <ProductCard />
           <ProductCard /> */}
          </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/Famous-01.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>  
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/Famous-02.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-black text-uppercase'>Studio Display</h5>
                  <h6 className='text-black'>600 nits of brightness.</h6>
                  <p className='text-black'>27-inch 5k Retina display</p>
                </div>  
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/Famous-03.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-black text-uppercase'>smartphones</h5>
                  <h6 className='text-black'>Smartphone 13 pro.</h6>
                  <p className='text-black'>Now in Green.From $999.00 or $41.62/mo. for 24mo. Footnote*</p>
                </div>  
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/Famous-04.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-black text-uppercase'>Home Speakers</h5>
                  <h6 className='text-black'>Room-filling sound.</h6>
                  <p className='text-black'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>  
              </div>
            </div>
          </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
      <div className="row">
              <div className="col-12">
                <div className="section-heading">Speacial Products</div>
              </div>
            </div>
            <div className="row ">
              <SpeacialProduct />
              <SpeacialProduct />
              <SpeacialProduct />
              <SpeacialProduct />
            </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
           
          </div>
          <div className="row">
            {
              lastProducts.map((product) => (
                <ProductCard {...product}  />
              ))
            }
          </div>
      </Container>
      <Container class1="marque-wrapper py-5">
      <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className='d-flex'>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div>
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className='mx-4 w-25'>
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
              </div>
             
            </div>
          </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Home