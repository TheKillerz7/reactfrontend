import React from "react";
import "./Footer.css";

import { Col, Row, Badge, Card } from "antd";

function FooterBar() {
  return (
    <div className="container-footer">
      <Row
        className="footer"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Col style={{ marginRight: "10rem" }}>
          <a href="#" style={{ color: '#333' }}>
            <p>Logo</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>33/33 ถนนเทพารักษ์ </p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>ตำบลบางเมืองใหม่ อำเภอเมือง </p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>จังหวัด สมุทรปราการ 10101</p>
          </a>
        </Col>
        <Col>
          <a href="#" style={{ color: '#333' }}>
            <p>สั่งอาหาร</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>ร้านค้าทั้งหมด</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>คำสั่งซื้อ</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>ประวัติการสั่งซื้อ</p>
          </a>
        </Col>
        <Col>
          <a href="#" style={{ color: '#333' }}>
            <p>ลงทุน</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>วิธีการใช้งาน</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>เปิดบัญชีการลงทุน</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>ร้านที่สามารถลงทุนได้</p>
          </a>
        </Col>
        <Col >
          <a href="#" style={{ color: '#333' }}>
            <p>ช่วยเหลือ</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>คำถามที่พบบ่อย</p>
          </a>
          <a href="#" style={{ color: '#848484' }}>
            <p>ติดต่อเรา</p>
          </a>
        </Col>
      </Row>
    </div>
    // <div className="footer">
    //   <div className="container">
    //       <div >

    //     </div>
    //   </div>
    // </div>
  );
}

export default FooterBar;
