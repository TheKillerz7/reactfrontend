const Shipping = ({ shipping }) => {
    return(
        <div className="lg:tw-pb-6 lg:tw-border-2 lg:tw-border-gray-200 tw-mt-3 tw-mb-16 tw-bg-white">
            <div className="title lg:tw-px-8 lg:tw-border-t-0 tw-text-sm tw-font-semibold tw-px-5 tw-py-3 tw-border-gray-200 tw-border-b-2 tw-border-t-2">ข้อมูลการจัดส่ง</div>
            <div className="lg:tw-shadow-none lg:tw-mb-0 lg:tw-px-8 tw-px-5 tw-pt-5 tw-pb-10 tw-mb-8 tw-shadow">
                <div className="tw-mb-3 tw-text-sm">ที่อยู่</div>
                <div className="tw-text-sm tw-text-gray-400">{shipping.name} <br/> {shipping.address}</div>
            </div>
            <div className="lg:tw-block tw-hidden tw-px-8 tw-text-sm">
                <div className="tw-mb-4">สถานะการขนส่ง</div>
                <div className="tw-flex tw-py-2 tw-px-5 tw-rounded-lg tw-bg-gray-100">
                    <div className="tw-w-4 tw-h-4 tw-mr-3 tw-mt-1 tw-rounded-full tw-bg-lightRed tw-bg-opacity-50"></div>
                    <div>
                        <div className="tw-text-lightRed tw-text-opacity-80 tw-font-semibold">กำลังดำเนินการ</div>
                        <div className="tw-text-gray-400">30/12/2563 - 10:00</div>
                    </div>
                </div>
            </div>
            <div className="lg:tw-hidden tw-px-5">
                <div className="tw-rounded-lg tw-text-white tw-bg-orange tw-flex tw-items-center tw-justify-center tw-p-3 tw-text-xs tw-font-semibold tw-mb-3">ไปที่หน้าประวัติการสั่งซื้อของฉัน</div>
                <div className="tw-rounded-lg tw-text-orange tw-border tw-border-orange tw-flex tw-items-center tw-justify-center tw-p-3 tw-text-xs tw-font-semibold">กลับหน้าแรก</div>
            </div>
        </div>
    )
}

export default Shipping