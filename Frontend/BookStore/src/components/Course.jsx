import React, { useState } from 'react'
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course({inputValue}) {

    const [list, setList] = useState([]);
    useEffect(()=>{
        const getBook= async () => {
            try {
                const res = await axios.get('http://localhost:3000/book');
                let data = res.data;
                if (inputValue && inputValue.length !== 0) {
                  data = data.filter(elem => elem.name.toLowerCase().includes(inputValue.toLowerCase()));
                }
                setList(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, [inputValue]);

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-28 text-center items-center justify-center '>
                    <h1 className='text-2xl md:text-4xl'>
                        We're delighted to have you{" "}
                        <span className='text-pink-500'>Here! :)</span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam quod sint, tenetur vitae distinctio minus nesciunt molestias nostrum veniam commodi iste placeat corporis quam odit totam, impedit eos maiores tempore nam odio modi nemo, ducimus amet. Sequi similique placeat officia ea odit voluptate eveniet ipsum modi, quidem, ducimus neque.
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-pink-500  text-white px-5 py-2 hover:bg-pink-600 duration-300 rounded'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {list.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}
import { useEffect } from 'react';

export default Course