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
        <div className={"home-container lg:tw-h-auto tw-pb-10 tw-transition-all tw-duration-300 " + (index == "home" && "tw-delay-300")} style={{ height: `${customHeight?.current?.offsetHeight}px`, maxHeight: (styleObject[index]) }}>
            <img className="lg:tw-block tw-w-full tw-object-cover tw-hidden tw-left-0 tw--top-5 tw-absolute" src={decoration} style={{ zIndex: '-1' }} />
            <img className="lg:tw-hidden tw-h-80 tw-object-cover tw-left-1/2 tw-transform tw--translate-x-1/2 tw-top-5 tw-absolute" src={decoration_mobile} />
            <div className="xl:tw-px-10 lg:tw-grid lg:tw-grid-cols-2 lg:tw-pt-20 lg:tw-gap-16 lg:tw-px-20 tw-px-5 tw-mx-auto tw-relative" style={{ maxWidth: "1000px" }}>
                <div className="lg:tw-p-0 tw-pt-10 tw-pb-5 tw-mb-5 tw-z-10">
                    <div className="lg:tw-w-96 lg:tw-h-96 lg:tw-bg-green-900 lg:tw-bg-opacity-10 tw-relative tw-rounded-full tw-flex tw-mx-auto tw-w-80 tw-h-80">
                        <div className="lg:tw-hidden tw-absolute tw-overflow-hidden tw-rounded-full tw-top-3 tw-left-0 tw-w-full tw-h-full">
                            <img className="tw-absolute tw-pb tw-w-full tw-top-0 tw-left-0" src={background_1} />
                            <img className="tw-absolute tw-pb tw-w-full tw--bottom-10 tw--left-48" src={restaurant} />
                            <img className="tw-absolute tw-pb tw-h-4/6 tw-bottom-0 tw-left-20" src={character} />
                        </div>
                        <div className="lg:tw-text-8xl lg:tw-p-0 tw-pl-10 tw-text-7xl tw-pt-3 tw-text-gray-500">3</div>
                        <div className="lg:tw-text-2xl tw-text-xl tw-text-gray-400 tw-font-medium">ขั้นตอนง่าย ๆ<br/>ในการเปิดแฟรนไชส์</div>
                    </div>
                </div>
                <div className="lg:tw-flex lg:tw-flex-col lg:tw-justify-end lg:tw-pb-16">
                    <p className="lg:tw-text-sm tw-text-xs tw-text-gray-400 tw-mb-7">Lorem iqrun isd rqu rudct<br/>Lorem iqrun isd rqu rudctLorem iqrun isd rqu rudct</p>
                    <div className="lg:tw-grid-cols-3 tw-grid tw-grid-cols-2 tw-gap-x-2 tw-gap-y-4 tw-items-center tw-justify-start tw-mb-10">
                        <div className="lg:tw-py-5 tw-shadow-md tw-ounded-lg tw-px-5 tw-py-8 tw-flex tw-items-center tw-justify-between">
                            <div className="">
                                <p className="lg:tw-text-sm lg:tw--mb-1 tw-text-xs tw-text-gray-500">เลือก</p>
                                <p className="lg:tw-text-smaller tw-text-sm tw-font-medium tw-text-gray-500">ตกแต่งร้าน</p>
                            </div>
                            <div className="tw-w-7 tw-h-7 tw-bg-gray-400"></div>
                        </div>
                        <div className="lg:tw-py-5 tw-shadow-md tw-rounded-lg tw-px-5 tw-py-8 tw-flex tw-items-center tw-justify-between">
                            <div className="">
                                <p className="lg:tw-text-sm lg:tw--mb-1 tw-text-xs tw-text-gray-500">เลือก</p>
                                <p className="lg:tw-text-smaller tw-text-sm tw-font-medium tw-text-gray-500">ตัวละคร</p>
                            </div>
                            <div className="tw-w-7 tw-h-7 tw-bg-gray-400"></div>
                        </div>
                        <div className="lg:tw-py-5 tw-shadow-md tw-rounded-lg tw-px-5 tw-py-8 tw-flex tw-items-center tw-justify-between">
                            <div className="">
                                <p className="lg:tw-text-sm lg:tw--mb-1 tw-text-xs tw-text-gray-500">เลือก</p>
                                <p className="lg:tw-text-smaller tw-text-sm tw-font-medium tw-text-gray-500">อาหาร</p>
                            </div>
                            <div className="tw-w-7 tw-h-7 tw-bg-gray-400"></div>
                        </div>
                    </div>
                    <button onClick={() => setIndex("custom")} className="lg:tw-text-lg lg:tw-bg-orange tw-py-3 tw-self-end tw-bg-yellow-600 tw-text-white tw-text-xs tw-font-medium tw-rounded-full tw-px-7">Get Started &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default Home