import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [number, setNumber] = useState(1)
    // const increase = () => (
    //     setNumber(number + 1)
    // )
    const decrease = () => (
        setNumber(number - 1)
    )
    return (
        <div>
            <h2 className='text-center'>{number}</h2>
            <center>
                {number < 10 &&
                    <button className='btn btn-primary' onClick={() => (setNumber(number + 1))}>Click to Increment</button> 
              }
                &nbsp;
                {
                    number > 1 &&
                    <button className='btn btn-danger' onClick={() => (setNumber(number - 1))}>Click to Decrement</button>
                }

            </center>

        </div>
    )
}

export default IncrementDecrement