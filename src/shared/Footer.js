import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer_section'>
            <p className='text-center font-bold text-xl pt-10'>Copyright © 2022 - All right reserved</p>
            <p className='text-center font-semibold uppercase'>zabir al nahian</p>
            <div className='flex gap-5 justify-center items-center pt-5'>
                <a href="https://www.facebook.com/nahin89229/"><FaFacebook className='text-4xl'></FaFacebook></a>
                <a href="https://www.linkedin.com/in/zabir-al-nahian/"><FaLinkedin className='text-4xl'></FaLinkedin></a>
                <a href="https://github.com/NahianNahin"><FaGithub className='text-4xl'></FaGithub></a>
            </div>
        </div>
    );
};

export default Footer;