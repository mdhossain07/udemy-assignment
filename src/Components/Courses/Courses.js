import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const {name, price, mentor, img} = props.info;
    return (
        <div className='course-box'>
            <div className='course-details'>
                <img src={img} alt="" />
                <h4> {name} </h4>
                <p> <small> {mentor} </small> </p>
                <h5> Price : $ {price} </h5>
                
                <button className='enroll' onClick={() => props.addbtn(props.info)}> Enroll Now </button>
            </div>
            
        </div>
    );
};

export default Courses;