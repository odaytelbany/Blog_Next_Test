import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1 className='text-6xl font-bold mb-2'>Our Works</h1>        
        {children}
    </div>
  )
}

export default layout