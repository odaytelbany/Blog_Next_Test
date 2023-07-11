import React from 'react'
import Todos from '../components/Todos'

const Posts = async () => {

  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // const result = await response.json();
  // console.log("result => ", result);

  return (
    <div>
       posts page
       {/* <h2>{result.title}</h2> */}
       <Todos />
    </div>
  )
}

export default Posts