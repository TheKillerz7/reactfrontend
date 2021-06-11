const Restaurant = ({ steps, setStep }) => {
    return(
        <div className={"mt-12 px-5 transition duration-300" } style={{ transform: (`translateX(-${100*steps}%)`) }}>
            <div className="text-gray-500 mb-12">
                <h2 className="font-semibold text-gray-400 mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                <p className="text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-gray-500 mb-2">ร้านค้า</div>
                <div className="relative w-full flex justify-center" style={{ height: "200px" }}>
                    <div className="overflow-hidden" style={{ height: "160px" }}>
                        <div className="bg-gray-400 rounded-full relative" style={{ width: "200px", height: "200px" }}></div>
                    </div>
                    <span className="absolute transform -translate-y-1/2 left-5 top-1/2 text-4xl font-light">{"<"}</span>
                    <span className="absolute transform -translate-y-1/2 right-5 top-1/2 text-4xl font-light">{">"}</span>
                </div>
                <div className="w-full mb-8">
                    <div className="mb-3 text-gray-500">เลือกพื้นหลัง</div>
                    <div className="flex items-center justify-between">
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
                        <div className="rounded-lg bg-gray-400 w-10 h-10"></div>
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