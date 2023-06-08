import React from 'react'
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import Color from '../components/color';
import Container from '../components/Container';
const CompareProduct = () => {
  return (
   <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                  <img src="images/cross.svg" className='position-absolute img-fluid cross' alt="cross" />
                  <div className='product-card-image'>
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="compare-product-details">
                    <div className="title">
                      <h5>
                        Honor T1 7.0 1Gb RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                      </h5>
                    </div>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className='product-detail'>
                        <h5>Brand:</h5>
                        <p className='mb-0'>Havels</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Type:</h5>
                        <p className='mb-0'>Watch</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Availablity:</h5>
                        <p className='mb-0'>In Stock</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className='product-detail'>
                        <h5>Size:</h5>
                        <div className="d-flex mb-0 gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                  <img src="images/cross.svg" className='position-absolute img-fluid cross' alt="cross" />
                  <div className='product-card-image'>
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="compare-product-details">
                    <div className="title">
                      <h5>
                        Honor T1 7.0 1Gb RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                      </h5>
                    </div>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                      <div className='product-detail'>
                        <h5>Brand:</h5>
                        <p className='mb-0'>Havels</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Type:</h5>
                        <p className='mb-0'>Watch</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Availablity:</h5>
                        <p className='mb-0'>In Stock</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Color:</h5>
                        <Color />
                      </div>
                      <div className='product-detail'>
                        <h5>Size:</h5>
                        <div className="d-flex mb-0 gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </Container> 
    </>
  )
}

export default CompareProduct