import React, { useState } from 'react';
import BreadCrumb from '../components/breadCrumb';
import Meta from '../components/meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/customInput';
import { useLoginMutation } from '../services/appApi';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Login = () => {
    const user = useSelector((state) => state.user);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [login,{isError,isLoading,error}] = useLoginMutation();
    const navigate = useNavigate();

    const handleLogin =  (e) => {
        e.preventDefault();
        login({email, password})
        if(email !== "" && password !== ""  && !isError){
            navigate('/');
        }     
        
    }

  return (
   <>
        <Meta title={"Login"} />
        <BreadCrumb title="Login" />
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Login</h3>
                        <form onSubmit={handleLogin}  className='d-flex flex-column gap-15'>
                            {isError && <Alert variant='danger'>{error.data}</Alert>}
                            <CustomInput 
                                type="email" 
                                name='name' 
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                        <button className='button border-0' type='submit' disabled={isLoading}>Login</button>
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