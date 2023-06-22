import { FaEnvelope } from 'react-icons/fa'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () =>{
    return(
        <p>Your Message has been successfully sent. I will contact you soon</p>
    )
}

const Contact = (props) => {
    const form = useRef();
    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vgd7ssq', 'template_l1qyekx', form.current, 'Te3ZbY-39CutQZHSU')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true)
    };

    setTimeout(() => {
        showResult(false);
    }, 5000);

    return (
        <div className='contact ' id="contact">
            <div className='text-white text-left max-w-2xl m-auto pt-[6vw] my-20'>
                <span className='border px-4 py-1 border-white rounded-2xl text-white inline-flex items-center '><FaEnvelope className='mr-1.5 text-xs' />Contact</span>
                <h1 className='text-5xl mb-10 mt-12'>Let's Work Together!</h1>
                <span>vishwajitnagtiak@gmail.com</span>

                <form ref={form} onSubmit={sendEmail} className="contact-detail flex justify-between flex-wrap" action="https://formspree.io/f/mzbqnzye" method='POST'>
                    <div className="py-8 w-2/4 flex flex-col px-4 fname">
                        <label className='pb-2' htmlFor="">Full Name</label>
                        <input className='bg-neutral-500 p-2 rounded-sm h-10 text-white font-bold outline-none focus:outline-white focus:outline-2  border-0' name="name" type=" name" placeholder='Your Full Name' />
                    </div>
                    <div className="py-8 w-2/4 flex flex-col px-4 email">
                        <label className='pb-2' htmlFor="">Email</label>
                        <input className='bg-neutral-500 p-2 rounded-sm h-10 text-white font-bold outline-none focus:outline-white focus:outline-2  border-0' name="email" type="email" placeholder='Your Email' />
                    </div>
                    <div className="py-8 w-2/4 flex flex-col px-4 phone">
                        <label className='pb-2' htmlFor="">Phone</label>
                        <input className='bg-neutral-500 p-2 rounded-sm h-10 text-white font-bold outline-none focus:outline-white focus:outline-2  border-0' name="phone" type="tel" placeholder='Your Phone' />
                    </div>
                    <div className="py-8 w-2/4 flex flex-col px-4 subject">
                        <label className='pb-2' htmlFor="">Subject</label>
                        <input name="sub" className='bg-neutral-500 p-2 rounded-sm h-10 text-white font-bold outline-none focus:outline-white focus:outline-2  border-0' type="text" placeholder='Your Subject' />
                    </div>
                    <div className="py-8 w-full flex flex-col px-4 msg">
                        <label className='pb-2' htmlFor="">Message</label>
                        <textarea className='bg-neutral-500 p-2 rounded-sm  text-white font-bold outline-none focus:outline-white focus:outline-2  border-0 ' placeholder='Your Message' name="message" id="" cols="30" rows="6"></textarea>
                    </div>
                    <div className="row">{
                        result ? <Result/> : null
                    }</div>
                    <button className='pt-10 flex  w-full'>
                        <input type="submit" className="border-2  border-[#28e98c] bg-[#28e98c] hover:bg-transparent mx-4 text-black hover:text-[#28e98c] hover:font-bold rounded-full px-12 py-4" value="SEND MESSAGE" />
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact