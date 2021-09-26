import React, { useEffect, useState } from 'react';
import Salary from '../salary/Salary';
import Teacher from '../Teacher/Teacher';
import './school.css'

const School = () => {

    // All data loaded and set useState
    const [teachers, setTeacher] = useState([]);
    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res => res.json())
        .then(data => setTeacher(data))
    }, [])

    // useState for cart_salary and Eventhabdler
    const [salary, setSalary] = useState([])
    const handleToSalary = (informations) => {
          const newSalary = [...salary, informations];
          setSalary(newSalary)
    }

    return (
        <div className="school-container">
            <div className="teacher-container">
                {
                    teachers.map(teacher => <Teacher 
                         teacher={teacher}
                         handleSalary={handleToSalary}
                         /> )
                }
            </div>
            <div className="salary">
                <Salary salary ={salary}/>
            </div>
        </div>
    );
};

export default School;