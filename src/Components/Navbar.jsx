import React, { useState, useEffect } from 'react'
import { FaBook, FaEnvelope, FaHamburger, FaHome, FaSuitcase, FaTimes, FaUser } from 'react-icons/fa'
import AboutMe from './AboutMe';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  return (
    <div className={` ${scroll ? "lg:bg-black" : "lg:bg-transparent"}  w-full lg:max-w-none lg:h-auto h-full lg:flex lg: px-16 py-2 text-white z-10  ${scroll ? "lg:fixed" : "lg:stastic"} right-0 `}>
      <input className='lg:hidden invisible' type="checkbox" id="menus"></input>
      {/* <AboutMe/> */}
      <ul className='nav-links lg:bg-transparent bg-black lg:bg-none w-[0] lg:w-full lg:h-auto h-full lg:static fixed top-0 right-0 items-center flex lg:flex-row flex-col justify-center py-4'>
        <label htmlFor="menus" className='absolute top-0 right-0 p-4 lg:hidden inline'><FaTimes /></label>
        <li className='nav-link px-5 hover:text-[#28e98c] flex items-center lg:py-0 py-4 lg:w-auto w-2/4'><FaHome className='text-white text-md lg:hidden pr-1'/><a className='active:text-[#28e98c]' href="#">Home</a></li>
        <li className='nav-link px-5 hover:text-[#28e98c] flex items-center lg:py-0 py-4 lg:w-auto w-2/4'><FaUser className='text-white text-md lg:hidden pr-1'/><a className='active:text-[#28e98c]' href="#information">About</a></li>
        <li className='nav-link px-5 hover:text-[#28e98c] flex items-center lg:py-0 py-4 lg:w-auto w-2/4'><FaBook className='text-white text-md lg:hidden pr-1'/><a className='active:text-[#28e98c]' href="#academic">Academic</a></li>
        <li className='nav-link px-5 hover:text-[#28e98c] flex items-center lg:py-0 py-4 lg:w-auto w-2/4'><FaSuitcase className='text-white text-md lg:hidden pr-1'/><a className='active:text-[#28e98c]' href="#work">Work</a></li>
        <li className='nav-link px-5 hover:text-[#28e98c] flex items-center lg:py-0 py-4 lg:w-auto w-2/4'><FaEnvelope className='text-white text-md lg:hidden pr-1'/><a className='active:text-[#28e98c]' href="#contact">Contact</a></li>
      </ul>
      <label className='lg:hidden flex flex-row-reverse' htmlFor="menus"><FaHamburger /></label>
    </div>
  )
}

export default Navbar