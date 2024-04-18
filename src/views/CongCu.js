import React from 'react'
import './style.css'
import { NavLink, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
const CongCu = (props) => {

    return (
        <div style={{backgroundColor: "#DCE19D"}}>
            <TopNav />
            <section className='row g-0'> 
                <img alt="" src="/images/9.png" style={{ width: "100%", height: "80%" }} align="right"/>
            </section>
            <section className="row g-0">
                <div className="col-1"></div>
                <div className="col-md-5 mt-5">
                    <p className="" style={{ fontSize: "27px", fontStyle: 'italic', fontWeight: 'bold'}}>Chào mừng bạn đến với ForestCarbonExchange 
                    <br/>Nền tảng giao dịch tín chỉ carbon từ rừng hàng đầu!</p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>Chúng tôi là điểm đến đáng tin cậy cho các doanh nghiệp, tổ chức, nhà đầu tư và cộng đồng quan tâm đến việc giảm khí thải và bảo vệ môi trường.</p>
                </div>
                <div className="col-md-6 mt-5" ><img alt="" src="/images/2.png" style={{ width: "90%", borderRadius: '20px' }} align="right" /></div>

            </section >
            
           
            <Footer style={{ marginTop: "80px" }} />
        </div >
    );
}
export default CongCu;