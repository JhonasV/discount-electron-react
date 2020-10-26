import React, {useState} from 'react';
import Form from '../UI/Form';
import {Input} from '../UI/Controls';
import {Button} from '../UI/Buttons';
import { Users } from '../../models/Users';

type IRegisterFormProps = {
    submit: any;
    isLoading: boolean;
}

const RegisterForm = ({submit, isLoading}: IRegisterFormProps) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = (event: any ) =>{
        event.preventDefault();

        let user: Users = {
            userName,
            password
        };

        submit(user);
    }
    return(
        <Form onSubmit={(event) => onSubmit(event)}>         
            <h2>Registrarse</h2>
            <Input marginTop={2} value={userName} required placeholder={"Nombre de Usuario"} type={"text"} onChange={(event) => setUserName(event.target.value)}/>
            <Input marginTop={2} value={password} required placeholder={"Contraseña"} type={"password"} onChange={(event) => setPassword(event.target.value)}/>
            <Input marginTop={2} value={confirmPassword} required placeholder={"Confirmar contraseña"} type={"password"} onChange={(event) => setConfirmPassword(event.target.value)}/>

            <Button primary marginTop={2}>{isLoading ? "Cargando..." : "Enviar"}</Button>
        </Form>
    )
}

export default RegisterForm;
