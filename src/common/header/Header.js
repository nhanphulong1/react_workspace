import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/Header.scss";
import { Button } from 'react-bootstrap';

const Header = () => {
    let navigate = useNavigate();

    const handleLogOut = () =>{
        localStorage.removeItem("token");
        navigate('/');
    }

    const toAddForm=()=>{
        navigate('/add');
    }

    return (
    <div className="header">
        <h2>DASH BOARD</h2>
        <div className="header-button">
            <Button onClick={toAddForm} variant="success">Add</Button>
            <Button onClick={handleLogOut} variant="danger">Log out</Button>
        </div>
    </div>);
}

export default Header;