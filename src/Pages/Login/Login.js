import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='w-96 my-8 mx-auto border-2 rounded-lg shadow-xl'>
            <div className='p-8'>
                <h2 className='text-xl text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="email"
                            placeholder='Email Address'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="password"
                            placeholder='Password'
                        />
                    </div>
                    <label
                        className='label ml-2'>
                        <span className='label-text hover:underline cursor-pointer'>Forgot Password?</span>
                    </label>
                    <button
                        className='btn btn-accent w-full my-3'
                        type="submit">
                        Submit
                    </button>
                    <div className='text-center'>
                        <small>
                            <span>New to Doctors Portal?</span>
                            <Link
                                className='hover:underline ml-1 text-primary'
                                to='/signup'>
                                Create new account
                            </Link>
                        </small>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;