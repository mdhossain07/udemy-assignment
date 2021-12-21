import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Content.css';

const Content = () => {

    const courses = 
    [
        {name : '2022 Complete Python Bootcamp : From Zero To Hero', price : 139.99, mentor : 'Jose Portilla', img: 'https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg'},
        {name : 'Machine Learning A-Z™: Python & R In data Science', price : 130.99, mentor : 'Kirill Eremenko', img: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg'},
        {name : 'Data Science and Machine Learning Bootcamp', price : 120.35, mentor : 'Jose Portilla', img: 'https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg'},
        {name : 'Complete Web Development Bootcamp 2022', price : 140.99, mentor : 'Dr. Angela Yu', img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_14.jpg'},
        {name : 'Adobe XD : User Experience Design Essentials 2021', price : 125.99, mentor : 'Daniel Walter Scott', img: 'https://img-c.udemycdn.com/course/240x135/1452908_8741_4.jpg'},
        {name : 'Ultimate AWS Certified Solutions Architect Associate 2021', price : 175.50, mentor : 'Kirill Eremenko', img: 'https://img-c.udemycdn.com/course/240x135/2196488_8fc7_7.jpg'}
    ]
    
    const [cart, setCart] = useState([]);

    const addcart = (info) => {
        const newCart = [...cart, info];
        setCart(newCart);
    }

    return (
        <div className='content-container'>
            <div className='course-container'>
                {
                    courses.map(course => 
                    <Courses info = {course}
                    addbtn = {addcart}> 
                    </Courses>)
                }
            </div>

            <div className='cart-container'>
                <Cart addcart = {cart}> </Cart>
            </div>
        </div>
    );
};

export default Content;