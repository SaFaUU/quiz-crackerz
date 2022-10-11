import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex w-50" href="#">
                        <img className='logo_size' src="https://codejunkie.co/wp-content/uploads/2020/09/horizontal-w.png" alt="" srcset=""></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/stats">Statistics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;