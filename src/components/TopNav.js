import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
const TopNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Kiểm tra trạng thái đăng nhập từ Local Storage khi component được mount
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
        setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Xử lý đăng xuất: cập nhật trạng thái đăng nhập và xóa Local Storage
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light" >
            <div className="container" id="topNav">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    Menu
                    <i class="fa-solid fa-caret-down"></i>
                </button>

                <div className="">
                    <img src="/images/forestLogo.png" alt="Avatar Logo" style={{  height: "90px" }} />
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to="/" exact>Về chúng tôi</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to="/thitruong">Thị trường</NavLink>
                        </li>
                        <li className="nav-item me-4" >
                            <NavLink className="nav-link" to="/duan">Dự án</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to="/tainguyen">Tài nguyên</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to="/congcu">Công cụ</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="nav-link" to="/congdong">Cộng đồng</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/trading">Trading</NavLink>
                            </li>
                            <Button className="nav-item me-4" onClick={handleLogout} >
                                Đăng xuất
                            </Button>
                            </>
                        ) : (
                            <>
                            <li>
                                <NavLink className="nav-link" to="/dangnhap">Đăng nhập</NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link" to="/dangky">Đăng ký</NavLink>
                            </li>
                            </>
                        )   
                    }
                        
                    </ul>
                </div>
                

            </div>

        </nav >
    )
}
export default TopNav;