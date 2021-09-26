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
    const [info, setInfo] = useState([])
    const handleToSalary = (informations) => {
        // console.log(info)
          const newInfo = [...info, informations];
          setInfo(newInfo)
    }

    return (
        <div className="school-container">
            <div className="teacher-container">
                {
                    teachers.map(teacher => <Teacher 
                         key={teacher.name}
                         teacher={teacher}
                         handleSalary={handleToSalary}
                         /> )
                }
            </div>
            <div>
                <Salary info ={info}/>
            </div>
        </div>
    );
};

export default School;