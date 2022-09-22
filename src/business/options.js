import {useEffect, useState} from "react";
import {deleteAllPredictions} from "../api/api_prediction";
import {sendResetPasswordEmail} from "../api/api_auth";

export const useOptions = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [stateAlert, setStateAlert] = useState('success');
    const [contentAlert, setContentAlert] = useState('');
    const [option, setOption] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [labelAcceptDialog, setLabelAcceptDialog] = useState('');
    const [contentDialog, setContentDialog] = useState();

    const closeDialog = () => {
        setShowDialog(false)
    }

    useEffect(() => {
        showContentDialog()
    }, [option]);


    const execOption = async () => {
        alert(option)
        switch (option) {
            case 1:
                await deleteAllPredictions().then(res => {
                    setContentAlert('Predicciones eliminadas correctamente')
                    setShowDialog(false)
                    setShowAlert(true)
                }).catch(res => {
                    if (res.response.status === 404 || res.status === 500) {
                        setShowAlert({show: true, state: 'error', content: 'Error en el servidor'})
                    }
                })
                break;
            case 2:
                break;
            case 3:
                await sendResetPasswordEmail().then(res => {
                    setContentAlert('Correo enviado. Revise su bandeja por favor.')
                    setShowDialog(false)
                    setShowAlert(true)
                })
                break;
        }
    }
    const execFunc = () => {
        execOption()
    }

    const showContentDialog = async () => {
        switch (option) {
            case 1:
                setLabelAcceptDialog('Eliminar')
                setContentDialog(<>¿Seguro que desea eliminar todas las predicciones?</>);
                break;
            case 2:
                setLabelAcceptDialog('Desactivar')
                setContentDialog(<>¿Seguro que desea desactivar su cuenta?</>);
                break;
            case 3:
                setLabelAcceptDialog('Enviar')
                setContentDialog(<>¿Enviar correo para restaurar contraseña?</>);
                break;
            default:
                break;
        }
    }

    return {
        showAlert, setShowAlert, stateAlert, contentAlert,
        setOption, showDialog, labelAcceptDialog, setShowDialog, contentDialog,
        closeDialog, execFunc, showContentDialog
    }
}