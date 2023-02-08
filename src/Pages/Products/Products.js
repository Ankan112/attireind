import React from 'react';
import p1 from '../../images/p1.webp'

const Products = () => {
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <div className='grid grid-cols-4'>
                <div className='text-left relative'>
                    <p style={{ backgroundColor: '#2A7C6F', padding: '3px 14px' }} className='absolute text-white'>NEW IN</p>
                    <div>
                        <img src={p1} alt="" />
                    </div>
                    <h2 style={{ color: '#2A7C6F' }} className='mt-3'>Aline Dress</h2>
                    <span style={{ color: '#40BCA8' }}><strike>$1000</strike></span>
                    <span style={{ color: '#40BCA8' }} className='ml-2'>$800</span>
                </div>
                <div className='text-left relative'>
                    <p style={{ backgroundColor: '#2A7C6F', padding: '3px 14px' }} className='absolute text-white'>NEW IN</p>
                    <div>
                        <img src={p1} alt="" />
                    </div>
                    <h2 style={{ color: '#2A7C6F' }} className='mt-3'>Aline Dress</h2>
                    <span style={{ color: '#40BCA8' }}><strike>$1000</strike></span>
                    <span style={{ color: '#40BCA8' }} className='ml-2'>$800</span>
                </div>
                <div className='text-left relative'>
                    <p style={{ backgroundColor: '#2A7C6F', padding: '3px 14px' }} className='absolute text-white'>NEW IN</p>
                    <div>
                        <img src={p1} alt="" />
                    </div>
                    <h2 style={{ color: '#2A7C6F' }} className='mt-3'>Aline Dress</h2>
                    <span style={{ color: '#40BCA8' }}><strike>$1000</strike></span>
                    <span style={{ color: '#40BCA8' }} className='ml-2'>$800</span>
                </div>
                <div className='text-left relative'>
                    <p style={{ backgroundColor: '#2A7C6F', padding: '3px 14px' }} className='absolute text-white'>NEW IN</p>
                    <div>
                        <img src={p1} alt="" />
                    </div>
                    <h2 style={{ color: '#2A7C6F' }} className='mt-3'>Aline Dress</h2>
                    <span style={{ color: '#40BCA8' }}><strike>$1000</strike></span>
                    <span style={{ color: '#40BCA8' }} className='ml-2'>$800</span>
                </div>
            </div>
        </div>
    );
};

export default Products;