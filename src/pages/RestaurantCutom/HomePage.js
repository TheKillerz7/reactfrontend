import Home from '../../components/main/CustomRestaurantPage/Home'
import CustomIndex from '../../components/main/CustomRestaurantPage/CustomIndex'
import React, { useState, useRef, useEffect } from 'react'

const HomePage = () => {
    const [index, setIndex] = useState('home')
    const [heightState, setHeightState] = useState(0)

    const height = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setHeightState(height)
            console.log(height)
        }, 2);
    }, [])

    return(
        <div className="tw-relative">
            <Home customHeight={heightState} index={index} setIndex={setIndex} />
            <CustomIndex refs={height} index={index} setIndex={setIndex} />
        </div>
    )
}

export default HomePage