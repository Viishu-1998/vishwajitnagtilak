import React from 'react'
// import { useActiveMenu } from "react-active-menu";
import { FaBook } from 'react-icons/fa'

const Resume = () => {
    return (
        <div className='Academics' id="academic">
            <div className='text-white text-left max-w-2xl mx-auto pt-[8vw] my-20'>
                <span className='border px-4 py-1 border-white rounded-2xl text-white inline-flex items-center '><FaBook className='mr-1.5 text-xs' />Academics</span>
                <h1 className='text-5xl mb-10 mt-12'>Education</h1>
                <div className="timeline">
                    <ul className='border-l-4 border-[#28e98c] py-16 pl-12'>
                        <li className='py-4'>
                            <div className="event">
                                <span className='text-sm text-gray-400'>2013</span>
                                <h2 className='text-2xl'>SSC 10<span className='align-super'>th</span></h2>
                                <span className='text-sm text-gray-400'>Kelkar Vaze Marathi vidyalaya, Vapi</span>
                            </div>
                        </li>
                        <li className='py-4'>
                            <div className="event">
                                <span className='text-sm text-gray-400'>2015</span>
                                <h2 className='text-2xl'>HSC 12<span className='align-super'>th</span></h2>
                                <span className='text-sm text-gray-400'>Sanskar Bharti High school</span>
                            </div>
                        </li>
                        <li className='py-4'>
                            <div className="event">
                                <span className='text-sm text-gray-400'>2018</span>
                                <h2 className='text-2xl'>BCA (Bachelors of Computer Application)</h2>
                                <span className='text-sm text-gray-400'>PES Modern College of Engineering, Pune</span>
                            </div>
                        </li>
                        <li className='py-4'>
                            <div className="event">
                                <span className='text-sm text-gray-400'>2021</span>
                                <h2 className='text-2xl'>MCA (Master's in computer Application)</h2>
                                <span className='text-sm text-gray-400'>PES Modern College of Engineering, Pune</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume