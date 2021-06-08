const Footer = ()=> {
    return(
        <div className="lg:bg-gray-200">
            <div className="lg:flex mx-auto" style={{ maxWidth: "1500px" }}>
                <div className="contact lg:px-14 lg:py-14 lg:bg-transparent lg:w-2/5 bg-gray-50 bg-opacity-60 p-8">
                    <div className="font-semibold mb-3">LOGO</div>
                    <div className="text-xs text-gray-500 mb-3 leading-normal">33/33 ภนนเทพารักษ์ ตำบลบาง<br/>เมืองใหม่ อำเภอเมือง จังหวัด<br/>สมุทรสาคร 10101</div>
                    <div className="media flex">
                        <div className="w-7 h-7 bg-gray-400 mr-2 rounded-full"></div>
                        <div className="w-7 h-7 bg-gray-400 mr-2 rounded-full"></div>
                        <div className="w-7 h-7 bg-gray-400 mr-2 rounded-full"></div>
                    </div>
                </div>
                <div className="all-links lg:py-14 lg:justify-between lg:w-3/5 lg:pr-14 md:justify-around flex items-start justify-between bg-gray-200 p-8 gap-2">
                    <div className="">
                        <div className="font-semibold mb-4">สั่งอาหาร</div>
                        <ul className="text-gray-500 text-xs">
                            <li className="mb-4" >ร้านค้าทั้งหมด</li>
                            <li className="mb-4">คำสั่งซื้อ</li>
                            <li className="">ประวัติการสั่งซื้อ</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="font-semibold mb-4">ลงทุน</div>
                        <ul className="text-gray-500 text-xs">
                            <li className="mb-4" >วิธีการใช้งาน</li>
                            <li className="mb-4">เปิดบัญชีการลงทุน</li>
                            <li className="">ร้านที่สามารถลงทุนได้</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="font-semibold mb-4">ช่วยเหลือ</div>
                        <ul className="text-gray-500 text-xs">
                            <li className="mb-4" >คำถามที่พบบ่อย</li>
                            <li className="mb-4">ติดต่อเรา</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white text-gray-400 p-6 text-xs text-center">Copyright 2020 Example Co. Ltd. All Rights Reserved</div>
        </div>
    )
}

export default Footer