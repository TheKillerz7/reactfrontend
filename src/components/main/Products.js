const Products = ({ products }) => {
    return(
        <div className="product-container lg:border-2 lg:border-gray-200 lg:mb-6 py-5 shadow mb-3 bg-white">
            <div className="font-semibold lg:px-8 px-5 mb-3 text-sm">รายละเอียดคำสั่งซื้อ</div>
            <div className="lg:text-sm w-full table text-xs">
                <div className="table-row bg-gray-100 text-gray-500">
                    <div className="table-cell lg:pl-8 lg:w-7/12 w-6/12 pl-5 py-2">สินค้า</div>
                    <div className="table-cell">ราคา</div>
                    <div className="table-cell">จำนวน</div>
                    <div className="table-cell lg:w-2/12 pr-5 w-3/12">ราคาทั้งหมด</div>
                </div>
                {
                    products.map((product, index) => {
                        return(
                            <div className={"table-row " + (index+1 !== products.length && "shadow")}>
                                <div className="table-cell lg:pl-8 pl-5 py-5 align-top">
                                    <div className="grid lg:pr-10" style={{ gridTemplateColumns: "auto 1fr" }}>
                                        <div className="lg:mr-2 lg:h-12 lg:w-14 w-12 h-10 rounded-lg bg-gray-500"></div>
                                        <div className="px-2">
                                            <div className="text-gray-500">{product.description}</div>
                                            <div className="text-gray-400"><br/>เค็ม : 3, เปรี้ยว : 3, หวาน : 2, มัน : 2</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-cell pr-2 py-5">${product.price}</div>
                                <div className="table-cell pr-2">{product.amount}</div>
                                <div className="table-cell pr-5 font-semibold">${product.price*product.amount}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products