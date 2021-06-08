const Profile = ({ profile }) => {
    return(
        <div className="profile-container lg:flex hidden flex-col justify-center items-center border-2 border-gray-200 bg-white pt-8 self-start rounded-lg">
            <div className="profile-pic bg-gray-500 w-14 h-14 rounded-full mb-1"></div>
            <div className="info text-center px-10 mb-3">
                <div className="">{profile.name}</div>
                <div className="text-xs text-gray-400">{profile.member} MEMBER</div>
            </div>
            <div className="w-full px-2">
                <div className="grid grid-cols-3 rounded-md bg-yellow-700 bg-opacity-10 w-full px-2 py-1 text-center">
                    <div className="point">
                        <div className="text-yellow-600 font-semibold">{profile.point}</div>
                        <div className="text-xs">คะแนนสะสม</div>
                    </div>
                    <div className="orders">
                        <div className="text-yellow-600 font-semibold">{profile.orders}</div>
                        <div className="text-xs">คำสั่งซื้อรวม</div>
                    </div>
                    <div className="budget">
                        <div className="text-yellow-600 font-semibold">{profile.budget}</div>
                        <div className="text-xs">เงินที่ลงทุน</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
                <div className="font-semibold pl-8 pt-7 pb-3">บัญชีของฉัน</div>
                <ul className="text-gray-500 text-sm w-full">
                    <li className="pl-8 py-2 border-b-2 border-gray-200 border-dashed">จัดการบัญชีของฉัน</li>
                    <li className="pl-8 py-2 border-b-2 border-gray-200 border-dashed">รายการสั่งอาหาร</li>
                    <li className="pl-8 py-2 border-b-2 border-gray-200 border-dashed">พอร์ตการลงทุน</li>
                    <li className="pl-8 py-2 border-b-2 border-gray-200 border-dashed">บัญชีชำระเงิน</li>
                    <li className="pl-8 py-2">บัญชีของฉัน</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile