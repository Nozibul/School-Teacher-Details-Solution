import React from 'react';
import './salary.css'

const Salary = (props) => {
    //  console.log
        const {info } = props ;
    // Total salary 
     const total = info.reduce((previous, current) => previous + current.salary , 0)
    

    return (
        
        <div className="salary">
            <h1>Teacher Count:{props.info.length}</h1>
            <h2>Total Salary : ${total}</h2>
                {
                  info.map(previous => <h3 className="teacher-name">{previous.name}</h3> )
                }
             <div >
                 <button className="details-btn">More Details</button>
             </div>
        </div>
    );
};

export default Salary;