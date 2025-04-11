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

        <h2 className='text-center text-[2.7rem] lg:text-[4rem] leading-[0.5] text-[#81C9B3] lg:mr-[120px] mt-20 font-["TT"]'>NICE TO MEET YOU</h2>

        <div className='border border-white/40 rounded-[1.3rem] lg:rounded-[2rem] mt-10 relative py-7 mx-4 px-4'>
          <h2 className='lg:text-3xl lg:font-[200] text-xl text-center text-white '>Let's co-create something brilliant.</h2>
          <div className='hidden text-sm lg:grid lg:grid-cols-2 gap-10 lg:mx-auto lg:w-[90%] py-12 mx-4'>
            <div className='text-white/40'>
              <p className='italic'>1. What would you like us to help you build?</p>
              <div className='flex gap-2 mt-5'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Website</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Mobile</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Branding & UI/UX Design</button>
              </div>
              <div className='flex gap-2 mt-3'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Web App/Saas</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Something Else</button>
              </div>
            </div>

            <div className='text-white/40'>
              <p className='italic'>2. Tell us a little about your idea or goal.</p>
              <input className='bg-transparent border h-20 lg:w-[70%] mt-5 rounded border-white/40 focus:outline-none p-2' placeholder='Write' />
            </div>

            <div className='text-white/40'>
              <p className='italic'>3. What would you like us to help you build?</p>
              <div className='flex-wrap gap-2 mt-5 lg:flex'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Just an idea</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Wireframes ready</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Design ready, need development</button>
              </div>
              <div className='flex gap-2 mt-3'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Already launched, need upgrades</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>We want to rebuild from scratch</button>
              </div>
            </div>

            <div className='text-white/40'>
              <p className='italic'>4. How can we reach you?</p>
              <div className='flex gap-3 mt-5'>
                <div className='flex flex-wrap gap-2 p-1 px-2 border rounded-full border-white/40'>
                  <p>Email:</p>
                  <div className='border-b border-white/40'>
                    <input className='bg-transparent focus:outline-none ' />
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 p-1 px-2 border rounded-full border-white/40'>
                  <p>Whatsapp/Phone:</p>
                  <div className='border-b border-white/40'>
                    <input className='bg-transparent focus:outline-none' />
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 p-1 px-2 mt-3 border rounded-full w-fit border-white/40'>
                <p>Company/Brand Name(if any):</p>
                <div className='border-b border-white/40'>
                  <input className='bg-transparent focus:outline-none' />
                </div>
              </div>

            </div>
          </div>

          <div className='grid gap-10 py-12 lg:hidden '>
            <div className=' text-white/40'>
              <p className='italic'>1. What would you like us to help you build?</p>
              <div className='flex justify-center gap-2 mx-auto mt-5'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Website</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Mobile</button>
              </div>
              <div className='flex justify-center'><button className='p-1 mx-auto mt-2 border rounded-full w-fit border-white/40'>Branding & UI/UX Design</button></div>
              <div className='flex justify-center gap-2 mt-2'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Web App/Saas</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Something Else</button>
              </div>
            </div>

            <div className='text-white/40'>
              <p className='italic'>2. Tell us a little about your idea or goal.</p>
              <input className='w-full h-20 p-2 mt-5 bg-transparent border rounded border-white/40 focus:outline-none' placeholder='Write' />
            </div>

            <div className='text-white/40'>
              <p className='italic'>3. What would you like us to help you build?</p>
              <div className='flex flex-wrap justify-center gap-2 mt-5'>
                <button className='p-1 border rounded-full w-fit border-white/40'>Just an idea</button>
                <button className='p-1 border rounded-full w-fit border-white/40'>Wireframes ready</button>
              </div>
              <div className='flex justify-center'><button className='block p-1 mt-2 border rounded-full w-fit border-white/40'>Design ready, need development</button></div>

              <div className='flex justify-center'><button className='block p-1 mt-2 border rounded-full w-fit border-white/40'>Already launched, need upgrades</button></div>
              <div className='flex justify-center'><button className='block p-1 mt-2 border rounded-full w-fit border-white/40'>We want to rebuild from scratch</button></div>

            </div>

            <div className='text-white/40'>
              <p className='italic'>4. How can we reach you?</p>
              <div className='flex flex-wrap gap-2 p-1 px-2 mt-5 border rounded-full border-white/40'>
                <p>Email:</p>
                <div className='border-b border-white/40'>
                  <input className='bg-transparent focus:outline-none ' />
                </div>
              </div>

              <div className='flex flex-wrap gap-2 p-1 px-2 mt-2 border rounded-full border-white/40'>
                <p>Whatsapp/Phone:</p>
                <div className='border-b border-white/40'>
                  <input className='bg-transparent focus:outline-none ' />
                </div>
              </div>

              <div className='flex flex-wrap gap-2 p-1 px-2 mt-2 border rounded-full border-white/40'>
                <p>Company/Brand Name(if any):</p>
                <div className='border-b border-white/40'>
                  <input className='bg-transparent focus:outline-none' />
                </div>
              </div>

            </div>
          </div>

          <div className='flex justify-center lg:hidden'><button className='bg-[#81C9B3] text-3xl text-center text-[#0E372C] px-7 font-["TT"]'>SUBMIT NOW</button></div>

          <button className='hidden lg:block bg-[#81C9B3] z-1 absolute text-5xl text-center text-[#0E372C] left-[42%] -bottom-[25px] px-7 font-["TT"]'>SUBMIT NOW</button>
        </div>

        {/* <div className="w-full mt-16 text-center">
          <p className="font-light text-white/50">Presented by Team of ManDIn Studios</p>
        </div> */}
      </section>
    </div>
  )
}

export default BuildWithUs