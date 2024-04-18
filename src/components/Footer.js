import React, { useState } from "react";

import { Modal, Button } from 'react-bootstrap';
const Footer = (props) => {
    
    return (
        <footer style={{ backgroundColor: "#737927", color: "white", marginTop: "80px" }}>
            <div className="container pt-4 pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img alt="" src="/images/logo2.png" />
                        <p className="mt-3" style={{ fontSize: "30px" }}>FRCE</p>
                        <p style={{ textAlign: "justify"}}> Chúng tôi là một điểm đến đáng tin cậy dành cho các doanh nghiệp, tổ chức và nhà đầu tư có mối quan tâm đến việc giảm khí thải và bảo vệ môi trường. Chúng tôi cung cấp các giải pháp và dịch vụ đa dạng nhằm hỗ trợ khách hàng trong việc thiết lập và thực hiện các chiến lược bền vững, từ quản lý năng lượng đến tái chế và phát triển công nghệ xanh. Đồng thời, chúng tôi cam kết xây dựng một cộng đồng đồng lòng và sẵn sàng hợp tác để cùng nhau tạo ra một tương lai bền vững cho môi trường và xã hội.</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-3"><br/><br/><img alt="" src="/images/logowhite.png" style={{ width: "100%"}} align="right"/></div>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer