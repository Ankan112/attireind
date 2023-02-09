import React from 'react';
import logo from '../../images/logo.webp'
import { BiSearch } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='w-9/12 mx-auto mt-8'>
            <div className=''>
                <div className='flex justify-between items-center '>
                    <div>
                        <span>  </span>
                    </div>
                    <div>
                        <img className='ml-48' src={logo} alt="" />
                    </div>
                    <div className='mr-7'>
                        <div style={{ color: '#3E7C7C' }} className='flex items-center justify-end mr-10'>
                            <p>Log In</p>
                            <FaUserCircle className='mx-5' size='25'></FaUserCircle>
                            <BsBag size='25' className=''></BsBag>
                        </div>
                        <div className='relative'>
                            <BiSearch style={{ top: '17px', left: '5px', margin: '7px', color: '#3E7C7C' }} className='absolute' size='20'></BiSearch>
                            <input style={{ borderColor: '#3E7C7C', color: '#3E7C7C' }} placeholder="Search..." type="text" className='border-2 my-3 py-2 px-6 pl-10' name="" id="" />
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


        </div>
    );
};

export default Navbar;