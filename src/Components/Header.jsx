import React from 'react'
import {FaHome} from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='text-left max-w-[46rem] my-20 m-auto items-center pt-[6vw] my-24'>
        <div className="content text-base ">
          <span className='border px-4 py-1 border-white rounded-2xl text-white inline-flex items-center '>
            <FaHome className='mr-1.5 text-xs'/>Introduction</span>
          <div className="content mt-12">
            <p className='tracking-[0.25rem] font-bold text-[#3e64ff]'>HEY! I AM</p>
            <h1 className='tracking-[.25rem] text-4xl sm:text-5xl lg:text-7xl py-4 text-white font-bold'>
              Vishwajit Nagtilak
            </h1>
            <p className='text-[32px] my-8'>
              <span className='text-[#28e98c]'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["A Web Developer", "An UI Developer", "A Web Designer"],

                  }} />
              </span>
            </p>
          </div>
        </div>
        {/* <img src={img} alt="" className='w-[35rem]' /> */}
      </div>

    </div>
  )
}

export default Header