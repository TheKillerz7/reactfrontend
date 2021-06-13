import decoration from '../../../assets/imgs/background-dec.png'
import decoration_mobile from '../../../assets/imgs/background-dec-mobile.png'
import background_1 from '../../../assets/imgs/background-1.png'
import restaurant from '../../../assets/imgs/restaurant.png'
import character from '../../../assets/imgs/character.png'
import React, { useState, useEffect } from 'react'

const Home = ({ index, setIndex, customHeight }) => {
    const [rerender, setRerender] = useState('')
    const styleObject = {
        home: `${rerender}px`,
        custom: `${customHeight?.current?.offsetHeight}px`
    }

    useEffect(() => {
        setTimeout(() => {
            setRerender(document.querySelector('.home-container').clientHeight)
        }, 1);
    }, [])

    return(
        <div className={"home-container lg:h-auto pb-10 transition-all duration-300 " + (index == "home" && "delay-300")} style={{ height: `${customHeight?.current?.offsetHeight}px`, maxHeight: (styleObject[index]) }}>
            <img className="lg:block w-full object-cover hidden left-0 -top-5 absolute" className="absolute top-0 laft-0" src={decoration} style={{ zIndex: '-1' }} />
            <img className="lg:hidden h-80 object-cover left-1/2 transform -translate-x-1/2 top-5 absolute" src={decoration_mobile} />
            <div className="xl:px-10 lg:grid lg:grid-cols-2 lg:pt-20 lg:gap-16 lg:px-20 px-5 mx-auto relative" style={{ maxWidth: "1000px" }}>
                <div className="lg:p-0 pt-10 pb-5 mb-5 z-10">
                    <div className="lg:w-96 lg:h-96 lg:bg-green-900 lg:bg-opacity-10 relative rounded-full flex mx-auto w-80 h-80">
                        <div className="lg:hidden absolute overflow-hidden rounded-full top-3 left-0 w-full h-full">
                            <img className="absolute pb w-full top-0 left-0" src={background_1} />
                            <img className="absolute pb w-full -bottom-10 -left-48" src={restaurant} />
                            <img className="absolute pb h-4/6 bottom-0 left-20" src={character} />
                        </div>
                        <div className="lg:text-8xl lg:p-0 pl-10 text-7xl pt-3 text-gray-500">3</div>
                        <div className="lg:text-2xl text-xl text-gray-400 font-medium">ขั้นตอนง่าย ๆ<br/>ในการเปิดแฟรนไชส์</div>
                    </div>
                </div>
                <div className="lg:flex lg:flex-col lg:justify-end lg:pb-16">
                    <p className="lg:text-sm text-xs text-gray-400 mb-7">Lorem iqrun isd rqu rudct<br/>Lorem iqrun isd rqu rudctLorem iqrun isd rqu rudct</p>
                    <div className="lg:grid-cols-3 grid grid-cols-2 gap-x-2 gap-y-4 items-center justify-start mb-10">
                        <div className="lg:py-5 shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                            <div className="">
                                <p className="lg:text-sm lg:-mb-1 text-xs text-gray-500">เลือก</p>
                                <p className="lg:text-smaller text-sm font-medium text-gray-500">ตกแต่งร้าน</p>
                            </div>
                            <div className="w-7 h-7 bg-gray-400"></div>
                        </div>
                        <div className="lg:py-5 shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                            <div className="">
                                <p className="lg:text-sm lg:-mb-1 text-xs text-gray-500">เลือก</p>
                                <p className="lg:text-smaller text-sm font-medium text-gray-500">ตัวละคร</p>
                            </div>
                            <div className="w-7 h-7 bg-gray-400"></div>
                        </div>
                        <div className="lg:py-5 shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                            <div className="">
                                <p className="lg:text-sm lg:-mb-1 text-xs text-gray-500">เลือก</p>
                                <p className="lg:text-smaller text-sm font-medium text-gray-500">อาหาร</p>
                            </div>
                            <div className="w-7 h-7 bg-gray-400"></div>
                        </div>
                    </div>
                    <button onClick={() => setIndex("custom")} className="lg:text-lg lg:bg-orange py-3 self-end bg-yellow-600 text-white text-xs font-medium rounded-full px-7">Get Started &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default Home