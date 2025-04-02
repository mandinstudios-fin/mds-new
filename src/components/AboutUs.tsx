import React from 'react'
import ManDinLogo from './ManDinLogo'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div
            className="h-auto overflow-x-hidden bg-fixed bg-center bg-cover py-10 lg:py-0"
            style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
            <section className="max-w-[1536px] mx-auto flex flex-col">
                <div className="relative px-4 mt-10 lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-center flex-1">
                        {/* <img src="/images/logo.png" width={300} alt="ManDin Studios" className="cursor-pointer" onClick={() => setExpandedProductId(null)} /> */}
                        <ManDinLogo className={`w-[20rem] cursor-pointer`} mode="light" onClick={() => navigate("/")} />
                    </div>
                    <button onClick={() => navigate("/contact")} className="bg-[#74aa9b] text-xs lg:text-base font-bold lg:px-4 lg:py-2 p-2 rounded absolute lg:static -top-10 right-4">CONTACT US</button>
                </div>

                <div className="flex items-center justify-center gap-7 text-xs lg:mr-[135px] mt-4">
                    <button className=" font-semibold bg-[#fff]/50 py-[0.5rem] rounded-full w-[7rem]">Build with Us</button>
                    <button className=" font-semibold bg-[#fff] py-[0.5rem] rounded-full w-[7rem]">About Us</button>
                </div>


                <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
                    <div className=''>
                        <h2 className='font-bold text-white text-[4rem] lg:text-[7rem] leading-[1] italic mt-20 lg:ml-4'>
                            <span className=''>Create</span>
                            <span className='flex items-center gap-[2rem]'><button className='hidden lg:block text-xl font-semibold bg-[#74aa9b] p-4 py-3 mt-4 rounded-full text-black'>Start now</button><span>and sell</span></span>
                        </h2>
                    </div>
                    <div className='flex justify-start -ml-4'>
                        <img src='/images/abt.png' className='lg:w-[510px] w-[340px]' />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 mt-32 lg:px-4 px-8 mb-10'>
                    <div className='h-[25rem] w-full p-4 flex border border-[#74aa9b] rounded-[1rem] relative bg-[#1a3c33]'>
                        <div className='my-auto lg:ml-20 ml-4s space-y-2 font-light text-white'>
                            <div className='flex gap-2'>
                                <p className='px-5 py-[0.3rem] border rounded-full w-28 text-center'>Fintech</p>
                                <p className='px-5 py-[0.3rem] border rounded-full w-28 text-center'>Infosec</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='px-5 py-[0.3rem] border rounded-full w-fit'>UI/UX</p>
                                <p className='px-5 py-[0.3rem] rounded-full bg-white text-black w-40 text-center'>Saas Apps</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='py-[0.3rem] border rounded-full w-[4.2rem] text-center'>Web3</p>
                                <p className='px-5 py-[0.3rem] border rounded-full w-fit'>and More...</p>
                            </div>
                        </div>
                        <p className='absolute text-xs bottom-5 text-white/50'>Our Services</p>
                    </div>
                    <div className='h-[25rem] w-full p-4 px-8 bg-[#74aa9b] rounded-[1rem] border border-[#74aa9b] relative'>
                        <p className='mt-14 lg:text-[1.3rem] font-light'>Mandin Studios is a powerhouse of innovation, blending technology, security, and design to build cutting-edge digital solutions. With expertise in fintech, cybersecurity, user experience, and blockchain, we craft scalable and secure platforms that drive business success.</p>
                        <p className='absolute text-xs text-black bottom-5'>About Us</p>
                    </div>
                    <div className='h-[25rem] w-full p-4 text-white flex justify-center border border-[#74aa9b] rounded-[1rem] relative bg-[#1a3c33]'>
                        <div className='my-auto text-center'>
                            <p className='font-extralight text-[1.1rem] lg:text-[1.4rem] text-[#d6d2b3]'>We make digital (and simple)</p>
                            <div className='flex flex-col gap-2 mt-8 text-[2.5rem] leading-[1] font-bold text-[#d6d2b3]'>
                                <h2>BRANDING</h2>
                                <h2>PRODUCTS</h2>
                                <h2>EXPERIENCES</h2>
                            </div>
                        </div>
                        <p className='absolute text-xs left-5 bottom-5 text-white/50'>Our Expertise</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs