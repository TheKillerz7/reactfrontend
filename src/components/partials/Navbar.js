const Navbar = ({ info }) => {
    return(
        <div className="nav-container lg:px-14 lg:py-7 shadow-md flex items-center justify-between px-5 py-3 bg-white">
            <div className="logo font-semibold">LOGO</div>
            <div className="menu-container flex">
                <ul className="menu-list lg:flex items-center hidden mr-16">
                    <li className="mr-6">สั่งอาหาร</li>
                    <li className="mr-6">แพ็คเกจอาหาร</li>
                    <li className="mr-6">ลงทุน</li>
                    <li className="mr-6">สมัครเป็นร้านค้า</li>
                </ul>
                <div className="basket mr-4 flex items-center justify-center">B</div>
                <div className="profile flex items-center mr-2">
                    <div className="picture rounded-full bg-gray-500 w-8 h-8 flex items-center justify-center mr-2">{info.picture}</div>
                    <div className="name text-sm">{info.name}</div>
                </div>
                <div className="hamburger lg:hidden text-lg flex items-center">H</div>
            </div>
        </div>
    )
}

export default Navbar