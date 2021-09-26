import React from 'react';
import './taecher.css'

const Teacher = (props) => {
    // console.log(props)
    const {name ,age , img, salary ,qualifications, address, subject} = props.teacher
    return (
        <div className="teacher-detail">
            <div className="photo">
                <img src={img} alt="" />
            </div>
            <div className="title">
                <h2>Name: {name}</h2>
                <h3>Qualification: {qualifications}</h3>
                <h4>Address: {address}</h4>
                <h4>Course: {subject}</h4>
                <p>Age: {age}</p>
                <h3>Salary: ${salary}</h3>
                
            </div>
            <div className="btn">
                <button className="btn-salary" onClick={()=>props.handleSalary(props.teacher)}>Add to Salary</button>
            </div>

        </div>
    );
};

export default Teacher;