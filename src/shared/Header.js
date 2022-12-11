import React from 'react';
import { Link } from 'react-router-dom';
import name from '../assets/NAHIAN .png'
const Header = () => {

    const allMenus =
        <>
            <li><Link to='/' className='lg:text-primary text-2xl font-bold'>Home</Link></li>
            <li><a href='#myprojects' className='lg:text-primary text-2xl font-bold'>My Projects</a></li>
            <li><a href='#contact' className='lg:text-primary text-2xl font-bold'>Contact</a></li>
            <li><a href='#about' className='lg:text-primary text-2xl font-bold'>About</a></li>
            <li><Link to='/blogs' className='lg:text-primary text-2xl font-bold'>Blogs</Link></li>
        </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {allMenus}
                    </ul>
                </div>
                <Link to='/' ><img src={name} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal pr-20">
                    {allMenus}
                </ul>

            </div>

        </div>
    );
};

export default Header;