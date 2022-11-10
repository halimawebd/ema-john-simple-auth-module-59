import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const confrim = form.confrim.value;
       console.log(email, password, confrim);


       if(password.length < 6){
        setError('Password should be 6 characters or more.');
        return;
       }
       if(password !== confrim){
        setError('Your Password did not match');
        return;
       }

       createUser(email, password)
       .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
       })
       .catch(error => console.error(error));
    }
    return (
        <div className='from-container'>
        <h3 className='form-titel'>signup</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' required />
            </div>
            <div className='form-control'>
                <label htmlFor='confrim'>Confrim Password</label>
                <input type="confrim" name='confrim' required />
            </div>
            
            <input className="btn-submit" type="submit" value="signup"/>
        </form>
        <p>Already Have an Account <Link to='/login'>Login</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;