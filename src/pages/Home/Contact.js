import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css'
const SERVICE_ID = "service_vh5tdwg";
const TEMPLATE_ID = "template_ujmp1is";
const USER_ID = "tr_NG5GxFLdVkkU4N";

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            event.target.reset();
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <section id='contact' className='contact_section p-5 '>
            <p className='text-6xl pt-20 text-center capitalize text-primary pb-10'>Get touch with me</p>
            <div className='flex justify-center items-center'>
                <form className='w-[450px] lg:pb-20' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-primary">Username</span>
                        </label>
                        <input type="text" placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className="form-control pb-10">
                        <label className="label">
                            <span className="label-text text-primary">Message</span>
                        </label>
                        <textarea className="textarea textarea-primary" placeholder="Message"></textarea>
                    </div>
                    <button className='btn bg-gradient-to-r from-primary to-secondary border-0 text-black font-bold rounded-0 w-full'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;