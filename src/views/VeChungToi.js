import React from 'react'
import './style.css'
import { NavLink, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
const VeChungToi = (props) => {

    return (
        <div style={{backgroundColor: "#DCE19D"}}>
            <TopNav />
            <section className='row g-0'> 
                <img alt="" src="/images/bgDuAn1.png" style={{ width: "100%", height: "80%" }} align="right"/>
            </section>
            <section className="row g-0">
                <div className="col-1"></div>
                <div className="col-md-5 mt-5" style={{alignItems: 'center'}}>
                    <p className="" style={{ fontSize: "30px", color: '#253519'}}>Chào mừng bạn đến với</p>
                    <p className="" style={{ fontSize: "40px", fontStyle: 'italic', fontWeight: 'bold', color: '#253519'}}> FOREST CARBON EXCHANGE</p>
                    <p style={{ fontSize: "32px", color: '#253519'}}>Nền tảng giao dịch tín chỉ carbon từ rừng hàng đầu!</p>
                    <p style={{ textAlign: "justify", fontSize: '28px'}}> Chúng tôi là điểm đến đáng tin cậy cho các doanh nghiệp, tổ chức, nhà đầu tư và cộng đồng quan tâm đến việc giảm khí thải và bảo vệ môi trường.</p>
                </div>
                <div className="col-md-5 mt-5" ><img alt="" src="/images/20.png" style={{ width: "90%", borderRadius: '20px' }} align="right" /></div>
                <div className="col-1"></div>
            </section >
            <section className="mt-5 container-fluid" >
                <div className="row g-0">
                <div className="col-1"></div>
                    <div className="col-md-5 mt-5" ><img alt="" src="/images/13.png" style={{ width: "100%", borderRadius: '20px' }} align="right" /></div>
                    <div className="col-md-5 mt-5" style={{marginLeft: '50px'}} >
                        <p><h2>Tại ForestCarbonExchange</h2></p>
                        <p style={{textAlign: "justify", fontSize: '28px'}}>  Chúng tôi cung cấp một môi trường giao dịch an toàn, minh bạch và tiện lợi, cho phép bạn mua và bán các sản phẩm carbon từ rừng một cách dễ dàng và hiệu quả. Với sự đa dạng về dự án bảo vệ rừng và tính minh bạch cao, chúng tôi cam kết mang lại những cơ hội đầu tư và giao dịch mang lại giá trị kép: giúp giảm khí thải carbon và đồng thời hỗ trợ các dự án bảo vệ rừng trên toàn thế giới.</p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
            <section className="row g-0">
                <div className="col-1"></div>
                <div className="col-md-5 mt-5" style={{alignItems: 'center'}}>
                <p><h2>Qua nền tảng của chúng tôi</h2></p>
                        <p style={{textAlign: "justify",  fontSize: '28px'}}>Bạn sẽ có cơ hội trải nghiệm các tính năng tiên tiến, từ công cụ tìm kiếm đa dạng đến giao diện giao dịch dễ sử dụng. Chúng tôi luôn cam kết đem lại sự hỗ trợ và tư vấn chuyên môn, giúp bạn đạt được mục tiêu về giảm khí thải và bảo vệ môi trường một cách hiệu quả nhất.</p>
                </div>
                <div className="col-md-5 mt-5" ><img alt="" src="/images/24.png" style={{ width: "90%", borderRadius: '20px' }} align="right" /></div>
                <div className="col-1"></div>
            </section >
            <section className="mt-5">
                <img alt="" src="/images/lastAbouus.png" style={{ width: "100%"}} align="right"/>
            </section >
            <Footer style={{ marginTop: "80px" }} />
        </div >
    );
}
export default VeChungToi;