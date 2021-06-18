import Check from '../../../assets/svgs/Check'

const Status = ({ order }) => {

    //A logic for order status
    const status = {
        new: 1,
        pending: 2,
        shipping: 3,
        success: 4
    }

    return(
        <div className="status-container lg:tw-mb-5 lg:tw-shadow-none lg:tw-border-2 lg:tw-border-gray-200 lg:tw-py-5 tw-shadow-md tw-px-8 tw-py-8 tw-bg-white">
            <div className="code lg:tw-items-start tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-8">
                <div className="lg:tw-text-sm mb-4 tw-font-medium">คำสั่งซื้อ <span className="lg:tw-text-gray-500 lg:tw-text-base tw-text-green-600 tw-text-2xl tw-ml-2">{order.code}</span></div>
                <div className="lg:tw-hidden tw-font-medium">สถานะการสั่งซื้อ</div>
            </div>
            <div className="status xl:tw-px-24 lg:tw-text-center lg:tw-px-8 lg:tw-grid lg:tw-grid-cols-4 lg:tw-items-start lg:tw-justify-around">
                <div className="new lg:tw-flex lg:tw-mb-3 lg:tw-flex-col tw-grid tw-items-center tw-justify-start tw-gap-6 tw-mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:tw-mb-2 tw-w-full tw-relative tw-flex tw-items-center tw-justify-center">
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-0 lg:tw-border-none lg:tw-bg-pGreen lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-pGreen tw-transform tw--translate-x-1/2 tw--translate-y-0 tw-top-full tw-left-1/2" ></span>
                        <div className="icon lg:tw-mr-0 lg:tw-w-10 lg:tw-h-10 lg:tw-flex lg:tw-items-center lg:tw-justify-center tw-relative tw-w-16 tw-h-16 tw-bg-lightGreen tw-rounded-full tw-z-10">
                            <div className="lg:tw-block tw-hidden w-5 tw-h-5 tw-rounded-full tw-bg-pGreen"></div>
                            <Check ClassName="lg:tw-block tw-absolute tw-w-3 tw-h-3 tw-hidden" color="white" />
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:tw-text-xs tw-text-xl tw-text-green-700 tw-font-semibold">คำสั่งซื้อใหม่</div>
                        <div className="date lg:tw-text-smaller tw-text-gray-400 tw-font-medium tw-text-sm">30/12/2563 - 10.00</div>
                    </div>
                </div>
                <div className="pending lg:tw-flex lg:tw-mb-3 lg:tw-flex-col tw-grid tw-items-center tw-justify-start tw-gap-6 tw-mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:tw-mb-2 tw-w-full tw-relative tw-flex tw-items-center tw-justify-center">
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-0 lg:tw-border-none lg:tw-bg-gray-100 lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-gray-100 tw-transform tw--translate-x-1/2 tw--translate-y-0 tw-top-full tw-left-1/2" ></span>
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-full lg:tw-border-none lg:tw-bg-pGreen lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-pGreen tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-top-0 tw-left-1/2"></span>
                        <div className="icon lg:tw-mr-0 lg:tw-w-10 lg:tw-h-10 lg:tw-flex lg:tw-items-center lg:tw-justify-center tw-relative tw-w-16 tw-h-16 tw-bg-lightGreen tw-rounded-full tw-z-10">
                            <div className="lg:tw-block tw-hidden tw-w-5 tw-h-5 tw-rounded-full tw-bg-pGreen"></div>
                            <Check ClassName="lg:tw-block tw-absolute tw-w-3 tw-h-3 tw-hidden" color="white" />
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:tw-text-xs tw-text-xl tw-text-green-700 tw-font-semibold">ร้านค้ากำลังเตรียมอาหาร</div>
                        <div className="date lg:tw-text-smaller tw-text-gray-400 tw-font-medium tw-text-sm">30/12/2563 - 10.00</div>
                    </div>
                </div>
                <div className="shipping lg:tw-flex lg:tw-mb-3 lg:tw-flex-col tw-grid tw-items-center tw-justify-start tw-gap-6 tw-mb-10" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:tw-mb-2 tw-w-full tw-relative tw-flex tw-items-center tw-justify-center">
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-0 lg:tw-border-none lg:tw-bg-gray-100 lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-gray-100 tw-transform tw--translate-x-1/2 tw--translate-y-0 tw-top-full tw-left-1/2" ></span>
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-full lg:tw-border-none lg:tw-bg-gray-100 lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-gray-100 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-top-0 tw-left-1/2"></span>
                        <div className="icon lg:tw-mr-0 lg:tw-w-10 lg:tw-h-10 lg:tw-flex lg:tw-items-center lg:tw-justify-center tw-relative tw-w-16 tw-h-16 tw-bg-gray-100 tw-rounded-full tw-z-10">
                            <div className="lg:tw-block tw-hidden tw-w-5 tw-h-5 tw-rounded-full tw-bg-gray-300"></div>
                            {/* <Check ClassName="lg:tw-block absolute w-3 h-3 hidden" color="white" /> */}
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:tw-text-xs tw-text-xl tw-text-gray-400 tw-font-semibold">อยู่ระหว่างการจัดส่ง</div>
                        <div className="date lg:tw-text-smaller tw-text-gray-400 tw-font-medium tw-text-sm"></div>
                    </div>
                </div>
                <div className="success lg:tw-flex lg:tw-flex-col tw-grid tw-items-center tw-justify-start tw-gap-6" style={{ gridTemplateColumns: "min-content auto" }}>
                    <div className="lg:tw-mb-2 tw-w-full tw-relative tw-flex tw-items-center tw-justify-center">
                        <span className="lg:tw-w-1/2 lg:tw--translate-y-1/2 lg:tw-top-1/2 lg:tw--translate-x-full lg:tw-border-none lg:tw-bg-gray-100 lg:tw-h-0.5 tw-w-0.5 tw-h-1/2 tw-absolute tw-border tw-border-dashed tw-border-gray-100 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-top-0 tw-left-1/2"></span>
                        <div className="icon lg:tw-mr-0 lg:tw-w-10 lg:tw-h-10 lg:tw-flex lg:tw-items-center lg:tw-justify-center tw-relative tw-w-16 tw-h-16 tw-bg-gray-100 tw-rounded-full tw-z-10">
                            <div className="lg:tw-block tw-hidden tw-w-5 tw-h-5 tw-rounded-full tw-bg-gray-300"></div>
                            {/* <Check ClassName="lg:tw-block absolute w-3 h-3 hidden" color="white" /> */}
                        </div>
                    </div>
                    <div className="description">
                        <div className="title lg:tw-text-xs tw-text-xl tw-text-gray-400 tw-font-semibold">สำเร็จ</div>
                        <div className="date lg:tw-text-smaller tw-text-gray-400 tw-font-medium tw-text-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Status