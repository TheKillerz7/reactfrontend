const Bills = ({ bill }) => {
    let totalPrice = 0

    return(
        <div className="lg:mb-6 shadow bg-white">
            <div className="title lg:px-8 cursor-pointer flex items-center justify-between px-5 py-3 border-t-2 border-b-2 border-gray-200">
                <div className="font-semibold text-sm">การชำระเงิน</div>
                <div className="bill-status flex items-center">
                    <span className="text-green-700 font-semibold mr-3">{bill.status === "paid" && "ชำระเงินแล้ว" || "ยังไม่ได้ชำระเงิน"}</span>
                    <div className="arrow">V</div>
                </div>
            </div>
            <div className="detail pt-4">
                {
                    bill.pricing.map((info)=>{
                        totalPrice += info.price

                        return(
                            <div className="lg:px-8 flex items-center justify-between px-5 mb-1 text-sm">
                                <div className="text-gray-400">{info.text}</div>
                                <div>${info.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total lg:px-8 px-5 flex items-center justify-between py-4">
                <div className="lg:text-base lg:text-gray-500 text-lg">รวมยอดที่ต้องชำระ</div>
                <div className="total-price font-semibold">${totalPrice}</div>
            </div>
            <div className="lg:px-8 border-dashed border-t-2 border-gray-200 px-5 py-5 text-sm text-gray-400">
                <div className="flex items-center justify-between mb-2">
                    <div>ช่องทาง</div>
                    <div>Wallet</div>
                </div>
                <div className="flex items-center justify-between">
                    <div>วันเวลาที่ชำระ</div>
                    <div>30/12/2563 - 10:00</div>
                </div>
            </div>
        </div>
    )
}

export default Bills