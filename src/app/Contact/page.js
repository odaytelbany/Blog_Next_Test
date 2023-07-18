import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import contact from "/public/contact.png";

function page() {
  return (
    <div className='flex-1 px-20'>
      <h1 className='font-bold text-4xl text-center mb-10 mt-10'>Let's Keep In Touch</h1>
      <div className='flex gap-24'>
        <div className='image flex-1 relative w-12 h-400'>
          <Image className="object-contain" src={contact} fill={true}/>
        </div>

        <div className='form flex-1 '>
          <input className="bg-transparent border border-white rounded-sm w-full p-3 mb-4" placeholder='name'/>
          <input className="bg-transparent border border-white rounded-sm w-full p-3 mb-4" placeholder='email'/>
          <textarea className="bg-transparent border border-white rounded-sm w-full h-200 p-3 mb-4" placeholder='message'/>
          <Button className="px-4 w-full" title={"Send"}/>
        </div>
      </div>
    </div>
  )
}

export default page