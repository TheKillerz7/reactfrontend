import character from '../../../../assets/imgs/character.png'
import React, { useState } from 'react'

const Character = ({ index, setIndex, steps, setStep }) => {
    const [customizing, setCustomizing] = useState([false, ""])

    return(
        <div className="lg:px-36 md:w-full px-5 transition duration-300" style={{ transform: (`translateX(-${100*steps}%)`) }}>
            <div className="xl:w-3/12 xl:hidden xl:absolute xl:left-5 md:px-20 text-gray-500 mb-12">
                <h2 className="font-semibold text-gray-400 mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                <p className="text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
            </div>
            <div className="xl:px-56 xl:mx-auto md:px-20 h-full relative flex flex-col items-center justify-start" style={{ maxWidth: "1000px" }}>
                <div className="xl:w-5/12 xl:absolute xl:block xl:top-0 xl:-left-32 md:px-20 hidden text-gray-500 mb-12">
                    <h2 className="font-semibold text-gray-400 mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                    <p className="text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
                </div>
                <div className="lg:justify-center lg:mb-16 lg:h-auto flex relative w-full h-80 justify-between items-start">
                    <span className={"lg:left-10 absolute transform -translate-y-1/2 -left-0 top-1/2 text-4xl cursor-pointer transition duration-300 font-light " + (customizing[0] && "opacity-100 delay-200" || "opacity-0")}>{"<"}</span>
                    <span className={"lg:right-10  absolute transform -translate-y-1/2 -right-0 top-1/2 text-4xl cursor-pointer transition duration-300 font-light " + (customizing[0] && "opacity-100 delay-200" || "opacity-0")}>{">"}</span>
                    <div className="lg:absolute lg:left-0 -left-28">
                        <div onClick={() => setCustomizing([false, customizing[1]])} className={"absolute -top-5 left-0 font-semibold text-sm cursor-pointer flex transition duration-300 items-center my-5 " + (customizing[0] && "opacity-100 delay-200" || "opacity-0 pointer-events-none")}><span className="xl:text-2xl xl:pb-0 text-lg mr-3 pb-1">{"<"} </span>{customizing[1]}</div>
                        <div onClick={() => setCustomizing([true, "หัว"])} className={"cursor-pointer flex items-center justify-center transition duration-300 mb-5 " + (customizing[0] && "opacity-0 pointer-events-none" || "delay-200")}>
                            <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-400 rounded-full"></div>
                            <div className="text-gray-500 ml-3">หัว</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "ตัว"])} className={"cursor-pointer flex items-center justify-center transition duration-300 mb-5 " + (customizing[0] && "opacity-0 pointer-events-none" || "delay-200")}>
                            <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-400 rounded-full"></div>
                            <div className="text-gray-500 ml-3">ตัว</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "ขา"])} className={"cursor-pointer flex items-center justify-center transition duration-300 mb-5 " + (customizing[0] && "opacity-0 pointer-events-none" || "delay-200")}>
                            <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-400 rounded-full"></div>
                            <div className="text-gray-500 ml-3">ขา</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "เท้า"])} className={"cursor-pointer flex items-center justify-center transition duration-300 " + (customizing[0] && "opacity-0 pointer-events-none" || "delay-200")}>
                            <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gray-400 rounded-full"></div>
                            <div className="text-gray-500 ml-3">เท้า</div>
                        </div>
                    </div>
                    <div></div>
                    <img className={"lg:w-36 lg:static h-full pb-10 mr-5 lg:transform-none transition duration-300 transform " + (customizing[0] && "absolute -translate-x-1/2 left-1/2")} src={character} />
                </div>

                <button onClick={() => {
                    let i = steps
                    i++
                    setStep(i)
                }}
                    className="lg:px-36 bg-orange bg-opacity-90 text-white px-16 py-2 rounded-lg font-semibold"
                >
                    ขั้นตอนต่อไป
                </button>
            </div>
        </div>
    )
}

export default Character