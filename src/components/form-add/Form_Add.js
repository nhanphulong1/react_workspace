import React from "react";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import "../../styles/FormAdd.scss";
import axios from "axios";

const Form_Add = () => {
    let url = "https://dev-api.hexabase.com/api/v0/workspaces";
    let token = localStorage.getItem("token");
    let navigate = useNavigate();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function addWorkspace(name){
        let kq = await axios.post(url, name, config);
        if(kq.status === 200){
            alert("Thêm mới workspace thành công!");
            navigate('/dashboard');
        }else{
            
        }
    };

    return (
        <div className="content-form">
            <h2>ADD WORKSPACE</h2>
            <Formik
                initialValues={{ name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Vui lòng nhập tên workspace!';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    addWorkspace(values)
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <p className="text-danger">{errors.name && touched.name && errors.name}</p>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            Add
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Form_Add;