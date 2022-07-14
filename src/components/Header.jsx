import React from "react";
import logo from "../assets/logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { NavHashLink as Link } from "react-router-hash-link";
import "../App.css";

export const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className='d-flex flex-column'>
                    <div className='profile'>
                        <img
                            src={logo}
                            alt='Initial logo'
                            className='img-fluid rounded-circle'
                        />
                        <h1 className='text-light'>
                            <a href='index.html'>
                                <span className='chad'>Chad</span>
                                <span className='powell'>Powell</span>
                            </a>
                        </h1>
                        <div className='social-links mt-5 text-center'>
                            <a href='https://github.com/Chad-Powellv1' className='github'>
                                <i className='bx bxl-github'>
                                    <BsGithub />
                                </i>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/chad-powell-dev/'
                                className='linkedin'
                            >
                                <BsLinkedin />
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <nav className='navbar nav-menu'>
                        <ul>
                            <li>
                                <Link to='/' className='nav-link scrollto active'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='nav-link scrollto'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to='/projects' className='nav-link scrollto'>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:chada.powell@outlook.com" className="text-decoration-none">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};