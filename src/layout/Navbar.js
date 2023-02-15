import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='h-14 m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-white'>
                <h1 className='text-xl font-semibold'>Product Sell</h1>
                <div className='d-flex'>
                    <Link className='mr-6 hover:text-blue-200' to='/'>Home</Link>
                    <Link className='mr-6 hover:text-blue-200' to='/history'>History</Link>
                    <Link className='mr-6 hover:text-blue-200' to='/dashboard'>Dashboard</Link>
                    <Link to='/cart'>
                        <FaShoppingCart className='mr-6 hover:text-blue-200 text-white inline' />
                </Link> 
                </div>
                {/* <Link to='/'>
                    <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
                        <IoIosListBox className='text-white' />
                    </li>
                </Link>
                <Link to='/cart'>
                    <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
                        <BsFillCartFill className='text-white ' />
                    </li>
                </Link> */}
            </ul>
        </nav>
    );
};

export default Navbar;