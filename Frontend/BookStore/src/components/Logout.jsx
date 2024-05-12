import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { toast } from 'react-toastify';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleSubmit = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("User");
            toast.success("Logout Successfully");
                setTimeout(()=>{
                    window.location.reload();
                },3000)
        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }
    return (
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
            onClick={handleSubmit}
        >
            Logout
        </button>)
}

export default Logout