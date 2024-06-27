import './register.css';

import { useState, useEffect } from 'react';
import axios from 'axios';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8085/ns-sneakers/register', {
            userName: username,
            email: email,
            password: password,
            validatePasssword: confirmPassword,
            firstName: firstname,
            lastName: lastname
        }).then(res => {
            console.log(res.data);
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setFirstname('');
            setLastname('');
        })
        .catch(err => {
            console.log(err.response.data);
        });

    };

    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Register</h2>
                <p className='form__message'>Signup now and get full access to our app. </p>
                <div className='form__flex'>
                    <label className='form__label'>
                        <input
                            className='form__input'
                            type='text' placeholder=''
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <span className='form__input-span'>Firstname</span>
                    </label>
                    <label className='form__label'>
                        <input
                            className='form__input'
                            type='text' placeholder=''
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <span className='form__input-span'>Lastname</span>
                    </label>
                </div>
                <label className='form__label'>
                    <input
                        className='form__input'
                        type='text' placeholder=''
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <span className='form__input-span'>Username</span>
                </label>
                <label className='form__label'>
                    <input
                        className='form__input'
                        type='email' placeholder=''
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span className='form__input-span'>Email</span>
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
                <label className='form__label'>
                    <input
                        className='form__input' type='password' placeholder=''
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span className='form__input-span'>Confirm Password</span>
                </label>
                <button className='form__btn'>Submit</button>
                <p className='form__Signin'>Already have an account?</p>
            </form>
        </div>
    )
}

export default Register
