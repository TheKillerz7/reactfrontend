import character from '../../../../assets/imgs/character.png'
import React, { useState } from 'react'

const Character = ({ index, setIndex, steps, setStep }) => {
    const [customizing, setCustomizing] = useState([false, ""])

    return(
        <div className="lg:tw-px-36 md:tw-w-full tw-px-5 tw-transition tw-duration-300" style={{ transform: (`translateX(-${100*steps}%)`) }}>
            <div className="xl:tw-w-3/12 xl:tw-hidden xl:tw-absolute xl:tw-left-5 md:tw-px-20 tw-text-gray-500 tw-mb-12">
                <h2 className="tw-font-semibold tw-text-gray-400 tw-mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                <p className="tw-text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
            </div>
            <div className="xl:tw-px-56 xl:tw-mx-auto md:tw-px-20 tw-h-full tw-relative tw-flex tw-flex-col tw-items-center tw-justify-start" style={{ maxWidth: "1000px" }}>
                <div className="xl:tw-w-5/12 xl:tw-absolute xl:tw-block xl:tw-top-0 xl:tw--left-32 md:tw-px-20 tw-hidden tw-text-gray-500 tw-mb-12">
                    <h2 className="tw-font-semibold tw-text-gray-400 tw-mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                    <p className="tw-text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
                </div>
                <div className="lg:tw-justify-center lg:tw-mb-16 lg:tw-h-auto tw-flex tw-relative tw-w-full tw-h-80 tw-justify-between tw-items-start">
                    <span className={"lg:tw-left-10 tw-absolute tw-transform tw--translate-y-1/2 tw--left-0 tw-top-1/2 tw-text-4xl tw-cursor-pointer tw-transition tw-duration-300 tw-font-light " + (customizing[0] && "tw-opacity-100 tw-delay-200" || "tw-opacity-0")}>{"<"}</span>
                    <span className={"lg:tw-right-10 tw-absolute tw-transform tw--translate-y-1/2 tw--right-0 tw-top-1/2 tw-text-4xl tw-cursor-pointer tw-transition tw-duration-300 tw-font-light " + (customizing[0] && "tw-opacity-100 tw-delay-200" || "tw-opacity-0")}>{">"}</span>
                    <div className="lg:tw-absolute lg:tw-left-0 tw--left-28">
                        <div onClick={() => setCustomizing([false, customizing[1]])} className={"tw-absolute tw--top-5 tw-left-0 tw-font-semibold tw-text-sm tw-cursor-pointer tw-flex tw-transition tw-duration-300 tw-items-center tw-my-5 " + (customizing[0] && "tw-opacity-100 tw-delay-200" || "tw-opacity-0 tw-pointer-events-none")}><span className="xl:tw-text-2xl xl:tw-pb-0 tw-text-lg tw-mr-3 tw-pb-1">{"<"} </span>{customizing[1]}</div>
                        <div onClick={() => setCustomizing([true, "หัว"])} className={"tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-transition tw-duration-300 tw-mb-5 " + (customizing[0] && "tw-opacity-0 tw-pointer-events-none" || "tw-delay-200")}>
                            <div className="lg:tw-w-14 lg:tw-h-14 tw-w-10 tw-h-10 tw-bg-gray-400 tw-rounded-full"></div>
                            <div className="tw-text-gray-500 tw-ml-3">หัว</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "ตัว"])} className={"tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-transition tw-duration-300 tw-mb-5 " + (customizing[0] && "tw-opacity-0 tw-pointer-events-none" || "tw-delay-200")}>
                            <div className="lg:tw-w-14 lg:tw-h-14 tw-w-10 tw-h-10 tw-bg-gray-400 tw-rounded-full"></div>
                            <div className="tw-text-gray-500 tw-ml-3">ตัว</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "ขา"])} className={"tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-transition tw-duration-300 tw-mb-5 " + (customizing[0] && "tw-opacity-0 tw-pointer-events-none" || "tw-delay-200")}>
                            <div className="lg:tw-w-14 lg:tw-h-14 tw-w-10 tw-h-10 tw-bg-gray-400 tw-rounded-full"></div>
                            <div className="tw-text-gray-500 tw-ml-3">ขา</div>
                        </div>
                        <div onClick={() => setCustomizing([true, "เท้า"])} className={"tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-transition tw-duration-300 " + (customizing[0] && "tw-opacity-0 tw-pointer-events-none" || "tw-delay-200")}>
                            <div className="lg:tw-w-14 lg:tw-h-14 tw-w-10 tw-h-10 tw-bg-gray-400 tw-rounded-full"></div>
                            <div className="tw-text-gray-500 tw-ml-3">เท้า</div>
                        </div>
                    </div>
                    <div></div>
                    <img className={"lg:tw-w-36 lg:tw-static tw-h-full tw-pb-10 tw-mr-5 lg:tw-transform-none tw-transition tw-duration-300 tw-transform " + (customizing[0] && "tw-absolute tw--translate-x-1/2 tw-left-1/2")} src={character} />
                </div>

                <button onClick={() => {
                    let i = steps
                    i++
                    setStep(i)
                }}
                    className="lg:tw-px-36 tw-bg-orange tw-bg-opacity-90 tw-text-white tw-px-16 tw-py-2 tw-rounded-lg tw-font-semibold"
                >
                    ขั้นตอนต่อไป
                </button>
            </div>
        </div>
    )
}

export default Character