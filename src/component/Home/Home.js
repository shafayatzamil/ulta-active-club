import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Exercise from '../Exercise/Exercise';
import './Home.css'

const Home = () => {

    const [exercise,setExercise]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])

    return (
        <div>
            <h2>Select my today exercise</h2>
            
           <div class="home-display">
           <div className='data-section'>
                
                {
                exercise.map((ex)=><Exercise ex={ex} key={ex.id} cart={cart} setCart={setCart}></Exercise>)
                 }

            </div>
            <div className='calculation-section'>
                <Calculation  cart={cart}></Calculation>
            </div>
           </div>
        </div>
    );
};

export default Home;