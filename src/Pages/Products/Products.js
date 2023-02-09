import React from 'react';
import p1 from '../../images/p1.webp'
import p2 from '../../images/p2.webp'
import p3 from '../../images/p3.webp'
import p4 from '../../images/p4.webp'
import p5 from '../../images/p5.webp'
import p6 from '../../images/p6.webp'
import p7 from '../../images/p7.webp'

const Products = () => {
    const products = [
        {
            id: 1,
            productName: 'Aline Dress',
            image: p1,
            currentPrice: 850,
            regularPrice: 1000
        },
        {
            id: 2,
            productName: 'Designer Neck Dress',
            image: p2,
            currentPrice: 680,
            regularPrice: 800
        },
        {
            id: 3,
            productName: 'Sequence Skirt & Shirt Set',
            image: p3,
            currentPrice: 1360,
            regularPrice: 1600
        },
        {
            id: 4,
            productName: 'Black organza skirt',
            image: p4,
            currentPrice: 680,
            regularPrice: 800
        },
        {
            id: 5,
            productName: 'Purple zig zag puff sleeve tiered dress',
            image: p5,
            currentPrice: 680,
            regularPrice: 800
        },
        {
            id: 6,
            productName: 'Sleeveless Floral Maxi Dress',
            image: p6,
            currentPrice: 664.15,
            regularPrice: 899
        },
        {
            id: 7,
            productName: 'Brown Maxi Dress',
            image: p7,
            currentPrice: 664.15,
            regularPrice: 899
        },
    ]
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <div className='grid grid-cols-4'>
                {
                    products.map(product => <div key={product.id} className='text-left mb-5 relative'>
                        <p style={{ backgroundColor: '#2A7C6F', padding: '3px 14px' }} className='absolute text-white'>NEW IN</p>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <h2 style={{ color: '#2A7C6F' }} className='mt-3'>{product.productName}</h2>
                        <span style={{ color: '#40BCA8' }}><strike>${product.regularPrice}</strike></span>
                        <span style={{ color: '#40BCA8' }} className='ml-2'>${product.currentPrice}</span>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;