
import React, {useState} from "react";
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../input/Input';


function Login(props){
    const [account, setAccount] = useState({email: '', password:'', error: false});
    const [errorForm, setErrorForm] = useState({erremail: false, errpassword:false, error: false});
    let navigate = useNavigate();

    const handleChange = (event)=>{
        setAccount({...account,[event.target.name]:event.target.value});
    }

    const validationForm = (user)=>{
        let errorLogin = {email:false,password:false}
        if(user.email === ''){
            errorLogin.email = true;
        }
        else {
            errorLogin.email = false;
        }
        if(user.password === ''){
            errorLogin.password = true;
        }
        else {
            errorLogin.password = false;
        }
        // console.log(errorLogin);
        setErrorForm( (prevState) => {
            // console.log(errorLogin);
            return {error: false,erremail:errorLogin.email, errpassword: errorLogin.password}
        }
        );
    }

    const onSubmit = async (event) =>{
        event.preventDefault();
        let user = {
            "email": account.email,
            "password": account.password
        };
        validationForm(user);
        if(user.email !== '' && user.password !== ''){
            axios.post('https://dev-api.hexabase.com/api/v0/login', user)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                setErrorForm({ error: false});
                navigate('/dashboard');
            })
            .catch(error => {
                setErrorForm({ error: error.response.status});
            });
        }
    }

    return (
        // <div className='content'>
        //     <div>
                
                <form onSubmit={onSubmit} className="form-login">
                        <div>
                            <div><label>Username or email address</label></div>
                            <Input type="text" name="email" value={account.email} change={handleChange} />
                            { (errorForm.error===500 || errorForm.error===400) &&
                                <p className="showError text-danger"> Tài khoản đăng nhập không chính xác!</p> 
                            }
                            { errorForm.erremail &&
                                <p className="showError text-danger"> Vui lòng điền thông tin tài khoản!</p> 
                            }
                        </div>
                        <div>
                            <div>
                                <label>Password</label>
                                <Link to="/quenMK">Forgot password?</Link>
                            </div>
                            <Input type="password" name="password" value={account.password} change={handleChange} />
                            { errorForm.error === 401 &&
                                <p className="showError text-danger"> Mật khảu không chính xác!</p> 
                            }
                            { errorForm.errpassword &&
                                <p className="showError text-danger"> Vui lòng điền mật khẩu!</p> 
                            }
                        </div>
                        <div id='div-login'>
                            <Button type="submit" variant="success">Sign in</Button>
                        </div>
                </form>
        //     </div>
        // </div>
    );
}

export default Login;