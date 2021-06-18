const Products = ({ products }) => {
    return(
        <div className="product-container lg:tw-border-2 lg:tw-border-gray-200 lg:tw-mb-6 tw-py-5 tw-shadow mb-3 tw-bg-white">
            <div className="tw-font-semibold lg:tw-px-8 tw-px-5 tw-mb-3 tw-text-sm">รายละเอียดคำสั่งซื้อ</div>
            <div className="lg:tw-text-sm tw-w-full tw-table tw-text-xs">
                <div className="tw-table-row tw-bg-gray-100 tw-text-gray-500">
                    <div className="tw-table-cell lg:tw-pl-8 lg:tw-w-7/12 tw-w-6/12 tw-pl-5 tw-py-2">สินค้า</div>
                    <div className="tw-table-cell">ราคา</div>
                    <div className="tw-table-cell">จำนวน</div>
                    <div className="tw-table-cell lg:tw-w-2/12 tw-pr-5 tw-w-3/12">ราคาทั้งหมด</div>
                </div>
                {
                    //product mapping
                    products.map((product, index) => {
                        return(
                            <div className={"tw-table-row " + (index+1 !== products.length && "tw-shadow")}>
                                <div className="tw-table-cell lg:tw-pl-8 tw-pl-5 tw-py-5 tw-align-top">
                                    <div className="tw-grid lg:tw-pr-10" style={{ gridTemplateColumns: "auto 1fr" }}>
                                        <div className="lg:tw-mr-2 lg:tw-h-12 lg:tw-w-14 tw-w-12 tw-h-10 tw-rounded-lg tw-bg-gray-500"></div>
                                        <div className="tw-px-2">
                                            <div className="tw-text-gray-500">{product.description}</div>
                                            <div className="tw-text-gray-400"><br/>เค็ม : 3, เปรี้ยว : 3, หวาน : 2, มัน : 2</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tw-table-cell tw-pr-2 tw-py-5">${product.price}</div>
                                <div className="tw-table-cell tw-pr-2">{product.amount}</div>
                                <div className="tw-table-cell tw-pr-5 tw-font-semibold">${product.price*product.amount}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products