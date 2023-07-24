"use client"

import { ThemeContext } from '@/Context/ThemeContext'
import React, { useContext } from 'react'

const ThemeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext);

  return (
    <div className='w-11 h-6 rounded-xl flex justify-between items-center p-0.5 border-2 border-green-600 relative cursor-pointer' onClick={toggle}>
      <div className='text-xs'>☀️</div>
      <div className='text-xs'>🌙</div>
      <div className={`w-4 h-4 bg-green-600 rounded-full absolute ${mode == "dark" ? "left-0.5" : "right-0.5"}`}></div>
    </div>
  )
}

export default ThemeToggle