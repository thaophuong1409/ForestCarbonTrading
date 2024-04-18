import React from 'react';
import './App.css';
import ScrollToTop from "./components/ScrollToTop"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import SignInPage from "./views/SignInPage"
import SignUpPage from "./views/SignUpPage"
import ForgetPassword from './views/ForgetPassword'
import VeChungToi from './views/VeChungToi';
import ThiTruong from './views/ThiTruong'
import DuAn from './views/DuAn'
import CongCu from './views/CongCu'
import CongCong from './views/CongCong'
import TaiNguyen from './views/TaiNguyen'
import Trading from './views/Trading'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    // Xử lý đăng nhập thành công
    setIsLoggedIn(true);
    setUsername(username);
  };
  return (

      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/dangky">
            <SignUpPage />
          </Route>
          <Route path="/dangnhap">
            <SignInPage />
          </Route>
          <Route path="/forgetpassword">
            <ForgetPassword />
          </Route>
          <Route path="/thitruong">
            <ThiTruong/>
          </Route>
          <Route path="/duan">
            <DuAn/>
          </Route>
          <Route path="/tainguyen">
            <TaiNguyen/>
          </Route>
          <Route path="/congcu">
            <CongCu/>
          </Route>
          <Route path="/congdong">
            <CongCong/>
          </Route>
          <Route path="/trading">
            <Trading/>
          </Route>
          <Route path="/" exact>
            <VeChungToi/>
          </Route>
          <Route path="*" >
            
          </Route>
        </Switch>
      </Router >
   
  );
}

export default App;
