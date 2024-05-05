import React from 'react'

function Login() {
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email:</span>
                        <br />
                        <input type="email" placeholder='Enter your email' className='dark:bg-slate-900 dark:text-white outline-none w-full px-3 py-1 border rounded-md'/>
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password:</span>
                        <br />
                        <input type="password" placeholder='Enter your password' className='dark:bg-slate-900 dark:text-white outline-none w-full px-3 py-1 border rounded-md'/>
                    </div>
                    <div className='flex justify-around items-center mt-4'>
                        <button className='bg-pink-500 text-white rounded px-3 py-1 hover:bg-pink-700 duration-200'>
                            Login
                        </button>
                        <p>
                            Not registered?{" "}
                            <span className='underline text-blue-500 cursor-pointer'>
                                Signup
                            </span>
                        </p>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Login