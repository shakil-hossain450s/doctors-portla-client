import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { userLogin, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User successfully logged in");
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message);
            });
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success("User successfully logged in");
            navigate(from, { replace: true })
        })
        .catch(err => {
            console.log(err)
            setLoginError(err.message);
        });
    }

    return (
        <div className='w-96 my-8 mx-auto border-2 rounded-lg shadow-xl'>
            <div className='p-8'>
                <h2 className='text-xl text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email",
                                { required: "Email Address is required" }
                            )}
                            type="email"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="email"
                            placeholder='Email Address'
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            {...register("password",
                                {
                                    required: "password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters long" }
                                },

                            )}
                            type="password"
                            className='bg-white border w-full  pl-3 py-3 rounded-lg mt-1'
                            name="password"
                            placeholder='Password'
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
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
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
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

export default Login;