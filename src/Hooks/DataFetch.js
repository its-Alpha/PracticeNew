import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data)
            setPost(res.data)
        })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                posts.map((post) => (
                    <h1>{post.title}</h1>
                ))
            }
        </>
    )
}

export default DataFetch