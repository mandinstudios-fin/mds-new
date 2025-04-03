import { HOME_DATA } from '../constants';
import { MoveRight } from 'lucide-react';

interface ProductProps {
    id: number;
    name: string;
    image: string;
    insideImage: string;
    subText?: string;
    description: string[];
    logo: string;
}

const Product = ({ image }: ProductProps) => (
    <div className='w-[409.344px] h-[450px] relative rounded-[2rem] border border-[#90A3C0] overflow-hidden p-3'>
        {image && <img src={image} className='w-full h-full object-cover rounded-[1.3rem]' />}
        {!image && <div className='w-full h-full object-cover rounded-[1.3rem] backdrop-blur-sm' />}
        <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer'>
            <div className='bg-black px-2 py-1 rounded-full'>
                <MoveRight className='text-white size-5' />
            </div>
        </div>
    </div>
)

const Home = () => {
    return (
        <div className="w-screen h-screen" style={{ backgroundImage: "url('/images/BG.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <section className='max-w-[1536px] w-full h-full mx-auto flex flex-col justify-around'>
                <div className='flex justify-between items-center'>
                    <div className='flex-1 flex justify-center items-center'><img src='/images/logo.png' width={300} /></div>
                    <button className='bg-[#6A9F8F] font-bold p-3'>CONTACT US</button>
                </div>

                <div className='flex gap-3'>
                    {HOME_DATA.map((homedata) => (<Product {...homedata} key={homedata.id} />))}

                    <div className='w-[409.344px] h-[450px] relative border border-[#90A3C0] rounded-[2rem] p-3'>
                        <p>WHAT'S YOUR SIGN OFF</p>
                        <div className='absolute bottom-[1.5rem] left-[42%] transform flex items-center justify-center cursor-pointer'>
                            <div className='bg-black px-2 py-1 rounded-full'>
                                <MoveRight className='text-white size-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
