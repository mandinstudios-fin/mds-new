import Header from './Header'
import { useNavigate } from 'react-router-dom'

const BuildWithUs = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-auto py-10 overflow-y-auto bg-fixed bg-center bg-cover lg:w-screen lg:h-screen lg:py-0"
      style={{ backgroundImage: "linear-gradient(rgba(0, 38, 28, 0.9), rgba(0, 38, 28, 0.9)), url('/images/tower.jpg')" }}
    >
      <section className="max-w-[1536px] w-full h-full mx-auto flex flex-col">
        <Header />

        <h2 className='text-center text-4xl text-white/40 lg:mr-[120px] mt-10'>NICE TO MEET YOU</h2>

        <div className='w-full border rounded-[2rem] mt-5 relative'>
          <div className='text-sm grid grid-cols-2 gap-10 mx-auto w-[90%] py-12'>
            <div className='text-white/40'>
              <p className='italic'>1. What would you like us to help you build?</p>
              <div className='flex gap-2 mt-5'>
                <button className='border w-fit p-1 rounded-full '>Website</button>
                <button className='border w-fit p-1 rounded-full '>Mobile</button>
                <button className='border w-fit p-1 rounded-full '>Branding & UI/UX Design</button>
              </div>
              <div className='flex gap-2 mt-3'>
                <button className='border w-fit p-1 rounded-full '>Web App/Saas</button>
                <button className='border w-fit p-1 rounded-full '>Something Else</button>
              </div>
            </div>

            <div className='text-white/40'>
              <p className='italic'>2. Tell us a little about your idea or goal.</p>
              <input className='bg-transparent border h-20 w-[70%] mt-5 rounded' placeholder='Write' />
            </div>

            <div className='text-white/40'>
              <p className='italic'>3. What would you like us to help you build?</p>
              <div className='flex gap-2 mt-5'>
                <button className='border w-fit p-1 rounded-full '>Just an idea</button>
                <button className='border w-fit p-1 rounded-full '>Wireframes ready</button>
                <button className='border w-fit p-1 rounded-full '>Design ready, need development</button>
              </div>
              <div className='flex gap-2 mt-3'>
                <button className='border w-fit p-1 rounded-full '>Already launched, need upgrades</button>
                <button className='border w-fit p-1 rounded-full '>We want to rebuild from scratch</button>
              </div>
            </div>

            <div className='text-white/40'>
              <p className='italic'>4. How can we reach you?</p>
              <div className='flex gap-3 mt-5'>
                <div className='border rounded-full flex px-2 p-1'>
                  <p>Email</p>
                  <div className='border-b'>
                    <input className='bg-transparent focus:outline-none' />
                  </div>
                </div>

                <div className='border rounded-full flex px-2 p-1'>
                  <p>Whatsapp/Phone</p>
                  <div className='border-b'>
                    <input className='bg-transparent focus:outline-none' />
                  </div>
                </div>
              </div>

              <div className='border rounded-full flex w-fit mt-3 px-2 p-1'>
                <p>Company/Brand Name(if any)</p>
                <div className='border-b'>
                  <input className='bg-transparent focus:outline-none' />
                </div>
              </div>

            </div>
          </div>

          <button className='bg-black rounded-full absolute text-4xl left-[40%]'>SUMBIT</button>
        </div>

        <div className="w-full mt-16 text-center">
          <p className="font-light text-white/50">Presented by Team of ManDIn Studios</p>
        </div>
      </section>
    </div>
  )
}

export default BuildWithUs