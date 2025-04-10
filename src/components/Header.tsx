import { useLocation, useNavigate } from 'react-router-dom'
import ManDinLogo from './ManDinLogo'

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine which button is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="relative px-4 mt-10 lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-center flex-1">
                    <ManDinLogo className={`w-[12rem] lg:w-[20rem] cursor-pointer`} mode="light" onClick={() => navigate("/")} />
                </div>
                <button onClick={() => navigate("/contact")} className="bg-[#74aa9b] text-xs lg:text-base font-bold lg:px-4 lg:py-2 p-2 rounded absolute lg:static -top-10 right-4">CONTACT US</button>
            </div>

            <div className="flex items-center justify-center gap-7 text-xs lg:mr-[135px] mt-4">
                {/* <div className="flex flex-col items-center">
                    <button className="font-semibold bg-[#fff]/50 py-[0.5rem] rounded-full w-[7rem]">Build with Us</button>
                    <span className="text-[0.60rem] text-[#FFFF00] -mt-2">Work in progress</span>
                </div> */}
                {/* <div className="flex flex-col items-center">
                    <button className="font-semibold bg-[#fff]/10 py-[0.5rem] rounded-full w-[23rem] text-white/40 " onClick={() => navigate("/about")}>In the neighbourhood</button>
                    <span className="text-[0.60rem] text-[#ffffff] -mt-2 invisible">Work in progress</span>
                </div> */}
                
                <div className="flex items-center gap-7">
                    <button 
                        className={`w-24 rounded-full p-2 font-medium transition-colors duration-300 ${
                            isActive("/build-with-us") 
                                ? "bg-white text-black" 
                                : "bg-white/10 text-white/40 hover:bg-white hover:text-black"
                        }`}
                        onClick={() => navigate("/build-with-us")}
                    >
                        Build with Us
                    </button>
                    <button 
                        className={`w-24 rounded-full p-2 font-medium transition-colors duration-300 ${
                            isActive("/about") 
                                ? "bg-white text-black" 
                                : "bg-white/10 text-white/40 hover:bg-white hover:text-black"
                        }`}
                        onClick={() => navigate("/about")}
                    >
                        About Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header 