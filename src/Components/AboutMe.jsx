import React from 'react'
import { FaFacebook,  FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const AboutMe = () => {
    return (
        <div className='bg-black border-2 border-neutral-400 rounded-[3rem] z-10 lg:fixed top-[100px] xl:left-[100px] left-[40px] bottom-[100px] xl:h-[765px] lg:h-[700px] w-auto max-w-[740px] xl:max-w-[400px] lg:max-w-[360px] m-auto lg:my-8 '>
            <div className='p-12 h-full'>
                <div className="prof-img lg:w-auto m-auto w-[12] sm:w-[17rem] h-[17rem] xl:h-[22rem] bg-hero bg-no-repeat bg-top bg-cover">
                </div>
                <div className="right-content text-center py-8 text-white ">
                    <div className="email text-lg sm:text-xl">vishwajitnagtiak@gmail.com</div>
                    <div className="pn-no py-4 text-neutral-400">+91-9924596846</div>
                    {/* <div className="address">Gujarat, India, Asia, Earth</div> */}
                    <div className="copy-rights text-sm text-neutral-400">© 2023 Vishwajit Nagtilak. All Rights Reserved</div>
                </div>
                <div className="social-media ">
                    <ul className='flex justify-around items-center'>
                        <a className='text-neutral-500 text-2xl rounded-full border-2 border-neutral-500 p-2 hover:text-[#28e98c] hover:border-[#28e98c]' href=""><FaFacebook /></a>
                        <a className='text-neutral-500 text-2xl rounded-full border-2 border-neutral-500 p-2 hover:text-[#28e98c] hover:border-[#28e98c]' href=""><FaInstagram /></a>
                        <a className='text-neutral-500 text-2xl rounded-full border-2 border-neutral-500 p-2 hover:text-[#28e98c] hover:border-[#28e98c]' href=""><FaLinkedinIn /></a>
                        <a className='text-neutral-500 text-2xl rounded-full border-2 border-neutral-500 p-2 hover:text-[#28e98c] hover:border-[#28e98c]' href=""><FaTwitter /></a>
                    </ul>
                </div>
                <button className='pt-10 flex  w-full'>
                    <a href='https://drive.google.com/file/d/1lNWGisuZEK1kVoNHobtuXStpsp_1MJek/view?usp=drive_link' className="border-2 w-full border-[#28e98c] bg-[#28e98c] hover:bg-transparent hover:text-[#28e98c] hover:font-bold rounded-full px-5 py-4" value=""> DOWNLOAD CV </a>
                </button>

            </div>
        </div >
    )
}

export default AboutMe