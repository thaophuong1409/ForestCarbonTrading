import React from 'react'
import { NavLink } from "react-router-dom"
import Footer from '../components/Footer.js'
import TopNav from '../components/TopNav.js'
import CodeGetPass from '../components/CodeGetPass.js'
import { useState, useContext } from 'react'
   
const ForgetPassword = (props) => {

    return (
        <div>
            <TopNav />
            <section className="row g-0" style={{backgroundImage: 'url(/images/forest2.png)', width: '100%'}}>
                <div className="col-1"></div>
                <div className="col-sm-6 col-md-5 col-lg-4">
                    <div style={{backgroundColor: "#fff", borderRadius: "5px", marginTop: "70px" }} align="center">
                        <form>
                            <br/>
                            <h1 align="center" className="mt-5 mb-4">Quên mật khẩu</h1>
                            <div className="mb-3 mt-3 col-10">
                                <input type="text" className="form-control pb-3 pt-3" id="username" name="username" placeholder="Email đăng ký"  />
                            </div>

                            <NavLink to="/sign_in" className="text-decoration-none d-flex justify-content-end col-10" style={{ fontWeight: "600", color: "black" }}>Quay về trang đăng nhập</NavLink>
                            <br></br>
                            <button type="submit" className="btn col-10 pb-3 pt-3" style={{ backgroundColor: "#0096FF", color: "#FFFFFF", marginBottom: "300px" }} >Gửi</button>
                            { (
                                <CodeGetPass trigger="true">
                                    <div className="mb-3 mt-3 col-10">
                                        <input type="text" className="form-control pb-3 pt-3" id="code" name="code" placeholder="Mã xác nhận"  />

                                    </div>
                                </CodeGetPass>
                            )}
                            <div className="col-10 pb-3 mb-4" />
                        </form>
                    </div>
                </div>

                <div className="col-sm-5 col-md-6 col-lg-7 d-none d-sm-block"><img alt="" src="/images/kham5.png" style={{ width: "90%" }} align="right" /></div>
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
export default ForgetPassword;