import React from 'react'
import './style.css'
import { NavLink, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
const TaiNguyen = (props) => {

    return (
        <div style={{backgroundColor: "#DCE19D"}}>
            <TopNav />
            <section className='row g-0'> 
                <img alt="" src="/images/6.png" style={{ width: "100%", height: "80%" }} align="right"/>
            </section>
            
            <section className="mt-5 container-fluid">
                <div className="row g-0">
                <div className="col-1"></div>
                <div className="col-10 mt-5" style={{marginLeft: '50px'}} >
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  Forest Trading Carbon hỗ trợ các hoạt động bảo vệ môi trường và phát triển bền vững thông qua giao dịch carbon trong khu vực 6 tỉnh phía Bắc Trung Bộ Việt Nam, bao gồm Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị và Thừa Thiên Huế. Dưới đây là một số tài nguyên quan trọng mà chúng tôi cung cấp để hỗ trợ cộng đồng và doanh nghiệp trong việc tham gia vào các hoạt động giảm phát thải và bảo vệ rừng: </p>
                </div>
                </div>
            </section>
            <section className="mt-5 container-fluid">
                <div className="row g-0">
                <div className="col-1"></div>
                <div className="col-10 mt-5" style={{marginLeft: '50px'}} >
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 1. Thông tin và Hướng dẫn:</b> Chúng tôi cung cấp các tài liệu hướng dẫn chi tiết và thông tin về cách thức tham gia vào các chương trình giao dịch carbon, bao gồm cách tính toán, đo lường và báo cáo lượng khí thải. Những thông tin này giúp doanh nghiệp và cộng đồng hiểu rõ hơn về quy trình và lợi ích của việc tham gia vào các hoạt động bảo vệ môi trường. </p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 2. Hỗ trợ Kỹ thuật:</b> Chúng tôi cung cấp hỗ trợ kỹ thuật cho các tổ chức và cá nhân về việc triển khai các biện pháp giảm phát thải và quản lý rừng một cách hiệu quả. Đội ngũ chuyên gia của chúng tôi sẽ hỗ trợ trong việc phát triển các dự án bảo vệ rừng và tối ưu hóa tiềm năng giảm phát thải của các doanh nghiệp. </p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 3. Đào tạo và Hội thảo:</b> Chúng tôi tổ chức các buổi đào tạo và hội thảo để nâng cao nhận thức và kiến thức về biến đổi khí hậu, quản lý rừng và các cơ hội kinh doanh liên quan đến giao dịch carbon. Những sự kiện này cung cấp cơ hội cho các bên liên quan giao lưu, chia sẻ kinh nghiệm và hợp tác trong việc xây dựng các dự án bảo vệ môi trường. </p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 4. Mạng lưới và Liên kết:</b> Chúng tôi tạo ra một mạng lưới liên kết giữa các doanh nghiệp, tổ chức xã hội và chính phủ địa phương để thúc đẩy sự hợp tác và chia sẻ thông tin về các cơ hội và thách thức trong lĩnh vực giao dịch carbon và bảo vệ rừng. </p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 5. Thông tin Thị trường:</b>  Chúng tôi cung cấp thông tin và phân tích về thị trường carbon để giúp các doanh nghiệp định hình chiến lược kinh doanh và đưa ra quyết định đúng đắn trong việc tham gia vào các hoạt động giao dịch carbon. </p>
                    <p style={{textAlign: "justify", fontSize: '28px'}}>  <b> 6. Giải pháp Công nghệ:</b> Chúng tôi cung cấp các giải pháp công nghệ sáng tạo để hỗ trợ việc quản lý dữ liệu, đo lường lượng khí thải và theo dõi tiến độ của các dự án bảo vệ môi trường.  </p>
                </div>
                </div>
            </section>
            <section className="mt-5 container-fluid" >
                <div className="row g-0">
                <div className="col-1"></div>
                    <div className="col-md-5 mt-5" ><img alt="" src="/images/13.png" style={{ width: "100%", borderRadius: '20px' }} align="right" /></div>
                    <div className="col-md-5 mt-5" style={{marginLeft: '50px'}} >
                        
                        <p style={{textAlign: "justify", fontSize: '28px', fontWeight: 'bold'}}> Chúng tôi cam kết hỗ trợ cộng đồng và doanh nghiệp tại các tỉnh trong khu vực phía Bắc Trung Bộ Việt Nam trong việc thúc đẩy phát triển bền vững và bảo vệ môi trường. </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </section>
            <Footer style={{ marginTop: "80px" }} />
        </div >
    );
}
export default TaiNguyen;