import {useNavigate, useParams} from "react-router";
import routes from "../router/routes";
import {useEffect, useState} from "react";
import {
    activateAccount,
    authenticate, register, registerUserInfo,
    resetPasswd,
    resetPasswordConfirm,
    sendResetPasswordEmail
} from "../api/api_auth";
import {LS_USER_EMAIL, LS_USER_ID, LS_USER_TP, OWL_MBA_TS, SECRET_KEY} from "../util/constants";
import {getUserInfo} from "../api/api_user";
import {decryptWithAES, encryptWithAES} from "../util/AES";
import * as api_pred from "../api/api_prediction";

function useAuth(init = {activate: false}) {

    const navigate = useNavigate();
    const [alertContent, setAlertContent] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [open, setOpen] = useState(false);
    let {uid, token} = useParams();

    useEffect(() => {
        if (init.activate) {
            console.log(uid, token)
            activateAccount({
                uid, token
            }).then(() => goToLogin())
        }
    }, []);

    const registerUser = (acc, info) => {
        register(acc).then(r => {
            console.log(acc)
            info.userId = r.data.userId
            console.log(info)
            registerUserInfo(info).then(res => {
                setOpen(true)
            })
        })
    }

    async function handleLogin(event) {
        localStorage.clear();
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
            api_pred.calculateAverage().then(r => console.log(r))
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

    const sendEmailResetPasswd = (event) => {
        sendResetPasswordEmail(event.Email).then(r => {
            setOpen(true)
        }).catch(res => {
            if (res.response.status === 401) {
                setAlertContent("Usuario o contraseña incorrectos.")
                setShowAlert(true)
            }
            if (res.response.status === 404 || res.status === 500) {
                alert('aa')
                setAlertContent("Error en el servidor")
                setShowAlert(true)
            }
        })
    }
    const activateAcc = () => {
        activateAccount({
            uid,
            token
        }).then(r => {
            setAlertContent("Su cuenta ha sido activada")
            setShowAlert(true)
            goToLogin()
        }).catch(res => {
            if (res.response.status === 404 || res.status === 500) {
                setAlertContent("Error en el servidor")
                setShowAlert(true)
            }
        })
    }


    const resetPassword = (event) => {
        resetPasswd({
            uid,
            token,
            new_password: event.NewPassword,
            re_new_password: event.RepeatPassword
        }).then(r => {
            setOpen(true)
        }).catch(res => {
            console.log(res)
            if (res.response.status === 404 || res.status === 500) {
                setAlertContent("Error en el servidor")
                setShowAlert(true)
            }
        })
    }
    return {
        handleSubmit: handleLogin,
        handleLogout,
        goToForgotPasswordPage,
        goToRecoverPasswordPage, goToRegisterPage, goToLogin, goToRegisterFormPage, resetPassword, sendEmailResetPasswd,
        showAlert, setShowAlert, alertContent, activateAcc, open, registerUser
    }
}

export default useAuth;