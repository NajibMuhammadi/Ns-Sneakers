import './login.css';

import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8085/ns-sneakers/login', {
            userNameOrEmail: usernameOrEmail,
            password: password
        }).then(res => {
            console.log(res.data)
            setUsernameOrEmail('');
            setPassword('');
        });
    }
    return (
        <div className='form__container'>
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>Log in</h2>
            <p className='form__message'>Signup now and get full access to our app. </p>
            <label className='form__label'>
                <input
                    className='form__input'
                    type='text' placeholder=''
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    required
                />
                <span className='form__input-span'>Username</span>
            </label>
            <label className='form__label'>
                <input
                    className='form__input'
                    type='password' placeholder=''
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span className='form__input-span'>Password</span>
            </label>
            <button className='form__btn'>Submit</button>
            <p className='form__Signin'>Already have an account?</p>
        </form>
    </div>
    )
}

export default Login
