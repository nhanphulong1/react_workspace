import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import Card from '../../components/card/Card';
import Header from '../../common/header/Header';
import '../../styles/page_dashboard.scss';

const Page_DashBoard = () => {

    let navigate = useNavigate();
    const [data, setData] = React.useState([]);
    let token = localStorage.getItem("token");
    let items = [];

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const fetchData = () =>{
        axios.get(
            'https://dev-api.hexabase.com/api/v0/workspaces',
            config
        )
            .then((response) => {
                response.data.workspaces.forEach(element => {
                    items.push({ id: element.workspace_id, name: element.workspace_name });
                });
                setData(items);
            })
            .catch();
    }

    useEffect(() => {
        if(token === null){
            navigate('/');
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <div className="div-card">
                {data.map((value, index) => {
                    return <Card key={value.id} id={value.id} name={value.name} />
                })}
            </div>
        </div>
    )
}

export default Page_DashBoard;