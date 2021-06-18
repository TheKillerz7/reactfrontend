import Check from '../../../assets/svgs/Check'
import React, { useState } from 'react'
import Restaurant from './Custom/Restaurant'
import Character from './Custom/Character'
import Menus from './Custom/Menus'

const Home = ({ index, setIndex, refs }) => {
    const [steps, setStep] = useState(0)
    
    return(
        <div ref={refs} className={"lg:tw-h-auto tw-absolute tw-z-20 tw-h-full tw-transition tw-duration-500 tw-left-0 tw-top-0 tw-w-full tw-transform tw-bg-white tw-pb-16 " + (index !== "custom" && "tw-translate-x-full" || "tw-translate-x-0 tw-delay-200")}>
            <StepComponent setIndex={setIndex} setStep={setStep} steps={steps} />
            <div className="tw-relative tw-grid tw-grid-cols-3 tw-overflow-hidden" style={{ width: "300%" }}>
                <Restaurant steps={steps} setStep={setStep} />
                <Character steps={steps} setStep={setStep} />
                <Menus steps={steps} setStep={setStep} />
            </div>
        </div>
    )
}

export default Home

const StepComponent = ({ setIndex, steps, setStep }) => {
    const currentStep = ["หน้าหลัก", "เลือกร้านค้า", "เลือกตัวละคร"]
    let i = steps
    i--

    return(
        <div className="xl:tw-mt-10 xl:tw-relative lg:tw-px-56 tw-mx-auto tw-mb-10 tw-px-5" style={{ maxWidth: "1000px" }}>
            <div onClick={() => (steps === 0 ? setIndex('home') : setStep(i))} className="xl:tw-absolute xl:tw-top-0 xl:tw-mt-0 xl:tw--left-0 xl:tw-text-lg tw-font-semibold tw-text-xs tw-cursor-pointer tw-flex tw-items-center tw-my-5"><span className="xl:tw-text-2xl xl:tw-pb-0 tw-text-lg tw-mr-3 tw-pb-1">{"<"} </span>{currentStep[steps]}</div>
            <div className="step tw-grid tw-grid-cols-3">
                <div className="restaurant">
                    <div className="tw-w-full tw-relative tw-flex tw-justify-center tw-items-center">
                        <div className="tw-w-8 tw-h-8 tw-z-10 tw-bg-lightGreen tw-flex tw-justify-center tw-items-center tw-relative tw-rounded-full">
                            <div className="tw-w-4 tw-h-4 tw-bg-pGreen tw-rounded-full"></div>
                            <Check ClassName="tw-absolute tw-w-2 tw-h-2" color="white" />
                        </div>
                        <span className="tw-h-0.5 tw-w-full tw-overflow-hidden tw-absolute tw-bg-gray-300 tw-transform tw-translate-x-1/2 tw-right-0">
                            <span className={"tw-h-0.5 tw-w-full tw-transform tw-transition tw-duration-500 tw-absolute tw-bg-pGreen tw-right-0 " + (steps > 0 && "tw-translate-x-0" || "tw--translate-x-full")}></span>
                        </span>
                    </div>
                    <div className="tw-text-xs tw-mt-3 tw-text-center tw-text-green-700 tw-font-semibold">เลือกธีมตกแต่งร้าน</div>
                </div>
                <div className="character">
                    <div className="tw-w-full tw-relative tw-flex tw-justify-center tw-items-center">
                        <div className={"tw-w-8 tw-h-8 tw-z-10 tw-flex tw-justify-center tw-items-center tw-relative tw-rounded-full tw-transition tw-duration-300 " + (steps < 1 && "tw-bg-gray-100" || "tw-bg-lightGreen")}>
                            <div className={"tw-w-4 tw-h-4 tw-rounded-full tw-transition tw-duration-300 " + (steps < 1 && "tw-bg-gray-300" || "tw-bg-pGreen")}></div>
                            <Check ClassName={"tw-absolute tw-w-2 tw-h-2 tw-transition tw-duration-300 " + (steps < 1 && "tw-opacity-0")} color="white" />
                        </div>
                        <span className="tw-h-0.5 tw-w-full tw-overflow-hidden tw-absolute tw-bg-gray-300 tw-transform tw-translate-x-1/2 tw-right-0">
                            <span className={"tw-h-0.5 tw-w-full tw-transform tw-transition tw-duration-500 tw-absolute tw-bg-pGreen tw-right-0 " + (steps > 1 && "tw-translate-x-0" || "tw--translate-x-full")}></span>
                        </span>
                    </div>
                    <div className={"tw-text-xs tw-mt-3 tw-text-center tw-font-semibold tw-transition tw-duration-300 " + (steps < 1  && "tw-text-gray-400" || "tw-text-green-700")}>เลือกตัวละคร</div>
                </div>
                <div className="food-menu">
                    <div className="tw-w-full tw-relative tw-flex tw-justify-center tw-items-center">
                        <div className={"tw-w-8 tw-h-8 tw-z-10 tw-flex tw-justify-center tw-items-center tw-relative tw-rounded-full tw-transition tw-duration-300 " + (steps < 2 && "tw-bg-gray-100" || "tw-bg-lightGreen")}>
                            <div className={"tw-w-4 tw-h-4 tw-rounded-full tw-transition tw-duration-300 " + (steps < 2 && "tw-bg-gray-300" || "tw-bg-pGreen")}></div>
                            <Check ClassName={"tw-absolute tw-w-2 tw-h-2 tw-transition tw-duration-300 " + (steps < 2 && "tw-opacity-0")} color="white" />
                        </div>
                    </div>
                    <div className={"tw-text-xs tw-mt-3 tw-text-center tw-font-semibold tw-transition tw-duration-300 " + (steps < 2  && "tw-text-gray-400" || "tw-text-green-700")}>เลือกอาหาร</div>
                </div>
            </div>
        </div>
    )
}