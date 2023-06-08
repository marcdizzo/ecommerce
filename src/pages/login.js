import React from 'react';
import BreadCrumb from '../components/breadCrumb';
import Meta from '../components/meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/customInput';

const Login = () => {
  return (
   <>
        <Meta title={"Login"} />
        <BreadCrumb title="Login" />
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action="#" className='d-flex flex-column gap-15'>
                            <CustomInput 
                                type="email" 
                                name='name' 
                                placeholder='Email'
                            />
                            <CustomInput 
                                 type="password" 
                                 name='password' 
                                 placeholder='Password' 
                            />
                            <div>
                                <Link to="/forgotpassword">Forgot Password</Link>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to="/signup" className='button signup'>SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
        
   </>
  )
}

export default Login 