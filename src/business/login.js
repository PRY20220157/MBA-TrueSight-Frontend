import {useNavigate} from "react-router";
import routes from "../router/routes";
import {useEffect, useState} from "react";

function useLogin() {

    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const goToPrincipalPage = () =>{
        navigate(routes.PRINCIPAL)
    }

    return {
        handleSubmit,
        goToPrincipalPage
    }
}

export default useLogin;