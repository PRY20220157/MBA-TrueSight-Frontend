import {useNavigate, useParams} from "react-router";
import routes from "../router/routes";
import {useEffect, useState} from "react";
import {authenticate, resetPasswd, resetPasswordConfirm} from "../api/api_auth";
import {LS_USER_EMAIL, LS_USER_ID, LS_USER_TP, OWL_MBA_TS, SECRET_KEY} from "../util/constants";
import {getUserInfo} from "../api/api_user";
import {decryptWithAES, encryptWithAES} from "../util/AES";

function useLogin(key, value) {

    const navigate = useNavigate();
    const [alertContent, setAlertContent] = useState();
    const [showAlert, setShowAlert] = useState(false);
    let { uid,token } = useParams();

    async function handleLogin(event) {

        await authenticate({
            email: event.Email,
            password: event.Password,
        }).then(async res => {
            localStorage.setItem(OWL_MBA_TS, res.data.access);
            await getUserInfo(event.Email).then(info => {
                localStorage.setItem(LS_USER_ID, encryptWithAES(info[0].user[0].userId + ''));
                localStorage.setItem(LS_USER_TP, encryptWithAES(info[0].user[0].userTypeId + ''));
                localStorage.setItem(LS_USER_EMAIL, encryptWithAES(event.Email));
                navigate(routes.HISTORY);
            })
        }).catch(res => {
            if (res.response.status === 401) {
                setAlertContent("Usuario o contraseña incorrectos.")
                setShowAlert(true)
            }
            if (res.response.status === 404 || res.status === 500) {
                setAlertContent("Error en el servidos")
                setShowAlert(true)
            }
        })
    }

    function handleLogout() {
        localStorage.clear();
        navigate(routes.SIGN_IN);
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

    const resetPassword = (event) => {
        resetPasswd({
            uid,
            token,
            new_password: event.NewPassword,
            re_new_password: event.RepeatPassword
        }).then(r  =>{
            setAlertContent("Contraseña cambiada exitosamente.")
            setShowAlert(true)
            goToLogin()
        })
    }
    return {
        handleSubmit: handleLogin,
        handleLogout,
        goToForgotPasswordPage,
        goToRecoverPasswordPage, goToRegisterPage, goToLogin, goToRegisterFormPage,resetPassword,
        showAlert, setShowAlert, alertContent
    }
}

export default useLogin;