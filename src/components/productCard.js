import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to="/product/:id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt="wishlist" />
                </button>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="watch" />
                <img src={watch2} className='img-fluid' alt="watch" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk10 pack multi coloured for students
                </h5>
                <ReactStars 
                count={5} 
                size={24} 
                value="3"
                edit={false} 
                activeColor="#ffd700" />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                   Numquam cupiditate reprehenderit eveniet iste? Sequi, 
                   animi vel a consectetur amet praesentium!
                </p>
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt="compare" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="addcart" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="addcart" />
                    </button>
                </div>
            </div>
        </Link>
    </div>
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src={wish} alt="wishlist" />
                </Link>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="watch" />
                <img src={watch2} className='img-fluid' alt="watch" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk10 pack multi coloured for students
                </h5>
                <ReactStars 
                count={5} 
                size={24} 
                value="3"
                edit={false} 
                activeColor="#ffd700" />
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                   Numquam cupiditate reprehenderit eveniet iste? Sequi, 
                   animi vel a consectetur amet praesentium!
                </p>
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                        <img src={prodcompare} alt="compare" />
                    </Link>
                    <Link>
                        <img src={view} alt="addcart" />
                    </Link>
                    <Link>
                        <img src={addcart} alt="addcart" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard