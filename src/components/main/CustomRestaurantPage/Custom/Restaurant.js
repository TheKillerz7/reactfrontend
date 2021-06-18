import background_1 from '../../../../assets/imgs/background-1.png'
import restaurant from '../../../../assets/imgs/restaurant.png'

const Restaurant = ({ steps, setStep }) => {
    return(
        <div className="lg:tw-px-36 md:tw-w-full tw-px-5 tw-transition tw-duration-300" style={{ transform: (`translateX(-${100*steps}%)`) }}>
            <div className="xl:tw-w-3/12 xl:tw-hidden xl:tw-absolute xl:tw-left-5 md:tw-px-20 tw-text-gray-500 tw-mb-12">
                <h2 className="tw-font-semibold tw-text-gray-400 tw-mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                <p className="tw-text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
            </div>
            <div className="xl:tw-px-56 xl:tw-mx-auto md:tw-px-20 tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center" style={{ maxWidth: "1000px" }}>
                <div className="xl:tw-w-5/12 xl:tw-absolute xl:tw-block xl:tw-top-0 xl:tw--left-32 md:tw-px-20 tw-hidden tw-text-gray-500 tw-mb-12">
                    <h2 className="tw-font-semibold tw-text-gray-400 tw-mb-3">เลือกธีมสำหรับตกแต่งร้าน</h2>
                    <p className="tw-text-xs">Lorem iqsum doror sit amit, conmsectetur adioiscing elit. Etima ulrtices odio non ligula rempr, ut</p>
                </div>
                <div className="tw-text-gray-500 tw-mb-2">ร้านค้า</div>
                <div className="md:tw-h-80 tw-relative tw-w-full tw-flex tw-justify-center">
                    <div className="md:tw-h-64 tw-h-36 tw-overflow-hidden tw-mb-10">
                        <div className="md:tw-w-80 md:tw-h-80 tw-overflow-hidden tw-w-48 tw-h-48 tw-bg-gray-200 tw-rounded-full tw-relative">
                            <img className="lg:tw-bottom-16 tw-w-full tw-h-5/6 tw-absolute tw-bottom-12" src={background_1} />
                            <img className="lg:tw-left-12 md:tw-left-14 tw-w-9/12 tw-absolute tw-bottom-8 tw-left-9" src={restaurant} />
                        </div>
                    </div>
                    <span className="tw-absolute tw-transform tw--translate-y-1/2 tw-left-5 tw-top-1/2 tw-text-4xl tw-font-light">{"<"}</span>
                    <span className="tw-absolute tw-transform tw--translate-y-1/2 tw-right-5 tw-top-1/2 tw-text-4xl tw-font-light">{">"}</span>
                </div>
                <div className="tw-w-full tw-mb-8">
                    <div className="tw-mb-3 tw-text-gray-500">เลือกพื้นหลัง</div>
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                        <div className="lg:tw-w-16 lg:tw-h-16 md:tw-w-14 md:tw-h-14 tw-rounded-lg tw-bg-gray-400 tw-w-10 tw-h-10"></div>
                    </div>
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

export default Restaurant