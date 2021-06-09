import Check from '../../assets/svgs/Check'

const Status = ({ order }) => {
    const status = {
        new: 1,
        pending: 2,
        shipping: 3,
        success: 4
    }

    return(
        <div className="status-container lg:mb-5 lg:shadow-none lg:border-2 lg:border-gray-200 lg:py-5 shadow-md px-8 py-8 bg-white">
            <div className="code lg:items-start flex flex-col items-center justify-center mb-8">
                <div className="lg:text-sm mb-4 font-medium">คำสั่งซื้อ <span className="lg:text-gray-500 lg:text-base text-green-600 text-2xl ml-2">{order.code}</span></div>
                <div className="lg:hidden font-medium">สถานะการสั่งซื้อ</div>
            </div>
            <div className="status xl:px-24 lg:text-center lg:px-8 lg:grid lg:grid-cols-4 lg:items-start lg:justify-around">
                <div className="new lg:flex lg:mb-3 lg:flex-col grid items-center justify-start gap-6 mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:mb-2 w-full relative flex items-center justify-center">
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-0 lg:border-none lg:bg-pGreen lg:h-0.5 w-0.5 h-1/2 absolute border border-dashed border-pGreen transform -translate-x-1/2 -translate-y-0 top-full left-1/2" ></span>
                        <div className="icon lg:mr-0 lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center relative w-16 h-16 bg-lightGreen rounded-full z-10">
                            <div className="lg:block hidden w-5 h-5 rounded-full bg-pGreen"></div>
                            <Check ClassName="lg:block absolute w-3 h-3 hidden" color="white" />
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:text-xs text-xl text-green-700 font-semibold">คำสั่งซื้อใหม่</div>
                        <div className="date lg:text-smaller text-gray-400 font-medium text-sm">30/12/2563 - 10.00</div>
                    </div>
                </div>
                <div className="pending lg:flex lg:mb-3 lg:flex-col grid items-center justify-start gap-6 mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:mb-2 w-full relative flex items-center justify-center">
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-0 lg:border-none lg:bg-gray-100 lg:h-0.5 a w-0.5 h-1/2 absolute border border-dashed border-gray-100 transform -translate-x-1/2 -translate-y-0 top-full left-1/2" ></span>
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-full lg:border-none lg:bg-pGreen lg:h-0.5 w-0.5 h-1/2 absolute border border-dashed border-pGreen transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2"></span>
                        <div className="icon lg:mr-0 lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center relative w-16 h-16 bg-lightGreen rounded-full z-10">
                            <div className="lg:block hidden w-5 h-5 rounded-full bg-pGreen"></div>
                            <Check ClassName="lg:block absolute w-3 h-3 hidden" color="white" />
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:text-xs text-xl text-green-700 font-semibold">ร้านค้ากำลังเตรียมอาหาร</div>
                        <div className="date lg:text-smaller text-gray-400 font-medium text-sm">30/12/2563 - 10.00</div>
                    </div>
                </div>
                <div className="shipping lg:flex lg:mb-3 lg:flex-col grid items-center justify-start gap-6 mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:mb-2 w-full relative flex items-center justify-center">
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-0 lg:border-none lg:bg-gray-100 lg:h-0.5 a w-0.5 h-1/2 absolute border border-dashed border-gray-100 transform-translate-x-1/2 -translate-y-0 top-full left-1/2" ></span>
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-full lg:border-none lg:bg-gray-100 lg:h-0.5 a w-0.5 h-1/2 absolute border border-dashed border-gray-100 transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2"></span>
                        <div className="icon lg:mr-0 lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center relative w-16 h-16 bg-gray-100 rounded-full z-10">
                            <div className="lg:block hidden w-5 h-5 rounded-full bg-gray-300"></div>
                            {/* <img src={check} className="w-3 h-3 absolute" /> */}
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:text-xs text-xl text-gray-400 font-semibold">อยู่ระหว่างการจัดส่ง</div>
                        <div className="date lg:text-smaller text-gray-400 font-medium text-sm"></div>
                    </div>
                </div>
                <div className="success lg:flex lg:flex-col grid items-center justify-start gap-6" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:mb-2 w-full relative flex items-center justify-center">
                        <span className="lg:w-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-translate-x-full lg:border-none lg:bg-gray-100 lg:h-0.5 a w-0.5 h-1/2 absolute border border-dashed border-gray-100 transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2"></span>
                        <div className="icon lg:mr-0 lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center relative w-16 h-16 bg-gray-100 rounded-full z-10">
                            <div className="lg:block hidden w-5 h-5 rounded-full bg-gray-300"></div>
                            {/* <img src={check} className="w-3 h-3 absolute" /> */}
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:text-xs text-xl text-gray-400 font-semibold">สำเร็จ</div>
                        <div className="date lg:text-smaller text-gray-400 font-medium text-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Status