import React from 'react';

const Cart = (props) => {
    const cartCount = props.cart;
    const totalPrice = cartCount.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <div className="card text-center">
                <div className="card-body">
                    <h3 className="card-title">Order Summary</h3>
                    <div className="d-flex justify-content-between mb-3 mt-4">
                        <h5>Items : </h5>
                        <h5>{cartCount.length}</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>Total Price : </h5>
                        <h5>{totalPrice.toFixed(2)}</h5>
                    </div>
                    <button className="btn btn-success mt-4 font-weight-bold">Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;