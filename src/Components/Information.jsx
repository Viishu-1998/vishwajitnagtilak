import React from 'react'
import { FaUser, FaHtml5, FaCss3, FaSass, FaBootstrap, FaReact, FaFigma } from 'react-icons/fa'

const Information = () => {
    return (
        <div className="infromation flex " id="information">
            <div className='text-white text-left max-w-2xl my-20 pt-[6vw] mx-auto'>
                <span className='border px-4 py-1 border-white rounded-2xl text-white inline-flex items-center '><FaUser className='mr-1.5 text-xs' />About</span>
                <h1 className='text-5xl mb-10 mt-12'>Every great design begin with an even better story</h1>
                <p className=''>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                <div className="skills">
                    <ul className='flex justify-around pt-16 flex-wrap relative'>
                        <li className=' hover:text-[#dd4b25] text-6xl'>
                            <div className="tooltip bg-[#dd4b25] after:bg-[#dd4b25] text-center py-1 px-2.5 text-white rounded text-sm">HTML</div>
                            <FaHtml5 className='mt-4'/></li>
                        <li className=' hover:text-[#2449d8] text-6xl'>
                            <div className="tooltip bg-[#2449d8] after:bg-[#2449d8] text-center py-1 px-2.5 text-white rounded text-sm">CSS</div>
                            <FaCss3 className='mt-4'/></li>
                        <li className=' hover:text-[#c36291] text-6xl'>
                            <div className="tooltip bg-[#c36291] after:bg-[#c36291] text-center py-1 px-2.5 text-white rounded text-sm">SCSS</div>
                            <FaSass className='mt-4'/></li>
                            <li className=' hover:text-[#00cdf2] pt-4'>
                        <div className="tooltip bg-[#00cdf2] after:bg-[#00cdf2] text-center py-1 px-2.5 text-white rounded text-sm">Tailwind</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" width="70" height="50" viewBox="0 0 123 74" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_207_2)">
                                    <path d="M61.44 0C45.06 0 34.82 8.14333 30.72 24.43C36.8667 16.29 44.0333 13.2367 52.22 15.27C56.9 16.43 60.22 19.8 63.94 23.53C69.94 29.61 76.94 36.64 92.16 36.64C108.54 36.64 118.78 28.4967 122.88 12.21C116.74 20.3567 109.573 23.41 101.38 21.37C96.7 20.21 93.38 16.84 89.66 13.11C83.64 7 76.67 0 61.44 0ZM30.72 36.64C14.34 36.64 4.1 44.7833 0 61.07C6.15333 52.93 13.32 49.8767 21.5 51.91C26.18 53.07 29.5 56.44 33.22 60.18C39.22 66.25 46.22 73.29 61.44 73.29C77.82 73.29 88.06 65.1467 92.16 48.86C86.02 57 78.8533 60.0467 70.66 58C65.98 56.84 62.66 53.47 58.94 49.74C52.94 43.66 45.94 36.62 30.72 36.62V36.64Z" />
                                </g>
                                {/* <defs>
                                    <clipPath id="clip0_207_2">
                                        <rect width="122.88" height="73.29" fill="white" />
                                    </clipPath>
                                </defs> */}
                            </svg>

                        </li>
                        <li className=' hover:text-[#7510ec] text-6xl'>
                            <div className="tooltip bg-[#7510ec] after:bg-[#7510ec] text-center py-1 px-2.5 text-white rounded text-sm">Bootstrap</div>
                            <FaBootstrap className='mt-4'/></li>
                   
                        <li className=' hover:text-[#00cdf2] text-6xl'>
                        <div className="tooltip bg-[#00cdf2] after:bg-[#00cdf2] text-center py-1 px-2.5 text-white rounded text-sm">React js</div>
                            <FaReact className='mt-4'/></li>
                        <li className=' hover:text-[#f26c5c] text-6xl'>
                        <div className="tooltip bg-[#f26c5c] after:bg-[#f26c5c] text-center py-1 px-2.5 text-white rounded text-sm">Figma</div>
                            <FaFigma className='mt-4'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Information