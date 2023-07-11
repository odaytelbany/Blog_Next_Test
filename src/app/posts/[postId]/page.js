import React from 'react'

async function page({params}) {
  console.log(params)      
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000)
  })  

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
        next: {
            revalidate: 120,
        }
    }
  );
  const post = await response.json();

  return (
    <div>
        <div
          style={{ background: "white", color: "black", borderRadius: "10px", margin: "20px auto", padding: "20px 40px", width: "90%" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>

        </div>
    </div>
  )
}

export default page