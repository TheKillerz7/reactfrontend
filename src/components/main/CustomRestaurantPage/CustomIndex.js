import Check from '../../../assets/svgs/Check'
import React, { useState } from 'react'
import Restaurant from './Custom/Restaurant'
import Character from './Custom/Character'
import Menus from './Custom/Menus'

const Home = ({ index, setIndex }) => {
    const [steps, setStep] = useState(0)
    
    return(
        <div className={"absolute transition duration-500 left-0 top-0 w-full transform h-full bg-white " + (index !== "custom" && "translate-x-full" || "translate-x-0")}>
            <StepComponent setIndex={setIndex} setStep={setStep} steps={steps} />
            <div className="relative flex overflow-hidden" style={{ width: "300%" }}>
                <Restaurant steps={steps} setStep={setStep} />
                <Restaurant steps={steps} setStep={setStep} />
                <Restaurant steps={steps} setStep={setStep} />
                {/* <Character steps={steps} setStep={setStep} />
                <Menus steps={steps} setStep={setStep} /> */}
            </div>
        </div>
    )
}

export default Home

const StepComponent = ({ setIndex, steps, setStep }) => {
    let i = steps
    i--

    return(
        <div className="px-5">
            <div onClick={() => (steps === 0 ? setIndex('home') : setStep(i))} className="font-semibold text-xs flex items-center my-5"><span className="text-lg mr-3 pb-1">{"<"} </span>เลือกร้านค้า</div>
            <div className="step grid grid-cols-3">
                <div className="restaurant">
                    <div className="w-full relative flex justify-center items-center">
                        <div className="w-8 h-8 z-10 bg-lightGreen flex justify-center items-center relative rounded-full">
                            <div className="w-4 h-4 bg-pGreen rounded-full"></div>
                            <Check ClassName="absolute w-2 h-2" color="white" />
                        </div>
                        <span className="h-0.5 w-full overflow-hidden absolute bg-gray-300 transform translate-x-1/2 right-0">
                            <span className={"h-0.5 w-full transform transition duration-500 absolute bg-pGreen right-0 " + (steps > 0 && "translate-x-0" || "-translate-x-full")}></span>
                        </span>
                    </div>
                    <div className="text-xs mt-3 text-center text-green-700 font-semibold">เลือกธีมตกแต่งร้าน</div>
                </div>
                <div className="character">
                    <div className="w-full relative flex justify-center items-center">
                        <div className={"w-8 h-8 z-10 flex justify-center items-center relative rounded-full transition duration-300 " + (steps < 1 && "bg-gray-100" || "bg-lightGreen")}>
                            <div className={"w-4 h-4 rounded-full transition duration-300 " + (steps < 1 && "bg-gray-300" || "bg-pGreen")}></div>
                            <Check ClassName={"absolute w-2 h-2 transition duration-300 " + (steps < 1 && "opacity-0")} color="white" />
                        </div>
                        <span className="h-0.5 w-full overflow-hidden absolute bg-gray-300 transform translate-x-1/2 right-0">
                            <span className={"h-0.5 w-full transform transition duration-500 absolute bg-pGreen right-0 " + (steps > 1 && "translate-x-0" || "-translate-x-full")}></span>
                        </span>
                    </div>
                    <div className={"text-xs mt-3 text-center font-semibold transition duration-300 " + (steps < 1  && "text-gray-400" || "text-green-700")}>เลือกตัวละคร</div>
                </div>
                <div className="food-menu">
                    <div className="w-full relative flex justify-center items-center">
                        <div className={"w-8 h-8 z-10 flex justify-center items-center relative rounded-full transition duration-300 " + (steps < 2 && "bg-gray-100" || "bg-lightGreen")}>
                            <div className={"w-4 h-4 rounded-full transition duration-300 " + (steps < 2 && "bg-gray-300" || "bg-pGreen")}></div>
                            <Check ClassName={"absolute w-2 h-2 transition duration-300 " + (steps < 2 && "opacity-0")} color="white" />
                        </div>
                    </div>
                    <div className={"text-xs mt-3 text-center font-semibold transition duration-300 " + (steps < 2  && "text-gray-400" || "text-green-700")}>เลือกอาหาร</div>
                </div>
            </div>
        </div>
    )
}