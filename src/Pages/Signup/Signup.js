import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        console.log(data)
        setSignUpError("")
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Signup Success");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Signup Success");
            })
            .catch(err => {
                console.log(err);
                setSignUpError(err.message)
            })
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data)
                setCreatedUserEmail(email)
            })
    }

    return (
        <div className='w-96 my-8 mx-auto border-2 rounded-lg shadow-xl'>
            <div className='p-8'>
                <h2 className='text-xl text-center mb-5'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input
                            {...register("name", {
                                required: "Name is required"
                            })}
                            type="text"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="name"
                            placeholder='Name'
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            type="email"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="email"
                            placeholder='Email Address'
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: "password must be uppercase, lowercase, number and special characters"
                                }
                            })}
                            type="password"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="password"
                            placeholder='Password'
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <button
                        className='btn btn-accent w-full my-3'
                        type="submit">
                        Signup
                    </button>
                    <div className='text-center'>
                        <small>
                            <span>ALready Have an account?</span>
                            <Link
                                className='hover:underline ml-1 text-primary'
                                to='/login'>
                                Please Login Now
                            </Link>
                        </small>
                    </div>

                    <div className="divider">OR</div>
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;