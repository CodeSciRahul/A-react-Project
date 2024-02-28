import React, { useRef } from 'react'
import Card from './Card';

const Foreground = () => {
  const data = [
    {
      desc: "hello i love you himanshi. i miss you a lot every single day i miss you.",
      filesize: "0.8mb",
      isDownload: true,
      tag: {
        isOpen: true,
        bg: {
          blue: false,
        }
      }
    },
    {
      desc: "hello i love you himanshi. i miss you a lot every single day i miss you.",
      filesize: "0.55mb",
      isDownload: false,
      tag: {
        isOpen: false,
        bg: {
          blue: false,
        }
      }
    },
    {
      desc: "hello i love you himanshi. i miss you a lot every single day i miss you.",
      filesize: "0.75mb",
      isDownload: true,
      tag: {
        isOpen: true,
        bg: {
          blue: true,
        }
      }
    }
  ];
  const ref =useRef(null)


  return (
    <>
      <div ref = {ref} className='fixed z-[3] bg-transparent w-full h-screen flex'>
        {data.map((item, index) => (
          <Card key={index} data={item} refernce = {ref}/>
        ))}
      </div>
    </>
  )
}

export default Foreground