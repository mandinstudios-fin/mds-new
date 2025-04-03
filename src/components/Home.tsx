import { useState, useEffect } from "react"
import { HOME_DATA } from "../constants"
import { MoveRight, X, Instagram, Link } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Header from "./Header"

// Preload images
const preloadImages = () => {
    HOME_DATA.forEach(item => {
        if (item.image) {
            const img = new Image();
            img.src = item.image;
        }
        if (item.insideImage) {
            const img = new Image();
            img.src = item.insideImage;
        }
    });
};

interface ProductProps {
    id: number;
    name: string;
    image: string;
    description: string[];
    logo: string;
    isExpanded: boolean;
    onToggle: (id: number | null) => void;
    insideImage?: string;
    subText?: string;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    instagramLink?: string;
    websiteLink?: string;
}

const Product = ({ id, name, image, description, logo, isExpanded, onToggle, insideImage, subText, instagramLink, websiteLink }: ProductProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [insideImageLoaded, setInsideImageLoaded] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);

    const handleToggle = (id) => {
        if (id === null) {
            // We're closing
            setIsShrinking(true);
            setTimeout(() => {
                onToggle(null);
                setIsShrinking(false);
            }, 300); // Match this to your duration
        } else {
            // We're opening
            onToggle(id);
        }
    };


    useEffect(() => {
        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => setImageLoaded(true);
        }
        if (insideImage) {
            const img = new Image();
            img.src = insideImage;
            img.onload = () => setInsideImageLoaded(true);
        }
        if (logo) {
            const img = new Image();
            img.src = logo;
            img.onload = () => setLogoLoaded(true);
        }
    }, [image, insideImage, logo]);

    return (
        <div
            className={`${isExpanded
                ? "expanded lg:w-full lg:h-[600px] mt-10"
                : "shrinking w-full lg:w-[307px] border-2 border-[#74aa9b] lg:h-[405px] h-[540px]"
                } product-container rounded-[2rem] p-2 relative expand-transition opacity-100 transition-all duration-500 ease-in-out transform-gpu`}
        >
            {!isExpanded ? (
                <div
                    className="w-full h-full cursor-pointer"
                    onClick={() => !isExpanded && onToggle(id)}
                >
                    {image && (
                        <div className="relative w-full h-full">
                            <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded-[1.3rem] ${imageLoaded ? 'hidden' : 'block'}`} />
                            <img
                                src={image}
                                className={`w-full h-full object-cover object-center rounded-[1.3rem] hover:scale-110 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                alt={name}
                                loading="eager"
                                width={307}
                                height={405}
                                decoding="async"
                            />
                        </div>
                    )}
                    <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer'>
                        <div className='lg:px-2 px-3 py-1 bg-[#74aa9b] rounded-full'>
                            <MoveRight className='text-[#fff] size-9 w-10 lg:size-5 lg:w-7' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full h-auto gap-10 overflow-hidden transition-all duration-700 ease-in-out transform scale-100 lg:h-full lg:flex-row">
                    <div className="lg:w-[409.344px] w-full lg:h-full h-auto transition-all duration-300">
                        {insideImage ? (
                            <div className="relative w-full h-full">
                                <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded-[1.3rem] ${insideImageLoaded ? 'hidden' : 'block'}`} />
                                <img
                                    src={insideImage}
                                    loading="eager"
                                    className={`w-full h-full object-cover rounded-[1.3rem] transition-opacity duration-300 ${insideImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    alt={name}
                                    width={409}
                                    height={600}
                                    decoding="async"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full object-cover rounded-[1.3rem] bg-[#1a3c34]/50" />
                        )}
                    </div>

                    <div className="lg:flex-1">
                        <div className="h-fit bg-white/5 backdrop-blur-lg text-white p-6 overflow-y-auto relative rounded-[1.3rem]">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggle(id)
                                }}
                                className="absolute z-50 flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full cursor-pointer top-2 right-2 hover:bg-white/20 hover:scale-110"
                                aria-label="Close"
                            >
                                <div className="flex items-center justify-center w-full h-full rounded-full hover:bg-white/10">
                                    <X size={32} className="transition-colors text-white/80 hover:text-white" />
                                </div>
                            </button>

                            {logo && (
                                <div className="relative h-16 mb-6">
                                    <div className={`absolute inset-0 bg-gray-200 animate-pulse rounded-lg ${logoLoaded ? 'hidden' : 'block'}`} />
                                    <img
                                        src={logo}
                                        className={`h-full w-auto object-contain transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        alt={`${name} logo`}
                                        loading="eager"
                                        width={256}
                                        height={64}
                                        decoding="async"
                                    />
                                </div>
                            )}
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
                        <p className="mb-8 font-light text-white">
                            {(instagramLink || websiteLink) && (
                                <a
                                    href={instagramLink || websiteLink}
                                    className="text-[#74aa9b] hover:text-[#74aa9b]/80 transition-colors flex items-center justify-center gap-2 mt-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {instagramLink ? (
                                        <>
                                            <Instagram size={55} />
                                            Instagram
                                        </>
                                    ) : (
                                        <>
                                            <Link size={55} />
                                            Visit Me
                                        </>
                                    )}
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

const Home = () => {
    const [expandedProductId, setExpandedProductId] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        preloadImages();
    }, []);

    const handleToggleExpand = (productId: number | null) => {
        setExpandedProductId(productId === expandedProductId ? null : productId)
    }

    const expandedProduct = HOME_DATA.find((product) => product.id === expandedProductId)

    return (
        <div
            className="h-auto py-10 overflow-hidden bg-fixed bg-center bg-cover lg:w-screen lg:h-screen lg:py-0"
            style={{ backgroundImage: "url('/images/BG.jpg')" }}
        >
            <section className="max-w-[1536px] w-full h-full mx-auto flex flex-col">
                <Header />

                {!expandedProductId && <h2 className="lg:text-[55px] text-[40px] mt-10 lg:mt-20 lg:ml-[7rem] ml-[1rem] text-white/25 mb-2 lg:mb-0">Our Milestones</h2>}
                <div
                    className="flex flex-col gap-5 px-4 mb-10 transition-all duration-500 ease-in-out lg:flex-row lg:mt-4"
                    style={{
                        minHeight: expandedProductId ? "600px" : "540px",
                        alignItems: expandedProductId ? "center" : "flex-start",
                    }}
                >
                    {expandedProductId ? (
                        expandedProduct && <Product {...expandedProduct} key={expandedProduct.id} isExpanded={true} onToggle={handleToggleExpand} />
                    ) : (
                        <>
                            {HOME_DATA.map((homedata) => (
                                <Product
                                    {...homedata}
                                    key={homedata.id}
                                    isExpanded={false}
                                    onToggle={handleToggleExpand}
                                />
                            ))}
                            <div className="lg:w-[307px] w-full h-[540px] lg:h-[405px] border-2 border-[#74aa9b] rounded-[2rem] p-2 relative">
                                <div className="w-full h-full bg-[#00261c] rounded-[1.3rem]">
                                    <img
                                        src="/images/E.jpg"
                                        alt="whats"
                                        className="w-full h-full rounded-[2rem]"
                                        loading="eager"
                                        width={307}
                                        height={405}
                                        decoding="async"
                                    />
                                    <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer' onClick={() => navigate("/contact")}>
                                        <div className='lg:px-2 px-3 py-1 bg-[#74aa9b] rounded-full hover:bg-[#74aa9b]/90 transition-colors'>
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

