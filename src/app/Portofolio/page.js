import Image from 'next/image'
import React from 'react'
import illustrations from "/public/illustration.png"
import websites from "/public/websites.jpg"
import apps from "/public/apps.jpg"
import Link from 'next/link'

function page() {
  return (
    <div>
      
      <div className='flex-1'>
        <h3 className='font-bold mb-4'>Choose a gallery</h3>
        <div className='galleries flex gap-16'>
          <Link href="/Portofolio/Illistrations" className='group image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={illustrations} fill={true} alt="proto"/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl cursor-pointer transition duration-250 ease-in group-hover:text-green-600'>Illistrates</span>
          </Link>
          <Link href="/Portofolio/Websites" className='group image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={websites} fill={true} alt="proto"/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl cursor-pointer transition duration-250 ease-in group-hover:text-green-600'>Websites</span>
          </Link>
          <Link href="/Portofolio/Apps" className='group image relative h-350 w-250 border-4 border-white'>
            <Image className='object-cover' src={apps} fill={true} alt="proto"/>
            <span className='absolute bottom-1 right-1 font-bold text-2xl cursor-pointer transition duration-250 ease-in group-hover:text-green-600'>apps</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page