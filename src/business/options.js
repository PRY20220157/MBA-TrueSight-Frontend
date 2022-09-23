import {useEffect, useState} from "react";
import {deleteAllPredictions, deleteUser} from "../api/api_prediction";
import {sendResetPasswordEmail} from "../api/api_auth";
import routes from "../router/routes";
import {useNavigate} from "react-router";
import {Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {COLOR_SEC} from "../util/constants";
import {DeleteForever, ForwardToInbox, PersonOff} from "@mui/icons-material";

export const useOptions = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [stateAlert, setStateAlert] = useState('success');
    const [contentAlert, setContentAlert] = useState('');
    const [option, setOption] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [labelAcceptDialog, setLabelAcceptDialog] = useState('');
    const [contentDialog, setContentDialog] = useState(<></>);
    const navigate = useNavigate();

    const closeDialog = () => {
        setShowDialog(false)
    }

    useEffect(() => {
        showContentDialog()
    }, [option]);


    const execOption = async () => {
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
                await deleteUser().then(res => {
                    setContentAlert('Cuenta eliminada')
                    setShowDialog(false)
                    setShowAlert(true)
                    navigate(routes.EMPTY)
                })
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
                setContentDialog(<>
                    <Grid container display='flex' justifyContent='center'>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <DeleteForever sx={{color:"#C32826", fontSize:"10rem"}}/>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <h4><strong>Eliminar Predicciones</strong></h4>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            ¿Seguro que desea eliminar todas las predicciones?
                        </Grid>
                    </Grid>
                </>);
                break;
            case 2:
                setLabelAcceptDialog('Eliminar')
                setContentDialog(
                    <Grid container display='flex' justifyContent='center'>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <PersonOff sx={{color:"#C32826", fontSize:"10rem"}}/>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <h4><strong>Eliminar Cuenta</strong></h4>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            ¿Seguro que desea desactivar su cuenta?
                        </Grid>
                    </Grid>
                );
                break;
            case 3:
                setLabelAcceptDialog('Enviar')
                setContentDialog(<>
                    <Grid container display='flex' justifyContent='center'>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            < ForwardToInbox sx={{color:COLOR_SEC, fontSize:"10rem"}}/>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <h4><strong>Restablecer Contraseña</strong></h4>
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='center'>
                            ¿Enviar correo para restaurar contraseña?
                        </Grid>
                    </Grid>
                </>);
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