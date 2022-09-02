import {useNavigate} from "react-router";
import routes from "../router/routes";
import {useEffect, useState} from "react";
import {authenticate} from "../api/api_auth";
import {OWL_MBA_TS} from "../util/constants";

function useLogin(key, value) {

    const navigate = useNavigate();

     async function handleLogin(event) {

       

        //const data = new FormData(event.currentTarget);
        // event.preventDefault();
        await authenticate({
            email: event.Email,
            password: event.Password,
        }).then(res => {
            localStorage.setItem(OWL_MBA_TS, res.auth_token);
            navigate(routes.PRINCIPAL);
        })
    };
     function handleLogout(){
         localStorage.clear();
         navigate(routes.SIGN_IN);
     }
    function validateSession(){

    }
    const goToRegisterPage = () =>{
        navigate(routes.SIGN_UP)
    }
    const goToRegisterFormPage = (seleccion) =>{
        navigate("/sign-up/form/"+seleccion)
    }
    const goToLogin = () =>{
        navigate(routes.EMPTY)
    }
    const goToForgotPasswordPage = () =>{
        navigate(routes.Forgot_Password)
    }
    const goToRecoverPasswordPage = () =>{
        navigate(routes.Recover_Password)
    }

    return {
        handleSubmit: handleLogin,
        handleLogout,
        goToForgotPasswordPage,
        goToRecoverPasswordPage,goToRegisterPage,goToLogin,goToRegisterFormPage
    }
}

export default useLogin;