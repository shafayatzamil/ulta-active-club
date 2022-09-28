import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Exercise from '../Exercise/Exercise';
import './Home.css'

const Home = () => {

    const [exercise,setExercise]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])

    return (
        <div>
            <h2>Select my today exercise {exercise.length}</h2>
            
           <div class="home-display">
           <div className='data-section'>
                
                {
                exercise.map((ex)=><Exercise ex={ex} key={ex.id}></Exercise>)
                 }

            </div>
            <div className='calculation-section'>
                <Calculation></Calculation>
            </div>
           </div>
        </div>
    );
};

export default Home;