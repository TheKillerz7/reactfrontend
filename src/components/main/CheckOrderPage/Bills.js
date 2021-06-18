import React, { useRef, useState } from 'react'

const Bills = ({ bill }) => {
    let totalPrice = 0

    const heightRef = useRef(null)
    const [close, setClose] = useState(false)

    return(
        <div className="lg:tw-mb-6 tw-shadow tw-bg-white tw-overflow-hidden" style={{ maxHeight: (close && heightRef.current.offsetHeight + "px" || "500px"), transition: "max-height 0.5s ease" }}>
            <div ref={heightRef} className="title lg:tw-px-8 tw-cursor-pointer tw-flex tw-items-center tw-justify-between tw-px-5 tw-py-3 tw-border-t-2 tw-border-b-2 tw-border-gray-200">
                <div className="tw-font-semibold tw-text-sm">การชำระเงิน</div>
                <div className="bill-status tw-flex tw-items-center" onClick={() => setClose(!close)}>
                    <span className="tw-text-orange tw-font-semibold tw-mr-3">{bill.status === "paid" && "ชำระเงินแล้ว" || "ยังไม่ได้ชำระเงิน"}</span>
                    <div className={"arrow tw-transform tw-transition tw-duration-300 " + (!close && "tw-rotate-180")}>V</div>
                </div>
            </div>
            <div className="detail tw-pt-4">
                {
                    bill.pricing.map((info)=>{
                        totalPrice += info.price

                        return(
                            <div className="lg:tw-px-8 tw-flex tw-items-center tw-justify-between tw-px-5 tw-mb-1 tw-text-sm">
                                <div className="tw-text-gray-400">{info.text}</div>
                                <div>${info.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="total lg:tw-px-8 tw-px-5 tw-flex tw-items-center tw-justify-between tw-py-4">
                <div className="lg:tw-text-base lg:tw-text-gray-500 tw-text-lg">รวมยอดที่ต้องชำระ</div>
                <div className="total-price tw-font-semibold">${totalPrice}</div>
            </div>
            <div className="lg:tw-px-8 tw-border-dashed tw-border-t-2 tw-border-gray-200 tw-px-5 tw-py-5 tw-text-sm tw-text-gray-400">
                <div className="tw-flex tw-items-center tw-justify-between tw-mb-2">
                    <div>ช่องทาง</div>
                    <div>Wallet</div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-between">
                    <div>วันเวลาที่ชำระ</div>
                    <div>30/12/2563 - 10:00</div>
                </div>
            </div>
        </div>
    )
}

export default Bills