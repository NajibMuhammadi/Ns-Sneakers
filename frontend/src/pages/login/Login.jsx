import './login.css';

import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [shakeUserNameOrEmail, setShakeUserNameOrEmail] = useState(false);
    const [shakePassword, setShakePassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setShakeUserNameOrEmail(false);
        setShakePassword(false);

        axios.post('http://localhost:8085/ns-sneakers/login', {
            userNameOrEmail: usernameOrEmail,
            password: password
        }, {
            withCredentials: true // skicka med cookies
        }).then(res => {
            console.log(res.data)
            setUsernameOrEmail('');
            setPassword('');
        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data);
            if (err.response.data.message === 'Användarnamn eller email får inte vara tomt.') {
                setShakeUserNameOrEmail(true);
            } else if (err.response.data.message === 'Lösenord får inte vara tomt.') {
                setShakePassword(true);
            } else if (err.response.data.message === 'Username or password is incorrect') {
                setShakeUserNameOrEmail(true);
                setShakePassword(true);
            }
        });
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'usernameOrEmail') {
            setUsernameOrEmail(value);
            setShakeUserNameOrEmail(false);
        } else if (name === 'password') {
            setPassword(value);
            setShakePassword(false);
        }
    }
    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Log in</h2>
                {error && <p className='form__error'>{error.message}</p>}
                <p className='form__message'>Signup now and get full access to our app. </p>
                <label className='form__label'>
                    <input
                        className={`form__input ${shakeUserNameOrEmail ? 'shake' : ''}` }
                        type='text' placeholder=''
                        name='usernameOrEmail'
                        value={usernameOrEmail}
                        onChange={handleInputChange}
                        required
                    />
                    <span className='form__input-span'>Username or Email</span>
                </label>
                <label className='form__label'>
                    <input
                        className={`form__input ${shakePassword ? 'shake' : ''}`}
                        type='password' placeholder=''
                        name='password'
                        value={password}
                        onChange={handleInputChange}
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
