import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { title, name, price, img, seller } = props.course;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="font-weight-bold m-0">{title}</p>
                    <p className="card-text "><small>{name}</small></p>
                    <p className="m-0"><strong>$ {price}</strong></p>
                    <p><small className="bg-warning rounded pl-1 pr-1">{seller}</small></p>
                    <button className="btn btn-danger font-weight-bold" onClick={() => props.addToCart(props.course)}><FontAwesomeIcon icon={faShoppingCart} />  Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;