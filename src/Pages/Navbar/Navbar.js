import React from 'react';
import logo from '../../images/logo.webp'

const Navbar = () => {
    return (
        <div className='w-9/12 mx-auto mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <span>  </span>
                </div>
                <div>
                    <img className='ml-48' src={logo} alt="" />
                </div>
                <div>
                    <div className='flex'>
                        <p>Log In</p>
                        <p>Log In</p>
                        <p>Log In</p>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div style={{ color: '#3E7C7C' }} className='flex justify-center'>
                <span className='mx-10'>Home</span>
                <span className='mx-10 '><span className='w-20 border-b-2 border-indigo-800'>New In</span></span>
                <span className='mx-10'>Shop</span>
                <span className='mx-10'>About Us</span>
            </div>
        </div>
    );
};

export default Navbar;