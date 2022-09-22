import {Button, Paper} from "@mui/material";
import ReactPlayer from "react-player";
import {CompCoverPage} from "../../comps/comp_cover_page";
import Box from "@mui/material/Box";
import {sendResetPasswordEmail} from "../../api/api_auth";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {ViewOption} from "./view_option";
import {COLOR_DANG, COLOR_SEC} from "util/constants";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import {DeleteForever, Send} from "@mui/icons-material";
import {toast, ToastContainer} from "react-toastify";
import {CompDialogDelete} from "../../comps/dialog/comp_dialog_delete";
import {useEffect} from "react";
import {CompDialog} from "../../comps/dialog/comp_dialog";
import {useOptions} from "../../business/options";

export const ViewOptions = props => {

    const hook = useOptions()

    useEffect(() => {
        if (hook.showAlert) {
            toast.success(hook.contentAlert, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            hook.setShowAlert(false)
        }
    }, [hook.showAlert]);

    return (
        <>
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <CompDialog labelAccept={hook.labelAcceptDialog} handleClose={hook.closeDialog} execFunc={hook.execFunc}
                        open={hook.showDialog}>
                {hook.contentDialog}
            </CompDialog>
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,
                ml: 1, mr: 1
            }}>
                <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                       elevation={24}>
                    <Grid container sx={{p: 2}} spacing={1}>
                        <Grid item xs={12}>
                            <h2 style={{color: "#3966ff"}}><strong>Opciones</strong></h2>
                        </Grid>
                        <Grid item xs={4}>
                            <ViewOption title={'Eliminar todas las predicciones'} desc={'asdasd'} labelExec={'Eliminar'}
                                        icon={<DeleteForever/>} colorButton={COLOR_DANG}
                                        execFunc={(e) => {
                                            hook.setOption(1);
                                            hook.setShowDialog(true)
                                        }}/>
                        </Grid>
                        <Grid item xs={4}>
                            <ViewOption title={'Desactivar cuenta'} desc={'asdasd'} labelExec={'Desactivar'}
                                        icon={<PersonOffIcon/>} colorButton={COLOR_SEC}
                                        execFunc={(e) => {
                                            hook.setOption(2);
                                            hook.setShowDialog(true)
                                        }}/>
                        </Grid>
                        <Grid item xs={4}>
                            <ViewOption title={'Cambiar contraseña'} desc={'asdasd'} labelExec={'Enviar correo'}
                                        icon={<Send/>} colorButton={COLOR_SEC}
                                        execFunc={(e) => {
                                            hook.setOption(3);
                                            hook.setShowDialog(true)
                                        }}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>

    );
}