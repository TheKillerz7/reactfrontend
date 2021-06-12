import React, { useState } from "react";
import "./Header.css";
// import { Link } from "rea";

// Core Ui //

import { BugOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

// import Login from "../Login/Login.js";

function HeaderBar() {
  // Functions Click HambergerMenu Hide Open
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  //Function Onclick count on shoppingCart//
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decline = () => {
    setCount((count) => count - 1)
    if (count === 0) {
      return ([])

    }
  };

  return (
    // <div className="header">
    //   <Link to="/">Logo</Link>
    // </div>
    <div className="header">
      <div className="container-header">
        <div className="header-con">
          <div className="logo-container">
            Logo
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/StoreRating">สั่งอาหาร</a>
            </li>
            <li
              className="menu-link"
              style={{ display: "none" }}
              onClick={closeMobileMenu}
            >
              <a href="/ProOfMeals">แพ็คเกจอาหาร</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">ลงทุน</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/RegisterRes">สมัครเปิดร้านค้า</a>
            </li>
            <li className="menu-link">
              <Badge count={count} className="head-example">
                <ShoppingCartOutlined count={count} />
              </Badge>
              {/* <Button onClick={increase}>aa</Button>
              <Button onClick={decline}>bb</Button> */}
            </li>
            <li className="menu-link">
              เข้าสู่ระบบ
            </li>
            <li className="menu-link">
              <a href="/Register">
                <Button danger shape="round">
                  สมัครสมาชิก
                </Button>
              </a>
            </li>
          </ul>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
