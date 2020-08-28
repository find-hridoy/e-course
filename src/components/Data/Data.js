import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import './Data.css'
import Cart from '../Cart/Cart';

const Data = () => {
    const [data, setData] = useState(fakeData);
    const [cart, setCart] = useState([]);
    const addToCart = (course) => {
        const newPrice = [...cart, course];
        setCart(newPrice);
    }
    return (
        <div className="data">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {
                                data.map(course =>
                                    <div className="col-md-4 items">
                                        <Course course={course} addToCart={addToCart}></Course>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-4 items">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;