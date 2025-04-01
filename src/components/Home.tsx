import { useState } from "react"
import { HOME_DATA } from "../constants"
import { motion, AnimatePresence } from "framer-motion"
import { MoveRight, X } from "lucide-react"

const Product = ({ id, name, image, description, logo, content, isExpanded, onToggle, insideImage, subText }) => {
    return (
        <motion.div
            layout
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 1, originX: 0 }} // Expands from the left
            exit={{ scaleX: 1, originX: 0 }}
            className={`${isExpanded ? "lg:w-full lg:h-[650px] h-auto mt-10" : "w-full lg:w-[409.344px] border-2 border-[#90A3C0]"
                } lg:h-[450px] h-[540px] rounded-[2rem]  overflow-hidden p-3 relative`}

        >
            <AnimatePresence>
                {!isExpanded ? (
                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                        {image && (
                            <img
                                src={image || "/placeholder.svg"}
                                className="w-full h-full object-cover object-center rounded-[1.3rem]"
                                alt={name}
                            />
                        )}
                        <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer' onClick={() => !isExpanded && onToggle(id)}>
                            <div className='bg-white px-2 py-1 rounded-full'>
                                <MoveRight className='text-[#1a3c34] size-5 w-7' />
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        className="w-full lg:h-full h-auto flex flex-col lg:flex-row overflow-hidden gap-10"
                    >
                        <div className="lg:w-[409.344px] w-full lg:h-full h-[400px]">
                            {insideImage && <img src={insideImage || "/placeholder.svg"} className="w-full h-full object-cover rounded-[1.3rem]" alt={name} />}
                            {!insideImage && <div className="w-full h-full object-cover rounded-[1.3rem] bg-[#1a3c34]/50" />}
                        </div>
                        <div className="lg:flex-1 h-fit bg-white/5 backdrop-blur-lg text-white p-6 overflow-y-auto relative rounded-[1.3rem]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onToggle(null)
                                }}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {logo && <img src={logo || "/placeholder.svg"} className="h-16 mb-6" alt={`${name} logo`} />}
                            {subText && <p className="mb-4">{subText}</p>}
                            <div className="space-y-4">
                                {description && (
                                    <div className="text-sm space-y-2">
                                        {description.map((paragraph, index) => (
                                            <p key={index} className="text-justify text-white/80">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {true && (
                                <div className="mt-8 flex justify-end items-center">
                                    <p className="mb-8 font-light">Download Our App</p>
                                    <img src="/images/apps.png" className="" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const Home = () => {
    const [expandedProductId, setExpandedProductId] = useState(null)

    const handleToggleExpand = (productId) => {
        setExpandedProductId(productId === expandedProductId ? null : productId)
    }

    const expandedProduct = HOME_DATA.find((product) => product.id === expandedProductId)

    return (
        <div
            className="lg:w-screen lg:h-screen h-auto bg-cover bg-center bg-fixed py-10 lg:py-0"
            style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
            <section className="max-w-[1536px] w-full h-full mx-auto flex flex-col ">
                <div className="lg:flex lg:justify-between lg:items-center relative px-4 mt-10">
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/images/logo.png" width={300} alt="ManDin Studios" className="cursor-pointer" onClick={() => setExpandedProductId(null)} />
                    </div>
                    <button className="bg-[#6A9F8F] text-xs lg:text-base font-bold lg:px-4 lg:py-2 p-2 rounded absolute lg:static top-0 right-4">CONTACT US</button>
                </div>

                <div className="flex items-center justify-center gap-7 text-xs mr-[135px] mt-4">
                    <button className="text-[##1a3c34] font-semibold bg-[#fff]/50 px-4 py-[0.5rem] rounded-full">Build with Us</button>
                    <button className="text-[##1a3c34] font-semibold bg-[#fff]/50 px-4 py-[0.5rem] rounded-full">Talk with Us</button>
                </div>

                {!expandedProductId && <h2 className="text-[55px] mt-20 ml-[7rem] text-white/25">Our Milestones</h2>}
                <motion.div
                    layout
                    className="flex lg:flex-row flex-col gap-3 px-4 mt-10 lg:mt-4"
                    style={{
                        minHeight: "540px",
                        alignItems: expandedProductId ? "center" : "flex-start",
                    }}
                >

                    <AnimatePresence>
                        {expandedProductId ? (
                            <Product {...expandedProduct} key={expandedProduct.id} isExpanded={true} onToggle={handleToggleExpand} />
                        ) : (
                            <>
                                {HOME_DATA.map((homedata) => (
                                    <Product {...homedata} key={homedata.id} isExpanded={false} onToggle={handleToggleExpand} />
                                ))}
                                <div className="lg:w-[409.344px] w-full h-[400px] lg:h-[450px] border-2 border-[#90A3C0] rounded-[2rem] p-3 relative">
                                    <img src="/images/E.jpg" alt="whats" className="w-full h-full rounded-[2rem]" />
                                    <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer' onClick={() => !isExpanded && onToggle(id)}>
                                        <div className='bg-white px-2 py-1 rounded-full'>
                                            <MoveRight className='text-[#1a3c34] size-5 w-7' />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className={`absolute bottom-2 text-center  ${expandedProductId ? "right-10" : "right-0 left-0"}`}>
                    <p className="text-white/50 font-light">Presented by Team of ManDIn Studios</p>
                </div>
            </section>
        </div>
    )
}

export default Home

