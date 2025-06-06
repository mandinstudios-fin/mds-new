import { Instagram, Linkedin, SunMedium, Twitter } from 'lucide-react';
import React from 'react';
import ManDinLogo from './ManDinLogo';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-min">
            <div className='flex justify-center py-10 bg-[#00261c]'>
                <ManDinLogo className={`w-[20rem] cursor-pointer lg:mr-[121px]`} mode="dark" onClick={() => navigate("/")} />
            </div>
            <div className='max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center mt-10'>
                <div className="flex items-center justify-center w-full h-full p-6 lg:w-1/2">
                    <img src='/images/CImage.svg' />
                </div>

                <div className="flex flex-col justify-center w-full p-4 lg:w-1/2">
                    <h1 className="mb-2 lg:text-6xl text-4xl font-normal text-[#74aa9b]">Let's build something</h1>
                    <h2 className="mb-6 lg:text-6xl text-4xl font-bold text-[#00261c]">great together!</h2>
                    <p className="mb-8 text-base text-[#00261c]">Give us a nudge with the basics, and we'll make magic happen!</p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-[#00261c]">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full p-2 border border-gray-300 rounded-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-[#00261c]">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full p-2 border border-gray-300 rounded-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-[#00261c]">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-[#00261c]">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border border-gray-300 rounded-sm"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="px-8 py-2 text-white bg-[#00261c] rounded-sm"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='w-full bg-[#1a3c34] py-12'>
                <div className='max-w-[1536px] mx-auto'>
                    <div className="px-4 py-10 text-center text-white">
                        <h3 className="mb-6 text-4xl font-normal">Get in touch</h3>

                        <div className="flex items-center justify-center space-x-4">
                            <a href="mailto:info@mandinstudios.com" className="hover:text-gray-300">
                                info@mandinstudios.com
                            </a>
                            <div className="h-6 border-l border-white"></div>
                            <a href="tel:+919115962222" className="hover:text-gray-300">
                                +91 91159 62222
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#00261c] py-12'>
                <div className='max-w-[1536px] mx-auto'>
                    <h2 className="mb-8 text-4xl font-semibold text-center text-white">FOLLOW <br className='block md:hidden' /> MANDIN STUDIOS</h2>

                    <div className="flex justify-center space-x-8">
                        <a href="https://www.instagram.com/mandin_studios/" target='_blank' className="text-white hover:text-gray-300">
                            <Instagram size={32} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Foliviafinance" target='_blank' className="text-white hover:text-gray-300">
                            <Twitter size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/mdstudios/" target='_blank' className="text-white hover:text-gray-300">
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#00261c] py-12'>
                <div className='max-w-[1536px] mx-auto flex justify-center'>
                    <img src='/images/logo.png' width={700} onClick={() => navigate("/")} className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Contact;