import Image from 'next/image'
import React from 'react'
import illustrations from "/public/illustration.png"
import websites from "/public/websites.jpg"
import apps from "/public/apps.jpg"

function page() {
  return (
    <div>
      <h1 className='text-6xl font-bold mb-8'>Our Works</h1>
      <div className='flex-1'>
        <h3 className='font-bold mb-4'>Choose a gallery</h3>
        <div className='galleries flex gap-16'>
          <div className='image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={illustrations} fill={true}/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl hover:text-green-600 cursor-pointer transition duration-250 ease-in'>application</span>
          </div>
          <div className='image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={websites} fill={true}/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl hover:text-green-600 cursor-pointer transition duration-250 ease-in'>application</span>
          </div>
          <div className='image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={apps} fill={true}/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl hover:text-green-600 cursor-pointer transition duration-250 ease-in'>application</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page