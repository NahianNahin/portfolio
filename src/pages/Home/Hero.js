import React from 'react';
import image from '../../assets/Nahin500.jpg'
import PrimaryButton from '../../component/PrimaryButton';
import Header from '../../shared/Header';
import './Hero.css'
const Hero = () => {
    return (
        <div className=' hero_section '>
            <Header></Header>
            <div className='flex flex-col justify-center items-center pt-20'>
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt="Nahin" />
                    </div>
                </div>

                <div className='text-center pt-5'>
                    <p className='text-3xl text-primary'>Hello, I'm </p>
                    <p className='text-3xl lg:text-5xl font-bold py-5 text-white uppercase'>Zabir Al Nahian</p>
                    <p className='text-2xl lg:text-4xl pb-4 text-primary'>I'm a Web developer</p>
                    <a target='_blank' rel="noreferrer"  href="https://drive.google.com/file/d/1GdxLmJrnuysdmke9UJjn5__TLzncGvtU/view?usp=share_link" ><PrimaryButton>Download Resume</PrimaryButton></a>
                </div>

            </div>
        </div>
    );
};

export default Hero;