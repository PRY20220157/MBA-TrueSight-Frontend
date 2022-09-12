import {useNavigate} from "react-router";
import routes from "../router/routes";
import {useEffect, useState} from "react";
import {authenticate} from "../api/api_auth";
import {LS_USER_ID, LS_USER_TP, OWL_MBA_TS, SECRET_KEY} from "../util/constants";
import {getUserInfo} from "../api/api_user";
import {decryptWithAES, encryptWithAES} from "../util/AES";

function useLogin(key, value) {

    const navigate = useNavigate();

    async function handleLogin(event) {


        //const data = new FormData(event.currentTarget);
        // event.preventDefault();
        await authenticate({
            email: event.Email,
            password: event.Password,
        }).then(async res => {
            localStorage.setItem(OWL_MBA_TS, res.access);
            await getUserInfo(event.Email).then(info => {
                localStorage.setItem(LS_USER_ID, encryptWithAES(info[0].user[0].userId + ''));
                localStorage.setItem(LS_USER_TP, encryptWithAES(info[0].user[0].userTypeId + ''));
                navigate(routes.PRINCIPAL);
            })
        }).catch(res => {console.log(res)})
    };

    function handleLogout() {
        localStorage.clear();
        navigate(routes.SIGN_IN);
    }

    function validateSession() {

    }

    const goToRegisterPage = () => {
        navigate(routes.SIGN_UP)
    }
    const goToRegisterFormPage = (seleccion) => {
        navigate("/sign-up/form/" + seleccion)
    }
    const goToLogin = () => {
        navigate(routes.EMPTY)
    }
    const goToForgotPasswordPage = () => {
        navigate(routes.Forgot_Password)
    }
    const goToRecoverPasswordPage = () => {
        navigate(routes.Recover_Password)
    }

    return {
        handleSubmit: handleLogin,
        handleLogout,
        goToForgotPasswordPage,
        goToRecoverPasswordPage, goToRegisterPage, goToLogin, goToRegisterFormPage
    }
}

export default useLogin;