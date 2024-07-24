import React from 'react';
import './CardStyle.css';

const Card = ({src,name,price,secPrice,rating}) => {




    return (
        <div className="card">
            <div className="content">
                {/* <div className="back">
                    <div className="back-content">
                        <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                        </svg>
                        <div className="img">
                            <div className="product-circle"></div>
                            <div className="product-circle" id="right"></div>
                            <div className="product-circle" id="bottom"></div>
                        </div>
                        <strong className='absolute'>Hover Me</strong>
                    </div>
                </div> */}
                <div className="front">
                    <div className='overlay w-full absolute h-[200%] z-40'></div>
                    <div className="img pl-[3rem] pr-[3rem] object-contain relative h-[60%] flex items-center justify-center  transition-all">
                        <img src={src} alt="cmaera img" width={"100%"} height={"100%"}/>
                    </div>
                    <div className="front-content relative">
                        <div className="w-full pl-[2rem] pr-[2rem] text-center">
                            <h1 className='font-[800]'>{name}</h1>
                            <p>$499.00</p>
                            <div className='w-full h-[60%] flex flex-col gap-[5px] items-center justify-start mt-[1rem] pb-[20px]'>
                                <button className='btn'>Add To Cart</button>
                                <button className='btn '>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;