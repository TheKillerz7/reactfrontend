const Profile = ({ profile }) => {
    return(
        <div className="profile-container lg:tw-flex tw-hidden tw-flex-col tw-justify-center tw-items-center tw-border-2 tw-border-gray-200 tw-bg-white tw-pt-8 tw-self-start tw-rounded-lg">
            <div className="profile-pic tw-bg-gray-500 tw-w-14 tw-h-14 tw-rounded-full tw-mb-1"></div>
            <div className="info tw-text-center tw-px-10 tw-mb-3">
                <div className="">{profile.name}</div>
                <div className="tw-text-xs tw-text-gray-400">{profile.member} MEMBER</div>
            </div>
            <div className="tw-w-full tw-px-2">
                <div className="tw-grid tw-grid-cols-3 tw-rounded-md tw-bg-lightOrange tw-bg-opacity-10 tw-w-full tw-px-2 tw-py-2 tw-text-center">
                    <div className="point">
                        <div className="tw-text-orange tw-font-semibold">{profile.point}</div>
                        <div className="tw-text-xs">คะแนนสะสม</div>
                    </div>
                    <div className="orders">
                        <div className="tw-text-orange tw-font-semibold">{profile.orders}</div>
                        <div className="tw-text-xs">คำสั่งซื้อรวม</div>
                    </div>
                    <div className="budget">
                        <div className="tw-text-orange tw-font-semibold">{profile.budget}</div>
                        <div className="tw-text-xs">เงินที่ลงทุน</div>
                    </div>
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-items-start tw-justify-start tw-w-full">
                <div className="tw-font-semibold tw-pl-8 tw-pt-7 tw-pb-3">บัญชีของฉัน</div>
                <ul className="tw-text-gray-500 tw-text-sm w-full">
                    <li className="tw-pl-8 tw-py-2 tw-border-b-2 tw-border-gray-200 tw-border-dashed">จัดการบัญชีของฉัน</li>
                    <li className="tw-pl-8 tw-py-2 tw-border-b-2 tw-border-gray-200 tw-border-dashed">รายการสั่งอาหาร</li>
                    <li className="tw-pl-8 tw-py-2 tw-border-b-2 tw-border-gray-200 tw-border-dashed">พอร์ตการลงทุน</li>
                    <li className="tw-pl-8 tw-py-2 tw-border-b-2 tw-border-gray-200 tw-border-dashed">บัญชีชำระเงิน</li>
                    <li className="tw-pl-8 tw-py-2">บัญชีของฉัน</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile