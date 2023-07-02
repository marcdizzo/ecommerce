import React from 'react'
import BreadCrumb from '../components/breadCrumb';
import Meta from '../components/meta';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/customInput';
import { useState } from 'react';
import { useSignupMutation } from '../services/appApi';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const SignUp = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [tel,setTel] = useState("");
    const [signup,{error, isLoading,isError}] = useSignupMutation();
    

    const handleSignup =  (e) => {
        e.preventDefault();
        signup({name, email , tel, password})
        // navigate('/login');
        if(name !== "" && email !== "" && tel !== "" && password !== ""){
            navigate('/');
        }
        
    }
  return (
    <>
        <Meta title={"Sign Up"} />
        <BreadCrumb title="Sign Up" />
        <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Create account</h3>
                        <form  onSubmit={handleSignup} className='d-flex flex-column gap-15'>
                            {isError && <Alert variant="danger">{error.data}</Alert>}
                            <CustomInput 
                                 type="text" 
                                 name='name' 
                                 placeholder='Name'
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                            />
                            <CustomInput 
                                type="email" 
                                name='email' 
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomInput 
                                 type="tel" 
                                 name='mobile' 
                                 placeholder='Mobile Number'
                                 value={tel} 
                                 onChange={(e) => setTel(e.target.value)}
                            />
                            <CustomInput 
                                 type="password" 
                                 name='password' 
                                 placeholder='Password'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)} 
                            />
                            <div>
                                <Link to="/forgotpassword">Forgot Password</Link>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className='button border-0' type='submit' disabled={isLoading}>
                                            Sign Up
                                        </button>
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

export default SignUp