import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div  id="hero" className='min-h-screen bg-no-repeat bg-[url(/channels4_profile-removebg-preview.png)] bg-cover'
     style={{backgroundSize:"25%", backgroundPosition:"left 100px top 100px"}}
     >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[30px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
          <div>


            <p  data-aos="zoom-in-up">Mirza</p>
            <p data-aos="zoom-in-up">Maaz Baig</p>
          </div>
        </div>
      </div>
      
     
    </div>
  )
}

export default Hero

