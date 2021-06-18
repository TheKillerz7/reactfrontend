import Ham from '../../assets/svgs/Hamburger'
import React, { useState } from 'react';

const Navbar = ({ info }) => {

    //for transforming off-screened navigation links in mobile
    const [transform, setTransform] = useState(false)

    return(
        <div className="nav-container lg:tw-px-14 lg:tw-py-7 tw-relative tw-shadow-md tw-flex tw-items-center tw-justify-between tw-px-5 tw-py-3 tw-bg-white" style={{ zIndex: "10000" }}>
            <div className="logo tw-font-semibold">LOGO</div>
            <div className="menu-container tw-flex">
                <ul className={"menu-list xl:tw-text-base lg:tw-text-sm lg:tw-flex-row lg:tw-static lg:tw-h-auto lg:tw-transform-none tw-text-lg tw-flex tw-flex-col tw-justify-center tw-w-full tw-items-center tw-bg-white tw-transform tw-left-0 tw-top-0 tw-z-20 tw-fixed tw-h-screen tw-mr-16 tw-transition tw-duration-300 " + (!transform && "tw-translate-x-full")}>
                    {/* closing navigation links and set state to false to transform it back */}
                    <div className="lg:tw-hidden tw-absolute tw-z-30 tw-text-3xl tw-right-7 tw-top-5" onClick={() => setTransform(false)}>x</div>
                    <li className="lg:tw-mr-6 lg:tw-mb-0 tw-mb-10">สั่งอาหาร</li>
                    <li className="lg:tw-mr-6 lg:tw-mb-0 tw-mb-10">แพ็คเกจอาหาร</li>
                    <li className="lg:tw-mr-6 lg:tw-mb-0 tw-mb-10">ลงทุน</li>
                    <li className="lg:tw-mr-6 lg:tw-mb-0 tw-mb-10">สมัครเป็นร้านค้า</li>
                </ul>
                <div className="basket tw-mr-4 tw-flex tw-items-center tw-justify-center">B</div>
                <div className="profile tw-flex tw-items-center tw-mr-2">
                    <div className="picture tw-rounded-full tw-bg-gray-500 tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-mr-2">{info.picture}</div>
                    <div className="name tw-text-sm">{info.name}</div>
                </div>
                {/* Hamburger click and it will set state to true for transforming */}
                <div className="hamburger lg:tw-hidden tw-text-lg tw-flex tw-items-center tw-ml-3" onClick={() => setTransform(true)}><Ham ClassName="tw-w-4" color="black" /></div>
            </div>
        </div>
    )
}

export default Navbar