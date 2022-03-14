import React from "react";

import logo from '../../assets/imges/logo-hexabase.png';
import Login from '../../components/login/Login'
import Image from '../../components/image/Image';
import '../../styles/Login.scss';

const Page_Login = () =>{
    return (
        <div className='content'>
            <div>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Image src={logo} alt="Ảnh đại diện HEXABASE" />
                <Login />
            </div>
        </div>
    );
} 

export default Page_Login