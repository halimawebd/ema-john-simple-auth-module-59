import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='from-container'>
        <h3 className='form-titel'>signup</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' required />
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type="confirm" name='password' required />
            </div>
            
            <input className="btn-submit" type="submit" value="signup"/>
        </form>
        <p>Already Have an Account <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default SignUp;