"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setTodos(result);
    }

    fetchTodos();
  }, []);
  
  return (
    <div>
      {todos.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <div
            key={post.id}
            style={{ background: "white", color: "black", borderRadius: "10px", margin: "20px auto", padding: "20px", width: "70%" }}
          >
            <h3>{post.title.substr(0, 22)}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Todos;
