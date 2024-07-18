import React from 'react';
import './CardStyle.css';

const Card = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                            {/* SVG path data */}
                        </svg>
                        <div className="img">
                            <div className="circle"></div>
                            <div className="circle" id="right"></div>
                            <div className="circle" id="bottom"></div>
                        </div>
                        <strong className='absolute'>Hover Me</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="img">

                    </div>
                    <div className="front-content">
                        <small className="badge">NIKON</small>
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;