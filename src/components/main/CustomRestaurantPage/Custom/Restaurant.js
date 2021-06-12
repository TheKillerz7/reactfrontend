import background_1 from '../../../../assets/imgs/background-1.png'
import restaurant from '../../../../assets/imgs/restaurant.png'

const Restaurant = ({ steps, setStep }) => {
    return(
        <div className="lg:px-36 md:w-full px-5 transition duration-300" style={{ transform: (`translateX(-${100*steps}%)`) }}>
            <div className="md:px-20 text-gray-500 mb-12">
                <h2 className="font-semibold text-gray-400 mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                <p className="text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
            </div>
            <div className="md:px-20 flex flex-col items-center justify-center">
                <div className="text-gray-500 mb-2">ร้านค้า</div>
                <div className="md:h-80 relative w-full flex justify-center">
                    <div className="md:h-64 h-36 overflow-hidden mb-10">
                        <div className="md:w-80 md:h-80 overflow-hidden w-48 h-48 bg-gray-200 rounded-full relative">
                            <img className="lg:bottom-16 w-full h-5/6 absolute bottom-12" src={background_1} />
                            <img className="lg:left-12 md:left-14 w-9/12 absolute bottom-8 left-9" src={restaurant} />
                        </div>
                    </div>
                    <span className="absolute transform -translate-y-1/2 left-5 top-1/2 text-4xl font-light">{"<"}</span>
                    <span className="absolute transform -translate-y-1/2 right-5 top-1/2 text-4xl font-light">{">"}</span>
                </div>
                <div className="w-full mb-8">
                    <div className="mb-3 text-gray-500">เลือกพื้นหลัง</div>
                    <div className="flex items-center justify-between">
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg bg-gray-400 w-10 h-10"></div>
                    </div>
                </div>
                <button onClick={() => {
                    let i = steps
                    i++
                    setStep(i)
                }}
                    className="bg-orange bg-opacity-90 text-white px-16 py-2 rounded-lg font-semibold"
                >
                    ขั้นตอนต่อไป
                </button>
            </div>
        </div>
    )
}

export default Restaurant