import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = {
            email: data.email,
            password: data.password
        }
        axios.post("http://localhost:3000/user/login", userData)
            .then(res => {
                if (res.data) {
                    navigate("/");
                    toast.success(res.data.message);
                    localStorage.setItem("User", JSON.stringify(res.data.data))
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                }
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.message);
                }
            })
    }
    return (
        <>
            <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
                <div className="w-[600px] ">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Email:</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='dark:bg-slate-900 dark:text-white outline-none w-full px-3 py-1 border rounded-md'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password:</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    className='dark:bg-slate-900 dark:text-white outline-none w-full px-3 py-1 border rounded-md'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around items-center mt-4'>
                                <button className='bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Login
                                </button>
                                <p>
                                    Not registered?{" "}
                                    <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                        Signup
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login