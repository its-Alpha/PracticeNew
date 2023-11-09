import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(1)
    const [num, setNum] = useState(5)

    useEffect(() => {
        alert('This is a page effect')
    },[])

    return (
        <>
            <h2>{count}</h2>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increase by 1</button>
            <hr />
            <h2>{num}</h2>
            <button className='btn btn-secondary' onClick={() => setNum(num + 3)}>Increase by 3</button>
        </>
    )
}

export default Effect