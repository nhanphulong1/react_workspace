import Header from '../../common/header/Header';
import Form_Add from '../../components/form-add/Form_Add';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import '../../styles/page_dashboard.scss';

const Page_addWorkspace = () => {
    return (
        <div>
            <Header />
            <Form_Add />
        </div>
    );
}

export default Page_addWorkspace;