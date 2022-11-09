import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='from-container'>
            <h3 className='form-titel'> Login</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className="btn-submit" type="submit" value="Login"/>
            </form>
            <p>New to ema john <Link to='/signup'>Create a New account</Link></p>
        </div>
    );
};

export default Login;