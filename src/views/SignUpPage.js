import React, { useState, useEffect, useContext } from 'react';
import './style.css'
import { NavLink } from "react-router-dom"
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

const SignUpPage = (props) => {
    
    return (
        <div>
            <TopNav />
            <section className="row g-0 pb-5" style={{backgroundImage: 'url(/images/forest2.png)', width: '100%'}}>
                <div className="col-1"></div>
                <div className="col-sm-6 col-md-5 col-lg-4">
                    <div style={{backgroundColor: "#fff", borderRadius: "5px",  marginTop: "70px" }} align="center">
                        <form style={{ backgroundColor: "#fff" }}>
                            <br></br>
                            <h1 align="center" className="mt-5 mb-4">Đăng ký</h1>
                            <h4 align="center" className="mt-5 mb-4">Thông tin cá nhân</h4>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="fullName" name="fullName" placeholder="Tên đầu tiên"  />

                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="firtname" name="firtname" placeholder="Họ"  />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="tel" className="form-control pb-3 pt-3" id="phone" name="phone" placeholder="Số điện thoại" />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="address" name="address" placeholder="Địa chỉ" />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="email" className="form-control pb-3 pt-3" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="CCCD" name="CCCD" placeholder="Căn cước công dân" />
                            </div>
                            
                            <div className="col-10 mb-3 mt-3">
                                <input type="password" className="form-control pb-3 pt-3" id="password" name="password" placeholder="Mật khẩu"  />
                            </div>


                            <div className="col-10 mb-3 mt-3">
                                <input type="password" className="form-control pb-3 pt-3" id="re-enter_password" name="re-enter_password" placeholder="Nhập lại mật khẩu"  />
                            </div>

                            <div className="col-10 mb-3 mt-3">
                                <label for="accept"> <input type="checkbox" id="accept" value="accept"/> Tôi chấp nhận các điều khiển và điều kiện bao gồm việc đồng ý cho Công ty xử lý dữ liệu cá nhân cho các mục đích được đề cập trong các điều khoản. </label>
                            </div>
                            <NavLink to="/sign_in" className="btn d-flex justify-content-center col-10 mb-2 mt-2" style={{ color: "#0096FF" }}>Đăng nhập nếu bạn đã có tài khoản</NavLink>
                            <button type="submit" className="btn col-10 pb-3 pt-3 mb-5" style={{ backgroundColor: "#0096FF", color: "#FFFFFF" }} >Đăng ký</button>
                            
                        </form>
                    </div>
                </div>

                <div className="col-sm-6 col-md-5 col-lg-4">
                <div style={{backgroundColor: "#fff",  marginTop: "70px" }} align="center">
                        <form style={{ backgroundColor: "#fff" }}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h4 align="center" className="mt-5 mb-4">Thông tin công ty</h4>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="fullName" name="fullName" placeholder="Tên công ty: "  />

                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="number" className="form-control pb-3 pt-3" id="birthday" name="birthday" placeholder="Mã giới thiệu"  />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="tel" className="form-control pb-3 pt-3" id="phone" name="phone" placeholder="Số đăng ký: " />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="address" name="address" placeholder="Chỉ định: " />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="email" className="form-control pb-3 pt-3" id="email" name="email" placeholder="Quốc gia thành lập: " />
                            </div>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="CCCD" name="CCCD" placeholder="Địa chỉ: " />
                            </div>
                            
                            <div className="col-10 mb-3 mt-3">
                                <input type="text" className="form-control pb-3 pt-3" id="password" name="password" placeholder="Mã bưu điện"  />
                            </div>


                            <div className="col-10 mb-3 mt-3">
                                <input type="text" className="form-control pb-3 pt-3" id="re-enter_password" name="re-enter_password" placeholder="Quốc gia: "  />
                            </div>

                            <div className="col-10 mb-3 mt-3">
                                <input type="text" className="form-control pb-3 pt-3" id="re-enter_password" name="re-enter_password" placeholder="Tiểu bang/tỉnh: "  />
                            </div>
                            <div className="col-10 mb-3 mt-3">
                                <input type="text" className="form-control pb-3 pt-3" id="re-enter_password" name="re-enter_password" placeholder="Vai trò người mua: "  />
                            </div>
                            <div className="col-10 mb-3 mt-3">
                                <input type="text" className="form-control pb-3 pt-3" id="re-enter_password" name="re-enter_password" placeholder="Tài khoản phụ đăng ký: "  />
                            </div>
                            <div className="col-10 pb-3 mb-4" />

                        </form>
                    </div>
                </div>
            </section >
            <section className="mt-5" style={{ backgroundColor: "#F0F6FB" }}>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6 pt-5 pb-5">
                            <p style={{ fontSize: "36px" }}>Forest Carbon Trading</p>
                            <p>Hãy tham gia cùng chúng tôi ngay hôm nay và là phần của sứ mệnh toàn cầu về bảo vệ môi trường và xây dựng một tương lai bền vững hơn cho thế hệ mai sau!</p>  
                        </div>
                        <div className="col-1"></div>
                        <div className="col-md-5">
                            <img alt="" src="/images/14.png" style={{ width: "100%", marginBottom: "-5%", marginTop: "-5%" }} />
                            
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div >
    );
}
export default SignUpPage;