import React from 'react';
import './Excercise.css';

const Exercise = ({ex}) => {
    // console.log(props.ex)
    const {picture,name,index,timeRequired,age}=ex;
    return (
        <div className='card'> 
        <div><img className='exercise-img' src={picture} alt="" /></div>
        <div>
           <h3>{name}</h3>
           <p>For-age:{age}</p>
           <p><strong>Time-required: </strong>
             {timeRequired}</p>
           <button className='cart-btn'>Add to cart</button>
        </div>
        </div>
    );
};

export default Exercise;