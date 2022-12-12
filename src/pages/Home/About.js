import React from 'react';
import myImage from '../../assets/Nahian.jpeg'
const About = () => {
    return (
        <section id='about' className='bg-secondary lg:pb-10'>
            
            <p className='text-5xl pt-20 text-center pb-10'>About Me</p>
            <div className='flex justify-center items-center'>
                <div className='grid lg:grid-cols-2 gap-5 '>
                    <div className='px-5 lg:pl-20 flex justify-center items-center'>
                        <div className='pb-10'>
                            <p className='text-2xl py-5 font-bold'>My Determination</p>
                            <p className='lg:text-xl pb-5'>
                                I  believe nothing can be achieved without hard work. I always try my best. I like to learn new technologies and
                                become more skilled. My goal is to do something unique and gain more and more experience.
                            </p>
                            <p className='lg:text-xl'>
                                <span className='text-2xl py-5 font-bold'>Skills and Technologies</span> <br /> <br />
                                ✓ Expertise: JavaScript, ES6, REST API, React, React Router, SPA, HTML5, CSS3, Bootstrap-4 <br />
                                ✓ Comfortable: Node.js, MongoDB, Mongoose, Material-UI, Express.js <br />
                                ✓ Familiar: with Stripe, OOP, Redux <br />
                                ✓ Tools: Git, VS Code, Chrome Dev Tools, Heroku, Netlify, Firebase <br /> <br />
                            </p>
                            <p className='lg:text-xl'>
                                <span className='text-2xl py-3 font-bold'>Contact With Me</span> <br /><br />
                                Feel free to contact me directly at <span className='font-semibold'>zabirnahin89229@gmail.com</span> <br />
                                See my GitHub repositories at <span className='font-semibold'>https://github.com/NahianNahin</span> <br />
                                Connect me with Linkedin at <span className='font-semibold'>https://www.linkedin.com/in/zabir-al-nahian/</span> <br />
                                Call me at whatapps <span className='font-semibold'>(+880)1970201717</span>
                            </p>
                        </div>
                    </div>
                    <div className="avatar px-10 lg:px-20  lg:pt-20  lg:pl-5 pb-10 hidden lg:block">
                        <div className="w-full mask mask-squircle">
                            <img src={myImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;