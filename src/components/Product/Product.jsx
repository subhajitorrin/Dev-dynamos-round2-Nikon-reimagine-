import React from 'react'
import './Product.css'
import Card from './card'
import '../Features/Features.css'

const Product = () => {
    return (
        <div className='w-full bg-transparent relative md:p-[2rem] md:mt-[4rem] p-[1rem] text-white'>
            <div className='header-product w-full flex flex-col  '>
                <h1 className='lg:text-[10rem] font-[500] text-center gradiant-feature'>CATEGORY</h1>
                <button className='ml-[2rem]'>
                    <div class="text">
                        <span>See</span>
                        <span>More</span>
                    </div>
                    <div class="clone">
                        <span>See</span>
                        <span>More</span>
                    </div>
                    <svg
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                    >
                        <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className='camera-product w-full relative flex flex-wrap items-center justify-center gap-[5rem] mt-[2rem]'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='lens-productw-full relative flex flex-wrap items-center justify-center gap-[5rem] mt-[4rem]'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Product
