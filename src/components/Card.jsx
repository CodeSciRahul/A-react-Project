import React from 'react'
import { FaWheelchairMove } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"

const Card = ({data,refernce}) => {
  return (
    <>
     <motion.div  drag dragConstraints= {refernce} whileDrag={{scale:1.1}} className=' relative m-4 w-64 bg-zinc-700/80 h-72 rounded-[30px] text-white px-8 py-10 overflow-hidden'>
        <FaWheelchairMove />
        <p className='py-5 leading-tight text-sm'>{data.desc}</p>
        <div className='absolute bottom-5 left-0  w-[100%] px-8 flex justify-between mb-6'>
          <span>{data.filesize}</span>
          {data.isDownload ?<MdOutlineFileDownload/>: <RxCross2/> } 
        </div>
        {data.tag.isOpen && <div className={`absolute bottom-0 left-0 w-[100%] py-2 text-center ${data.tag.bg.blue ? "bg-sky-700":"bg-green-700"}`}>Download</div>}
        
        </motion.div>
    </>
  )
}

export default Card