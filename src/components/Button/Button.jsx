import React from 'react'

function Button({title}) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{title}</button>
  )
}

export default Button