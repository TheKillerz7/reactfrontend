import Home from '../../components/main/CustomRestaurantPage/Home'
import CustomIndex from '../../components/main/CustomRestaurantPage/CustomIndex'
import React, { useState } from 'react'

const HomePage = () => {
    const [index, setIndex] = useState('home')

    return(
        <div className="relative">
            <Home index={index} setIndex={setIndex} />
            <CustomIndex index={index} setIndex={setIndex} />
        </div>
    )
}

export default HomePage