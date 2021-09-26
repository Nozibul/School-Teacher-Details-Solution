import React from 'react';

const Salary = (props) => {
    console.log(props.salary)
    return (
        <div>
            <h2>salary:{props.salary.length}</h2>
        </div>
    );
};

export default Salary;