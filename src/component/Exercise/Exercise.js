import React from 'react';
import './Excercise.css';

const Exercise = ({ex}) => {
    // console.log(props.ex)
    const {picture,name,index,timeRequired}=ex;
    return (
        <div className='card'>
            <img className='images' src={picture} alt="" />
            <h1>today excercise is {index}</h1>
            <h2>name:{name}</h2>
            <h4>Time-Required:{timeRequired}</h4>
            <button>Add to list</button>

            

        </div>
    );
};

export default Exercise;