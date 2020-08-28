import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header mb-5">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand font-weight-bold">E-Course</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;