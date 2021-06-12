import Ham from '../../assets/svgs/Hamburger'
import React, { useState } from 'react';

const Navbar = ({ info }) => {

    //for transforming off-screened navigation links in mobile
    const [transform, setTransform] = useState(false)

    return(
        <div className="nav-container lg:px-14 lg:py-7 relative shadow-md flex items-center justify-between px-5 py-3 bg-white" style={{ zIndex: "10000" }}>
            <div className="logo font-semibold">LOGO</div>
            <div className="menu-container flex">
                <ul className={"menu-list xl:text-base lg:text-sm lg:flex-row lg:static lg:h-auto lg:transform-none text-lg flex flex-col justify-center w-full items-center bg-white transform left-0 top-0 z-20 fixed h-screen mr-16 transition duration-300 " + (!transform && "translate-x-full")}>
                    {/* closing navigation links and set state to false to transform it back */}
                    <div className="lg:hidden absolute z-30 text-3xl right-7 top-5" onClick={() => setTransform(false)}>x</div>
                    <li className="lg:mr-6 lg:mb-0 mb-10">สั่งอาหาร</li>
                    <li className="lg:mr-6 lg:mb-0 mb-10">แพ็คเกจอาหาร</li>
                    <li className="lg:mr-6 lg:mb-0 mb-10">ลงทุน</li>
                    <li className="lg:mr-6 lg:mb-0 mb-10">สมัครเป็นร้านค้า</li>
                </ul>
                <div className="basket mr-4 flex items-center justify-center">B</div>
                <div className="profile flex items-center mr-2">
                    <div className="picture rounded-full bg-gray-500 w-8 h-8 flex items-center justify-center mr-2">{info.picture}</div>
                    <div className="name text-sm">{info.name}</div>
                </div>
                {/* Hamburger click and it will set state to true for transforming */}
                <div className="hamburger lg:hidden text-lg flex items-center ml-3" onClick={() => setTransform(true)}><Ham ClassName="w-4" color="black" /></div>
            </div>
        </div>
    )
}

export default Navbar