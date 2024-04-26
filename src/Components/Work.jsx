import React from 'react'
import { FaSuitcase } from 'react-icons/fa'



const Work = () => {

    return (
        <div className='work my-20 pt-[6vw]' id="work">
            <div className='text-white text-left max-w-2xl m-auto '>
                <div className="intro-content">
                    <span className='border px-4 py-1 border-white rounded-2xl text-white inline-flex items-center '><FaSuitcase className='mr-1.5 text-xs' />Portfolio</span>
                    <h1 className='text-5xl mb-10 mt-12'></h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="p-8 border-2 border-neutral-400 rounded-[3rem]">
                        <h3 className='text-3xl'>1 Rivet</h3>

                        <p className='text-sm pt-4 pb-8 text-neutral-400'>Completed 6 month of internship in UI Development at 1 Rivet, Valsad, Gujarat</p>

                        <a href='#' className='text-xs underline hover:no-underline'>VISIT SITE</a>

                    </div>
                    <div className="p-8 border-2 border-neutral-400 rounded-[3rem]">
                        <h3 className='text-3xl'>Smartfish Designs Pvt. Ltd.</h3>

                        <p className='text-sm pt-4 pb-8 text-neutral-400'>I have Completed 1.2 year in smartfish designs pvt. ltd. as frontend Developer and still Counting</p>

                        <a href='#' className='text-xs underline hover:no-underline'>VISIT SITE</a>

                    </div>
                    <div className="p-8 border-2 border-neutral-400 rounded-[3rem]">
                        <h3 className='text-3xl'>Aim EXcel</h3>

                        <p className='text-sm pt-4 pb-8 text-neutral-400'>It is a single Page application, a static page which is Developed by using HTML, CSS, Bootstrap</p>

                        <a href='#' className='text-xs underline hover:no-underline'>VISIT SITE</a>

                    </div>
                    <div className="p-8 border-2 border-neutral-400 rounded-[3rem]">
                        <h3 className='text-3xl'>Tmvizstudio</h3>

                        <p className='text-sm pt-4 pb-8 text-neutral-400'>It is Portfolio website of 3D designer Who designs 3D models of Houses, Apt etc. which is created in React applicatio with tailwind and scss</p>

                        <a href='#' className='text-xs underline hover:no-underline'>VISIT SITE</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
