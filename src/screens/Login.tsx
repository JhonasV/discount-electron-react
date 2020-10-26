import React, {useState} from 'react';
import { Users } from '../models/Users';
import LoginForm from '../components/Authentication/LoginForm';
import AuthService from '../services/AuthService';
import {useHistory} from 'react-router';
const Login = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const submit = async (user: Users ) => {
        setIsLoading(true);

        let result = await AuthService.Login(user);
        if(result.success){
            // save token and redirect
            AuthService.SaveToken(result.data);
            // Redirect
            window.location.reload();
        }else{
            alert(result.messages);
            setIsLoading(false);
        }
    }

    return(
        <>
            <LoginForm submit={submit} isLoading={isLoading}/>
        </>
    );
}

export default Login;