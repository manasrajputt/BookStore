import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const onSubmit = (data) => {
        const userData = {
            fullName: data.fullName,
            email: data.email,
            password: data.password
        };
        axios.post("http://localhost:3000/user/signup", userData)
            .then(res => {
                if (res.data) {
                    toast.success(res.data.message);
                    navigate(from, { replace: true })
                }
                localStorage.setItem("User", JSON.stringify(res.data.user))
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.message);
                }
            });
    }
    return (
        <>
            <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white">
                <div className="w-[600px] ">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Enter your fullname'
                                    className='dark:bg-slate-900 dark:text-white outline-none w-full px-3 py-1 border rounded-md'
                                    {...register("fullName", { required: true })}
                                />
                                <br />
                                {errors.fullName && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
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
                                    Signup
                                </button>
                                <p className='text-lg'>
                                    Have Account?{" "}
                                    <Link
                                        className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        Login
                                    </Link>
                                </p>
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup