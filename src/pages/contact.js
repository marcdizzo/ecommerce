import React from 'react'
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/meta";
import { AiOutlineHome , AiOutlineMail } from "react-icons/ai"
import {BiPhoneCall , BiInfoCircle} from 'react-icons/bi'
const Contact = () => {
  return (
    <>
       <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="py-5 home-wrapper-2 contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.035052417823!2d32.55951534688152!3d0.3130609417599832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc816be9a51d%3A0x7072a6f4067ed640!2sDamanico%20Building%2C%20Burton%20St%2C%20Kampala!5e0!3m2!1sen!2sug!4v1685876971730!5m2!1sen!2sug" 
            width="600" height="450" 
            className='border-0 w-100 br-1'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex jsutify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="#" className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                      type="text" 
                      className='form-control'
                      placeholder='Name' />
                    </div>
                    <div>
                      <input 
                      type="email" 
                      className='form-control' 
                      placeholder='Email'
                      />
                    </div>
                    <div>
                      <input 
                      type="tel" 
                      className='form-control'
                      placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea name=""
                       className='w-100 form-control' 
                       id="" cols="30" 
                       rows="4"
                       placeholder='Comments'
                       ></textarea>
                    </div>
                    <div>
                    <button className='button border-0'>
                        Submit
                    </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in Touch with us</h3>
                  <ul className="ps-0 contact-icons">
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome  className='fs-5'/>
                      <address className='mb-0'>Hno:277 Near Absa bank, Luwuum street, Kampala Uganda</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall  className='fs-5'/>
                      <a href="tel:+256 751096292">+256 751096292</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail  className='fs-5'/>
                      <a href="mailto:marcmukisa26@gmail.com">marcmukisa26@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle  className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 8am - 7pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact