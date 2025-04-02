import { useState } from "react"
import { HOME_DATA } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import { MoveRight, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import ManDinLogo from "./ManDinLogo"

const Product = ({ id, name, image, description, logo, content, isExpanded, onToggle, insideImage, subText }) => {
    return (
        <div className={`product-container ${isExpanded ? "expanded lg:w-full lg:h-[600px] mt-10" : "w-full lg:w-[307px] border-2 border-[#74aa9b] lg:h-[405px] h-[540px] rounded-[2rem] p-2 relative expand-transition opacity-100 transition-all duration-500 ease-in-out"}`}>
            {!isExpanded ? (
                <div
                    className="w-full h-full cursor-pointer"
                    onClick={() => !isExpanded && onToggle(id)}
                >
                    {image && (
                        <img
                            src={image || "/placeholder.svg"}
                            className="w-full h-full object-cover object-center rounded-[1.3rem] hover:scale-110 transition-all duration-200"
                            alt={name}
                        />
                    )}
                    <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer'>
                        <div className='lg:px-2 px-3 py-1 bg-[#74aa9b] rounded-full'>
                            <MoveRight className='text-[#fff] size-9 w-10 lg:size-5 lg:w-7' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full h-auto gap-10 overflow-hidden transition-all duration-500 ease-in-out lg:h-full lg:flex-row">
                    <div className="lg:w-[409.344px] w-full lg:h-full h-auto">
                        {insideImage ? (
                            <img src={insideImage || "/placeholder.svg"} loading="lazy" className="w-full h-full object-cover rounded-[1.3rem]" alt={name} />
                        ) : (
                            <div className="w-full h-full object-cover rounded-[1.3rem] bg-[#1a3c34]/50" />
                        )}
                    </div>

                    <div className="lg:flex-1">
                        <div className="h-fit bg-white/5 backdrop-blur-lg text-white p-6 overflow-y-auto relative rounded-[1.3rem]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggle(null);
                                }}
                                className="absolute p-2 transition-colors rounded-full top-4 right-4 hover:bg-white/10"
                            >
                                <X size={24} />
                            </button>

                            {logo && <img src={logo || "/placeholder.svg"} className="h-16 mb-6" alt={`${name} logo`} />}
                            {subText && <p className="mb-4">{subText}</p>}
                            <div className="space-y-4">
                                {description && (
                                    <div className="space-y-2 text-sm">
                                        {description.map((paragraph, index) => (
                                            <p key={index} className="text-justify text-white/80">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-8">
                            <p className="mb-8 font-light text-white">Download Our App</p>
                            <img src="/images/apps.png" className="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const About = () => {
    return (
        <div>

        </div>
    )
}


const Home = () => {
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const navigate = useNavigate();

    const handleToggleExpand = (productId) => {
        setExpandedProductId(productId === expandedProductId ? null : productId)
    }

    const expandedProduct = HOME_DATA.find((product) => product.id === expandedProductId)

    return (
        <div
            className="h-auto py-10 overflow-hidden bg-fixed bg-center bg-cover lg:w-screen lg:h-screen lg:py-0"
            style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
            <section className="max-w-[1536px] w-full h-full mx-auto flex flex-col ">
                <div className="relative px-4 mt-10 lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-center flex-1">
                        {/* <img src="/images/logo.png" width={300} alt="ManDin Studios" className="cursor-pointer" onClick={() => setExpandedProductId(null)} /> */}
                        <ManDinLogo className={`w-[20rem] cursor-pointer`} mode="light" onClick={() => setExpandedProductId(null)} />
                    </div>
                    <button onClick={() => navigate("/contact")} className="bg-[#74aa9b] text-xs lg:text-base font-bold lg:px-4 lg:py-2 p-2 rounded absolute lg:static -top-10 right-4">CONTACT US</button>
                </div>

                <div className="flex items-center justify-center gap-7 text-xs lg:mr-[135px] mt-4">
                    <button className="text-[##1a3c34] font-semibold bg-[#fff]/50 py-[0.5rem] rounded-full w-[7rem]">Build with Us</button>
                    <button className="text-[##1a3c34] font-semibold bg-[#fff]/50 py-[0.5rem] rounded-full w-[7rem]" onClick={() => navigate("/about")}>About Us</button>
                </div>

                {!expandedProductId && <h2 className="lg:text-[55px] text-[40px] mt-10 lg:mt-20 lg:ml-[7rem] ml-[1rem] text-white/25 mb-2 lg:mb-0">Our Milestones</h2>}
                <div
                    className="flex flex-col gap-5 px-4 mb-10 transition-all duration-500 ease-in-out lg:flex-row lg:mt-4"
                    style={{
                        minHeight: expandedProductId ? "600px" : "540px",
                        alignItems: expandedProductId ? "center" : "flex-start",
                    }}
                >
                    {expandedProductId ? (
                        <Product {...expandedProduct} key={expandedProduct.id} isExpanded={true} onToggle={handleToggleExpand} />
                    ) : (
                        <>
                            {HOME_DATA.map((homedata) => (
                                <Product {...homedata} key={homedata.id} isExpanded={false} onToggle={handleToggleExpand} onMpuseOver={() => setHoveredProduct(homedata.id)} onMouseOut={() => setHoveredProduct(null)} />
                            ))}
                            <div className="lg:w-[307px] w-full h-[540px] lg:h-[405px] border-2 border-[#74aa9b] rounded-[2rem] p-2 relative">
                                <div className="w-full h-full bg-[#00261c] rounded-[1.3rem]">
                                    <img src="/images/E.jpg" alt="whats" className="w-full h-full rounded-[2rem]" />
                                    <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer' onClick={() => !isExpanded && onToggle(id)}>
                                        <div className='lg:px-2 px-3 py-1 bg-[#74aa9b] rounded-full' onClick={() => navigate("/contact")}>
                                            <MoveRight className='text-[#fff] size-9 w-10 lg:size-5 lg:w-7' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    )}
                </div>

                <div className={`lg:absolute mt-8 bottom-2 text-center  ${expandedProductId ? "right-10" : "right-0 left-0"}`}>
                    <p className="font-light text-white/50">Presented by Team of ManDIn Studios</p>
                </div>
            </section>
        </div>
    )
}

export default Home

