import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaSkype } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>


                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            Community
                        </div>
                        <div className='flex flex-row items-center my-[15px]'>
                            <p className='cursor-pointer'>
                                <FaYoutube className='text-4xl' />
                            </p>
                            <p className='cursor-pointer mx-4'>
                                <a href='https://github.com/love211' target='_blanck'>  <FaGithub className='text-4xl' /></a>
                            </p>
                            <p className='cursor-pointer'>
                                {/* <FaDiscord className='text-4xl' /> */}
                                {/* <FaSkype className='text-4xl' /> */}
                                <a href='skype:live:.cid.da0d5784de52013' target='_blank' rel='noopener noreferrer'>
                                    <FaSkype className='text-4xl' />
                                </a>

                            </p>
                        </div>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        {/* <div className='font-bold text-[16px]'>
                            Social Media
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaInstagram />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaTwitter />
                            <span className='text-[15px] ml-[6px]'>Twitter</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaLinkedin />
                            <a  href='https://www.linkedin.com/in/love-
khadoliya-4465a5282'  target='_blank'> <span className='text-[15px] ml-[6px]'>LinkedIn</span> </a>
                        </p> */}
                        <div className='mb-[20px] text-[15px] text-center'>
                            &copy; <span>Made by:-</span>&nbsp;&nbsp;<strong>Love khadolia</strong><br /><br />
                            <span>Contact me at:<br />+91 7223018822 <br />love.kumar9626@gmail.com</span>
                        </div>
                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px] mb-4'>
                            About
                        </div>
                        {/* <form className='flex flex-col w-full'>
                            <div className='flex justify-between mb-4'>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mr-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 flex-1 max-w-[48%]'
                                    required
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    className=' border border-[#763bff] bg-[#1f0e48] text-white p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 flex-1'
                                    required
                                />
                            </div>
                            <input
                                type='email'
                                placeholder='Email'
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200'
                                required
                            />
                            <textarea
                                placeholder='Description'
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200'
                                rows='4'
                                required
                            />
                            <button
                                type='submit'
                                className='bg-[#18063e] text-white p-2 rounded hover:bg-[#763bff] transition duration-200'
                            >
                                Submit
                            </button>
                        </form> */}
                        <form className='flex flex-col w-[300px]'> {/* Adjust width here */}
                            <div className='flex justify-between mb-4'>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mr-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full max-w-[48%]'
                                    required
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    className='border border-[#763bff] bg-[#1f0e48] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200 w-full max-w-[48%]'
                                    required
                                />
                            </div>
                            <input
                                type='email'
                                placeholder='Email'
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200'
                                required
                            />
                            <textarea
                                placeholder='Description'
                                className='border border-[#763bff] bg-[#1f0e48] text-white p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#763bff] hover:bg-[#763bff] transition duration-200'
                                rows='4'
                                required
                            />
                            <button
                                type='submit'
                                className='bg-[#18063e] text-white p-2 rounded hover:bg-[#763bff] transition duration-200'
                            >
                                Submit
                            </button>
                        </form>

                    </div>

                    {/* <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>
                            About
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='text-[15px] ml-[6px]'>Love khadoliya</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='text-[15px] ml-[6px]'>Mob:- +91 7223018822 </span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='text-[15px] ml-[6px]'>love.kumar9626@gmail.com</span>
                        </p>

                    </div> */}
                </div>

                {/* <div className='mb-[20px] text-[15px] text-center'>
                    &copy; Made by Love khadolia<br/>
                    <span>Contact me at:<br/>+91 7223018822 <br/>love.kumar9626@gmail.com</span>
                </div> */}
            </div>

        </div>
    )
}

export default Footer