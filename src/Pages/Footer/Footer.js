import React from 'react';
import logo from '../../images/logo.webp'
import { RxInstagramLogo } from 'react-icons/rx'
import { BsYoutube, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <div className='flex justify-between mb-16'>
                <div className='relative'>
                    <div className=''>
                        <img className='ml-8' src={logo} alt="" />
                    </div>
                    <h4 style={{ color: '#3E7C7C' }} className='absolute top-28 left-5'>"You Always Desires"</h4>
                </div>
                <div style={{ color: '#3E7C7C' }} className='ml-36'>
                    <a href="/" alt=''><u>Home</u></a><br />
                    <a href="/" alt=''><u>About Us</u></a><br />
                    <a href="/" alt=''><u>Western Sets</u></a><br />
                    <a href="/" alt=''><u>Dresses</u></a><br />
                    <a href="/" alt=''><u>All Attires</u></a><br />
                    <a href="/" alt=''><u>Return & Exchange Policies</u></a><br />
                    <a href="/" alt=''><u>Terms & Conditions</u></a><br />
                    <a href="/" alt=''><u>Privacy Policies</u></a><br />
                    <a href="/" alt=''><u>Contact Us</u></a><br />
                    <div className='mt-5 flex justify-center items-center'>
                        <RxInstagramLogo className='p-1 h-6 w-6 bg-black text-white rounded-full'></RxInstagramLogo>
                        <BsYoutube className='p-1 h-6 w-6 mx-2 bg-black text-white rounded-full'></BsYoutube>
                        <BsWhatsapp className='p-1 h-6 w-6 mr-2 bg-black text-white rounded-full'></BsWhatsapp>
                        <FaFacebookF className='p-1 h-6 w-6 bg-black text-white rounded-full'></FaFacebookF>
                    </div>
                </div>
                <div style={{ color: '#3E7C7C' }}>
                    <h1 className='text-2xl mb-6'>Join the Club</h1>
                    <p className='w-80 mb-2'>Join our email list and get access to specials deals exclusive to our subscribers.</p>
                    <p className=''>Enter your email here *</p>
                    <input style={{ borderColor: '#3E7C7C' }} type="text" className='border-2 my-3 py-2 px-6' name="" id="" /><br />
                    <button style={{ backgroundColor: '#3E7C7C' }} className='text-white py-2 px-6'>Sign Up</button>
                </div>
            </div>
            <p style={{ color: '#3E7C7C' }} className='text-center mb-2'>&copy; 2022 Attireind By Kirnesh</p>
        </div>
    );
};

export default Footer;