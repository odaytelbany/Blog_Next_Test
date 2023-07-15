import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='flex flex-wrap items-center justify-between mx-auto p-2'>
            <span className="text-xs" style={{color: "white"}}>@2023 Lamamia All rights reserved</span>
            <div className='flex gap-2'>
                <Image src="/1.png" width={15} height={15}/>
                <Image src="/2.png" width={15} height={15}/>
                <Image src="/3.png" width={15} height={15}/>
                <Image src="/4.png" width={15} height={15}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer