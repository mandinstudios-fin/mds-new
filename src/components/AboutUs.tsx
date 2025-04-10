import Header from './Header'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div
            className="h-auto py-10 overflow-y-auto bg-fixed bg-center bg-cover lg:w-screen lg:h-screen lg:py-0"
            style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
            <section className="max-w-[1536px] w-full h-full mx-auto flex flex-col">
                <Header />

                <div className='flex flex-col items-center justify-center gap-8 mt-10 lg:flex-row lg:gap-16 lg:mt-0'>
                    <div className='text-center lg:text-left'>
                        <h2 className='font-bold text-white text-[3.5rem] sm:text-[4rem] lg:text-[7rem] leading-[1] italic'>
                            <span>Create <br /></span>
                            <span className='flex items-center gap-4 lg:gap-[2rem] justify-center lg:justify-start'>
                                <button onClick={() => navigate("/contact")} className='text-lg sm:text-xl font-semibold bg-[#74aa9b] px-6 py-2 sm:p-4 sm:py-3 mt-4 rounded-full text-black hover:bg-[#74aa9b]/90 transition-colors'>Start now</button>
                                <span className='text-[2.5rem] sm:text-[3rem] lg:text-[7rem]'>and sell</span>
                            </span>
                        </h2>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <img src='/images/abt.png' className='w-[250px] sm:w-[300px] lg:w-[510px]' alt="About Us" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-16 lg:mt-32 mb-32 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-0'>
                    <div className='h-[18rem] sm:h-[22rem] lg:h-[24rem] w-full p-4 flex border border-[#74aa9b] rounded-[1rem] relative bg-[#1a3c33]'>
                        <div className='mx-auto my-auto space-y-3 font-light text-white lg:ml-20 sm:space-y-4'>
                            <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                                <p className='px-4 sm:px-5 py-[0.3rem] border rounded-full w-24 sm:w-28 text-center text-sm sm:text-base'>Fintech</p>
                                <p className='px-4 sm:px-5 py-[0.3rem] border rounded-full w-24 sm:w-28 text-center text-sm sm:text-base'>Infosec</p>
                            </div>
                            <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                                <p className='px-4 sm:px-5 py-[0.3rem] border rounded-full w-fit text-sm sm:text-base'>UI/UX</p>
                                <p className='px-4 sm:px-5 py-[0.3rem] rounded-full bg-white text-black w-32 sm:w-40 text-center text-sm sm:text-base'>Saas Apps</p>
                            </div>
                            <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
                                <p className='px-4 sm:px-5 py-[0.3rem] border rounded-full w-24 sm:w-28 text-center text-sm sm:text-base'>Web3</p>
                                <p className='px-4 sm:px-5 py-[0.3rem] border rounded-full w-fit text-sm sm:text-base'>and More...</p>
                            </div>
                        </div>
                        <p className='absolute text-xs transform -translate-x-1/2 bottom-5 left-1/2 lg:left-5 lg:translate-x-0 text-white/50'>Our Services</p>
                    </div>
                    <div className='h-[18rem] sm:h-[22rem] lg:h-[24rem] w-full p-4 px-6 sm:px-8 bg-[#74aa9b] rounded-[1rem] border border-[#74aa9b] relative'>
                        <p className='mt-8 sm:mt-10 lg:mt-14 text-[1rem] sm:text-[1.1rem] lg:text-[1.3rem] font-light'>Mandin Studios is a powerhouse of innovation, blending technology, security, and design to build cutting-edge digital solutions. With expertise in fintech, cybersecurity, user experience, and blockchain, we craft scalable and secure platforms that drive business success.</p>
                        <p className='absolute text-xs text-black transform -translate-x-1/2 bottom-5 left-1/2 lg:left-5 lg:translate-x-0'>About Us</p>
                    </div>
                    <div className='h-[18rem] sm:h-[22rem] lg:h-[24rem] w-full p-4 text-white flex justify-center border border-[#74aa9b] rounded-[1rem] relative bg-[#1a3c33]'>
                        <div className='my-auto text-center'>
                            <p className='font-extralight text-[1.1rem] sm:text-[1.2rem] lg:text-[1.4rem] text-[#d6d2b3]'>We make digital simple.</p>
                            <div className='flex flex-col gap-2 mt-6 sm:mt-8 text-[1.8rem] sm:text-[2rem] lg:text-[2.5rem] leading-[1] font-bold text-[#d6d2b3]'>
                                <h2>BRANDING</h2>
                                <h2>PRODUCTS</h2>
                                <h2>EXPERIENCES</h2>
                            </div>
                        </div>
                        <p className='absolute text-xs transform -translate-x-1/2 bottom-5 left-1/2 lg:left-5 lg:translate-x-0 text-white/50'>Our Expertise</p>
                    </div>
                </div>

                <div className="w-full mt-16 text-center">
                    <p className="font-light text-white/50">Presented by Team of ManDIn Studios</p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs