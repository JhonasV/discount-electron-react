import React, {useState} from 'react';
import { Users } from '../models/Users';
import RegisterForm from '../components/Authentication/RegisterForm';
import AuthService from '../services/AuthService';
const Register = () =>{
    const [isLoading, setIsLoading] = useState(false);

    const submit = async (user: Users ) => {
        setIsLoading(true);

        let result = await AuthService.Register(user);
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
            <RegisterForm submit={submit} isLoading={isLoading}/>
        </>
    );
}

export default Register;