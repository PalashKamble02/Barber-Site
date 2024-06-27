import React, { useEffect } from 'react'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  {
    image:client1,
    title:'Andrew deew',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde ipsam qui ducimus culpa.'
  },
  {
    image:client2,
    title:'Andrew Chew',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde ipsam qui ducimus culpa.'
  },
  {
    image:client3,
    title:'Andrew Meow',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde ipsam qui ducimus culpa.'
  },
]
const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    }, []);


  return (
   <section id='testimonials' className='w-full md:px-20 md:h-[165vh] h-fit px-10 py-20 flex flex-col justify-end items-center gap-6 bg-themeyellow '>
<h1 data-aos="zoom-in" className=' text-6xl text-white font-bold text-center  '>Testimonials</h1>
<p data-aos="zoom-in" className='text-xl text-white font-semibold text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsam eveniet beatae error accusantium cumque necessitatibus culpa incidunt. Illum, sed!</p>
   
   <div id='clients' className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6'>
{
  clients.map((item,index) => (
    <div data-aos='slide-up' data-aos-delay='200' id='main-box' key={index} className='w-full bg-white p-14 flex flex-col justify-between items-center gap-6 rounded-3xl'>
<div id='top' className='flex justify-between items-center gap-8 w-full'>
<div className=' flex justify-center items-center gap-4 relative'>
<BiSolidQuoteAltLeft className='size-20 text-[31caf7e] absolute left-0 opacity-20'/>
<h1 className='text-2xl text-black font-bold '>{item.title}</h1>
</div>
<img src={item.image} alt="" className='w-[100px] hb-[100px] transform hover:scale-110 transition duration-300 cursor-pointer' />
</div>
<div id='bottom' className='w-full' >
<p className='text-end text-lg text-gray-600 font-medium '>{item.para}</p>
</div>
    </div>
  ))
}
   </div>
   </section>
  )
}

export default Testimonials