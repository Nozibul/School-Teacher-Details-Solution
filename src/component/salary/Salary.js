import React from 'react';
import './salary.css'

const Salary = (props) => {
    //  console.log
        const {info } = props ;
    // Total salary 
     const total = info.reduce((previous, current) => previous + current.salary , 0)
    

    return (
        
        <div className="salary">
            <h1>Teacher Count:<span>{props.info.length}</span></h1>
            <h2>Total Salary :$<span>{total}</span></h2>
                {
                  info.map(previous => <div className="teacher-name"> 
                      <img src={previous.img} alt="" />
                      <p> {previous.name}  </p></div> )
                }
             <div >
                 <button className="details-btn">More Details</button>
             </div>
        </div>
    );
};

export default Salary;