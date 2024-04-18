import React, { useState, useEffect, useContext } from 'react';
import './style.css'
import TopNav from '../components/TopNav.js'
import { NavLink, useHistory } from "react-router-dom"
import Footer from '../components/Footer.js'
import Trading from './Trading.js';


const SignInPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();
    const handleLogin = () => {
        // Kiểm tra thông tin đăng nhập
        if (username === 'user1@gmail.com' && password === '123456') {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Đăng nhập thành công');
            history.push('/trading');
        } else {
        alert('Tên người dùng hoặc mật khẩu không đúng');
        }
    };
    return (
        <div>
            <TopNav />
            <section className="row g-0"  style={{backgroundImage: 'url(/images/forest2.png)', width: '100%'}}>
                <div className="col-1"></div>
                <div className="col-sm-6 col-md-5 col-lg-4">
                    <div style={{backgroundColor: "#fff", borderRadius: "5px",  marginTop: "70px" }} align="center">
                        <form> 
                            <br></br>
                            <h1 align="center" className="mt-5 mb-4">Đăng nhập</h1>
                            <div className="mb-3 mt-3 col-10">
                                <input type="email" className="form-control pb-3 pt-3" id="username" name="username" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="col-10 mt-3 mb-2">
                                <input type="password" className="form-control pb-3 pt-3" id="password" name="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <NavLink to="/forgetpassword" className="text-decoration-none d-flex justify-content-end col-10" style={{ fontWeight: "600", color: "black" }}>Bạn quên mật khẩu?</NavLink>

                            <NavLink to="/sign_up" className="btn d-flex justify-content-center col-10 mb-2 mt-2" style={{ color: "#0096FF" }}>Nếu bạn chưa có tài khoản, đăng ký ngay!</NavLink>

                            {<button type="submit" className="btn col-10 pb-3 pt-3" style={{ backgroundColor: "#0096FF", color: "#FFFFFF", marginBottom: "300px" }} onClick={handleLogin} >Đăng nhập</button>}
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
                            <p >Hãy tham gia cùng chúng tôi ngay hôm nay và là phần của sứ mệnh toàn cầu về bảo vệ môi trường và xây dựng một tương lai bền vững hơn cho thế hệ mai sau!</p>  
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
export default SignInPage;