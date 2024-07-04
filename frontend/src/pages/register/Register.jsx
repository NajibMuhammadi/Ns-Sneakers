import './register.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const [error, setError] = useState('');

    const [shakes, setShakes] = useState({
        firstname: false,
        lastname: false,
        username: false,
        email: false, 
        password: false,
        confirmPassword: false
    })

    const shakeContainer = () => {
        setShakes({
            firstname: false,
            lastname: false,
            username: false,
            email: false,
            password: false,
            confirmPassword: false
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        shakeContainer();
        

        axios.post('http://localhost:8085/ns-sneakers/register', {
            userName: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
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
            setError(err.response.data)

            const errorMessage = err.response.data.message;

            if (errorMessage.includes('firstname')) {
                setShakes({...shakes, firstname: true})
            } else if (errorMessage.includes('lastname')) {
                setShakes({...shakes, lastname: true})
            } else if (errorMessage.includes('username')) {
                setShakes({...shakes, username: true})
            } else if (errorMessage.includes('email')) {
                setShakes({...shakes, email: true})
            } else if (errorMessage.includes('password')) {
                setShakes({...shakes, password: true})
            } else if (errorMessage.includes('confirmPassword')) {
                setShakes({...shakes, confirmPassword: true})
            } else if (errorMessage.includes('Username already exists')) {
                setShakes({...shakes, username: true})
            } else if (errorMessage.includes('Email already exists')) {
                setShakes({...shakes, email: true})
            } else if (errorMessage.includes('Passwords do not match')) {
                setShakes({...shakes, password: true, confirmPassword: true})
            }
        });

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'firstname') {
            setFirstname(value);
            setShakes({...shakes, firstname: false})
        }
        else if (name === 'lastname') {
            setLastname(value);
            setShakes({ ...shakes, lastname: false })
        }
        else if (name === 'username') {
            setUsername(value);
            setShakes({...shakes, username: false})
        }
        else if (name === 'email') {
            setEmail(value);
            setShakes({...shakes, email: false})
        }
        else if (name === 'password') {
            setPassword(value);
            setShakes({...shakes, password: false})
        }
        else if (name === 'confirmPassword') {
            setConfirmPassword(value);
            setShakes({...shakes, confirmPassword: false})
        }
    }

    return (
        <div className='form__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__title'>Register</h2>
                {error && <p className='form__error'>{error.message}</p>}
                <p className='form__message'>Signup now and get full access to our app. </p>
                <div className='form__flex'>
                    <label className='form__label'>
                        <input
                            className={`form__input ${shakes.firstname ? 'shake' : ''}`}
                            type='text' placeholder=''
                            value={firstname}
                            name='firstname'
                            onChange={handleInputChange}
                        />
                        <span className='form__input-span'>Firstname</span>
                    </label>
                    <label className='form__label'>
                        <input
                           className={`form__input ${shakes.lastname ? 'shake' : ''}`}
                            type='text' placeholder=''
                            name='lastname'
                            value={lastname}
                            onChange={handleInputChange}

                        />
                        <span className='form__input-span'>Lastname</span>
                    </label>
                </div>
                <label className='form__label'>
                    <input
                        className={`form__input ${shakes.username ? 'shake' : ''}`}
                        type='text' placeholder=''
                        value={username}
                        name='username'
                        onChange={handleInputChange}
                    />
                    <span className='form__input-span'>Username</span>
                </label>
                <label className='form__label'>
                    <input
                        className={`form__input ${shakes.email ? 'shake' : ''}`}
                        type='email' placeholder=''
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                    />
                    <span className='form__input-span'>Email</span>
                </label>
                <label className='form__label'>
                    { <input
                        className={`form__input ${shakes.password ? 'shake' : ''}`}
                        type='password' placeholder=''
                        value={password}
                        name='password'
                        onChange={handleInputChange}
                    /> }
                    <span className='form__input-span'>Password</span>
                </label>
                <label className='form__label'>
                    <input
                        className={`form__input ${shakes.confirmPassword ? 'shake' : ''}`}
                        type='password'
                        placeholder=''
                        value={confirmPassword} 
                        name='confirmPassword'
                        onChange={handleInputChange}
                    />
                    <span className='form__input-span'>Confirm Password</span>
                </label>
                <button className='form__btn'>Submit</button>
                <p className='form__Signin'>Already have an account? <Link className='form__Signin-link' to='/login'>Log in</Link></p>
            </form>
        </div>
    )
}

export default Register
