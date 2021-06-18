const Footer = ()=> {
    return(
        <div className="lg:tw-bg-gray-200">
            <div className="lg:tw-flex tw-mx-auto" style={{ maxWidth: "1500px" }}>
                <div className="contact lg:tw-px-14 lg:tw-py-14 lg:tw-bg-transparent lg:tw-w-2/5 tw-bg-gray-50 tw-bg-opacity-60 tw-py-8 tw-px-5">
                    <div className="font-semibold mb-3">LOGO</div>
                    <div className="tw-text-xs tw-text-gray-500 tw-mb-3 tw-leading-normal">33/33 ภนนเทพารักษ์ ตำบลบาง<br/>เมืองใหม่ อำเภอเมือง จังหวัด<br/>สมุทรสาคร 10101</div>
                    <div className="media tw-flex">
                        <div className="tw-w-7 tw-h-7 tw-bg-gray-400 tw-mr-2 tw-rounded-full"></div>
                        <div className="tw-w-7 tw-h-7 tw-bg-gray-400 tw-mr-2 tw-rounded-full"></div>
                        <div className="tw-w-7 tw-h-7 tw-bg-gray-400 tw-mr-2 tw-rounded-full"></div>
                    </div>
                </div>
                <div className="all-links lg:tw-py-14 lg:tw-justify-between lg:tw-w-3/5 lg:tw-pr-14 md:tw-justify-around tw-flex tw-items-start tw-justify-between tw-bg-gray-200 tw-px-5 tw-py-8 tw-gap-2">
                    <div className="">
                        <div className="tw-font-semibold tw-mb-4">สั่งอาหาร</div>
                        <ul className="tw-text-gray-500 tw-text-xs">
                            <li className="tw-mb-4" >ร้านค้าทั้งหมด</li>
                            <li className="tw-mb-4">คำสั่งซื้อ</li>
                            <li className="">ประวัติการสั่งซื้อ</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="tw-font-semibold tw-mb-4">ลงทุน</div>
                        <ul className="tw-text-gray-500 tw-text-xs">
                            <li className="tw-mb-4" >วิธีการใช้งาน</li>
                            <li className="tw-mb-4">เปิดบัญชีการลงทุน</li>
                            <li className="">ร้านที่สามารถลงทุนได้</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="tw-font-semibold tw-mb-4">ช่วยเหลือ</div>
                        <ul className="tw-text-gray-500 tw-text-xs">
                            <li className="tw-mb-4" >คำถามที่พบบ่อย</li>
                            <li className="tw-mb-4">ติดต่อเรา</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tw-bg-white tw-text-gray-400 tw-p-5 tw-text-xs tw-text-center">Copyright 2020 Example Co. Ltd. All Rights Reserved</div>
        </div>
    )
}

export default Footer