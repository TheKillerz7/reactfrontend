const Shipping = ({ shipping }) => {
    return(
        <div className="lg:pb-6 lg:border-2 lg:border-gray-200 mt-3 mb-16 bg-white">
            <div className="title lg:px-8 lg:border-t-0 text-sm font-semibold px-5 py-3 border-gray-200 border-b-2 border-t-2">ข้อมูลการจัดส่ง</div>
            <div className="lg:shadow-none lg:mb-0 lg:px-8 px-5 pt-5 pb-10 mb-8 shadow">
                <div className="mb-3 text-sm">ที่อยู่</div>
                <div className="text-sm text-gray-400">{shipping.name} <br/> {shipping.address}</div>
            </div>
            <div className="lg:block hidden px-8 text-sm">
                <div className="mb-4">สถานะการขนส่ง</div>
                <div className="flex py-2 px-5 rounded-lg bg-gray-100">
                    <div className="w-4 h-4 mr-3 mt-1 rounded-full bg-lightRed bg-opacity-50"></div>
                    <div>
                        <div className="text-lightRed text-opacity-80 font-semibold">กำลังดำเนินการ</div>
                        <div className="text-gray-400">30/12/2563 - 10:00</div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden px-5">
                <div className="rounded-lg text-white bg-orange flex items-center justify-center p-3 text-xs font-semibold mb-3">ไปที่หน้าประวัติการสั่งซื้อของฉัน</div>
                <div className="rounded-lg text-orange border border-orange flex items-center justify-center p-3 text-xs font-semibold">กลับหน้าแรก</div>
            </div>
        </div>
    )
}

export default Shipping