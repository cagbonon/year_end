/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { LoginForms } from "../../components/login/login_com";
import { Password_change } from "../../components/password-reset/PasswordReset.com";

import "./loginpage.css";


export const Loginpage = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [frmLoad, setFrmLoad] = useState('login')
const navigate = useNavigate();



//create a function to set the value

const change_value = e => {
    const {name, value} = e.target;
    switch(name) {
        case 'email':
            setEmail(value)
            break;
        case 'password':
            setPassword(value)
            break;
        default:
            break;
    }
};

const manage_submit = e => {
    e.preventDefault();
    if (!password || !email) {
       return alert("You must fill the fied")
    }
    // api to submit the form
    console.log(email, password);
};

const manage_reset_submit = e => {
    e.preventDefault();
    if (!email) {
       return alert("Enter the email")
    }
    console.log('hello');
    // api to submit the form
    // console.log(email);
    navigate("/dashboard")
    axios.post("")
};
const form_twitch = frmtype => {
    setFrmLoad(frmtype);
}
    return <div className="login-page ">
        <Button className="form-box btn-secondary">
            {frmLoad === 'login' && <LoginForms 
            change_value={change_value}
            manage_submit={manage_submit}
            form_twitch={form_twitch}
            email={email}
            is_pass={password}
            />
}
            {frmLoad === 'rest' && <Password_change
            change_value={change_value}
            manage_reset_submit={manage_reset_submit}
            form_twitch={form_twitch}
            email={email}
            />}
        </Button>
    </div>
}
