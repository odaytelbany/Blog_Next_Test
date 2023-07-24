import React from 'react'

const ThemeToggle = () => {
  const mode = "left"
  return (
    <div className='w-12 h-6 rounded-xl flex justify-between items-center p-0.5 border-2 border-green-600 relative'>
      <div className='text-sm'>🌙</div>
      <div className='text-sm'>☀️</div>
      <div className={`w-4 h-4 bg-green-600 rounded-full absolute ${mode == "dark" ? "right-0.5" : "left-0.5"}`}></div>
    </div>
  )
}

export default ThemeToggle