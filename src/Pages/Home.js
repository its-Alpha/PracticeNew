import React from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
import IncrementDecrement from '../Hooks/IncrementDecrement'
import Effect from '../Hooks/Effect'
import DataFetch from '../Hooks/DataFetch'

const Home = () => {
    return (
        <div>

            <Slider />
            <Card />
            <IncrementDecrement />
            <Effect />
            <DataFetch />
        </div>
    )
}

export default Home