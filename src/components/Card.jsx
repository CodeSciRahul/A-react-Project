import React from 'react'
import { FaWheelchairMove } from "react-icons/fa6";
const Card = () => {
  return (
    <>
     <div className=' relative m-4 w-64 bg-zinc-700/80 h-72 rounded-[30px] text-white px-8 py-10 overflow-hidden'>
        <FaWheelchairMove />
        <p className='py-5 leading-tight text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam incidunt fuga quas.</p>
        <div className='absolute bottom-0 left-0  w-[100%] bg-sky-400 h-14'></div>
        </div>
    </>
  )
}

export default Card