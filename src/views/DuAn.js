import React from 'react'
import './style.css'
import { NavLink, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
const DuAn = (props) => {

    return (
        <div style={{backgroundColor: "#DCE19D"}}>
            <TopNav />
            <section className='row g-0'> 
                <img alt="" src="/images/7.png" style={{ width: "100%", height: "80%" }} align="right"/>
            </section>
            
            <section className="mt-5 container-fluid" >
                <div className="row g-0">
                <div className="col-1"></div>
                    <div className="col-md-5 mt-5" ><img alt="" src="/images/13.png" style={{ width: "100%", borderRadius: '20px' }} align="right" /></div>
                    <div className="col-md-5 mt-5" style={{marginLeft: '50px'}} >
                        <p><h2>Hiện nay</h2></p>
                        <p style={{textAlign: "justify", fontSize: '28px'}}>  Trên thế giới đã ghi nhận 46 quốc gia và 35 vùng lãnh thổ đã áp dụng hoặc lên kế hoạch áp dụng công cụ định giá carbon với tổng lượng khí nhà kính được kiểm soát là 12 tỷ tấn CO2 tương đương, chiếm 22,3% tổng lượng phát thải khí nhà kính toàn cầu. Ngoài ra, 25 thị trường mua bán phát thải đã vận hành, 7 quốc gia dự kiến đưa vào vận hành trong vài năm tới, 15 quốc gia đang cân nhắc. </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
            <section className="mt-5 container-fluid">
                <div className="row g-0">
                <div className="col-1"></div>
                <div className="col-10 mt-5" style={{marginLeft: '50px'}} >
                            <p style={{textAlign: "justify", fontSize: '28px'}}>  Sự tham gia mạnh mẽ của các quốc gia trong nỗ lực giảm phát thải khí nhà kính đã đem lại nguồn thu từ định giá carbon lên tới 45 tỷ USD. </p>
                            <p style={{textAlign: "justify", fontSize: '28px'}}>  Trong dòng chảy đó, Việt Nam cũng đã có những động thái tham gia tích cực chuẩn bị mọi tiền đề sẵn sàng xây dựng thị trường này ngay từ năm 2012 thông qua việc trở thành thành viên của Chương trình sẵn sàng tham gia thị trường carbon quốc tế. Đến năm 2015, dự án chuẩn bị sẵn sàng cho xây dựng thị trường carbon tại Việt Nam có tên gọi là VNPMR đã được triển khai nhằm tăng cường năng lực xây dựng các công cụ thị trường, tạo điều kiện cho việc hình thành thị trường carbon ở Việt Nam </p>
                </div>
                </div>
            </section>
            <Footer style={{ marginTop: "80px" }} />
        </div >
    );
}
export default DuAn;