import React, { useState } from 'react';
import './Calculation.css';
import image from '../images/user.jpg'
import { ToastContainer, toast } from 'react-toastify';

const Calculation = ({cart}) => {
    let total=0;
    for(const product  of cart){
        total= total+product.timeRequired;
    }

    const [breaktext,setBreakText]=useState(0);
    const breakcart=(a)=>{
        setBreakText(a);
        const prediousStorage=localStorage.getItem("break:");
        const oldStorage=JSON.parse(prediousStorage);
        if(oldStorage){
            localStorage.setItem("break:",JSON.stringify([a]));
        }else{
            localStorage.setItem("break:",JSON.stringify([a]))
        }
    }
    const tostCall=()=>{
        toast("Activity complited bro!!,well done");
    }



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

            <h4 className=''>Added A Break</h4>
            <div className='break'>
            <li onClick={()=>breakcart(10)}>10</li>
            <li onClick={()=>breakcart(20)}>20</li>
            <li onClick={()=>breakcart(30)}>30</li>
            <li onClick={()=>breakcart(40)}>40</li>
            {/* <li>50</li> */}
            </div>
            

            <h4>Exercise Details</h4>
            <div className='calculation'><h4>Exercise Time:{total} minite</h4></div>
            <div className='calculation'><h4>Breack Time:{breaktext}</h4></div>
            <button onClick={tostCall} className='activity'> Activity completed</button>
            <ToastContainer />

        </div>
    );
};

export default Calculation;