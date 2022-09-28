import React from 'react';
import './Calculation.css';
import image from '../images/user.jpg'

const Calculation = () => {
    return (
        <div>
            <div className='user'>
                <img src={image} className='user-img' alt="" />
                <div>
                    <h3>shafayat zamil</h3>
                    <p><small>chittagong,bangladesh</small></p>
                </div>
            </div>
            
            <div className="user-details">
                <div  className='user-info'>
                    <h4>65</h4>kg
                    {/* <span>kg</span> */}
                </div>
                <div className='user-info'>
                    <h4>5.6</h4>height
                    {/* <span>height</span> */}
                </div>
                <div className='user-info'>
                    <h4>24</h4>age
                </div>
            </div>

            <h4 className=''>Add to Breack</h4>

            <h4>Exercise Details</h4>
            <div className='calculation'><h4>Exercise Time:</h4></div>
            <div className='calculation'><h4>Breack Time:</h4></div>
            <button className='activity'> Activity completed</button>

        </div>
    );
};

export default Calculation;