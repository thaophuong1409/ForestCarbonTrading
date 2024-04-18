import React from 'react'
import './style.css'
import { NavLink, useLocation, Switch, Route, Redirect } from "react-router-dom";

import TopNav from '../components/TopNav';
import FooterMO from '../components/FooterMO';
import DanhMucDuAn from './danhmucduan';
import MuaTinChi from './muatinchi';
import TinDocQuyen from './tindocquyen';
import LichSuTheoDoi from './lichsugiaodich';
import TuVanVien from './tuvanvien';
import ThiTruongGiaDich from './thitruonggiaodich';
import DanhMucDangTheoDoi from './danhmucdangtheodoi';
const Trading = (props) => {
    const { pathname } = useLocation(); 
    return (
        <div >
            <TopNav />       
            <nav className="container-fluid ">
                <div className="row flex-nowrap ">
                    <div className="col-auto bgLineMenu" id="slide-menu" style={{backgroundColor: '#737927'}}>
                        <div className="d-flex flex-column">
                            <ul className="nav nav-pills d-flex flex-column sticky-top" id="menu">
                                <p style={{fontSize: '18px', color: '#DCE19D'}} className='mt-5'>Giao dịch</p>
                                <li className="nav-item mt-2 mb-2">
                                    <NavLink to="/trading/danhmucduan" className="nav-link">
                                        <img src="/images/danhsach.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Danh mục dự án</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/danhmucdangtheodoi" className="nav-link">
                                        <img src="/images/danhmuc.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Danh mục đang theo dõi</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/muatinchi" className="nav-link">
                                        <img src="/images/bangtin.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Mua tín chỉ</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/lichsugiaodich" className="nav-link">
                                        <img src="/images/new.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Lịch sử giao dịch</span>
                                    </NavLink>
                                </li>
                                <p style={{fontSize: '18px', color: '#DCE19D'}} className='mt-5'>Khám phá</p>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/tuvantunhanvien" className="nav-link">
                                        <img src="/images/thitruonggiaodich.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Tư vấn từ nhân viên</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/tindocquyen" className="nav-link">
                                        <img src="/images/copy.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Bản tin độc quyền</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/thitruonggiaodich" className="nav-link">
                                        <img src="/images/dautuvao.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Thị trường giao dịch</span>
                                    </NavLink>
                                </li>
                                
                                <p style={{fontSize: '18px', color: '#DCE19D'}} className='mt-5'>Khác</p>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/moibanbe" className="nav-link">
                                        <img src="/images/moiban.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Mời bạn bè</span>
                                    </NavLink>

                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/trogiup" className="nav-link">
                                        <img src="/images/trogiup.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Trợ giúp</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/huongdan" className="nav-link">
                                        <img src="/images/huongdan.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Hướng dẫn</span>
                                    </NavLink>
                                </li>
                                
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/caidat" className="nav-link">
                                        <img src="/images/caidat.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Cài đặt</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/trading/dangxuat" className="nav-link">
                                        <img src="/images/dangxuat.png" alt="" /> <span className="ms-1 d-none d-sm-inline">Đăng xuất</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col py-3" style={{ overflowX: "auto" }}>
                        <Route >
                        <Switch>
                            <Route path="/trading/danhmucduan">
                                <DanhMucDuAn/>
                            </Route>
                            <Route path="/trading/danhmucdangtheodoi">
                                <DanhMucDangTheoDoi/>
                            </Route>

                            <Route path="/trading/lichsugiaodich">
                                <LichSuTheoDoi/>
                            </Route>
                            <Route path="/trading/muatinchi">
                                <MuaTinChi/>
                            </Route>
                            <Route path="/trading/tuvantunhanvien">
                               <TuVanVien/>
                            </Route>
                            <Route path="/trading/tindocquyen">
                                <TinDocQuyen/>
                            </Route>
                            <Route path="/trading/moibanbe">
                                
                            </Route>
                            <Route path="/trading/trogiup">
                                
                            </Route>
                            <Route path="/trading/huongdan">
                                
                            </Route>
                            <Route path="/trading/thitruonggiaodich">
                                <ThiTruongGiaDich/>
                            </Route>
                            <Route path="/trading/caidat">
                               
                            </Route>
                            <Route path="/trading/dangxuat">
                                
                            </Route>
                            </Switch>
                        </Route>
                    </div>
                </div>
            </nav>
            <FooterMO/>
        </div >
    );
}
export default Trading;