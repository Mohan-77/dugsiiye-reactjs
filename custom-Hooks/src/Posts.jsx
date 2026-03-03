import React from 'react'
import useFetch from './useFetch'
export default function Posts() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
        {data && data.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}
