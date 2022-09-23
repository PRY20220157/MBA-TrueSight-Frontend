import {toast, ToastContainer} from "react-toastify";
import {CompDialogDelete} from "comps/dialog/comp_dialog_delete";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {Box, Paper, Stack} from "@mui/material";
import {
    DataGrid,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarFilterButton
} from "@mui/x-data-grid";
import {SearchOff} from "@mui/icons-material";
import {COLOR_PRIM, COLOR_SEC} from "util/constants";
import useUsers from "../../../business/admin/users";
import {useEffect} from "react";

export const ViewUsers = () => {

    const hook = useUsers()

    function CustomToolbar() {
        return (
            <GridToolbarContainer sx={{mb: 2}}>
                <GridToolbarColumnsButton name={'Columnas'}/>
                <GridToolbarFilterButton title={'Filtros'}/>
                <GridToolbarDensitySelector title={'Ancho de Filas'}/>
                <GridToolbarExport title={'Exportar'}/>
            </GridToolbarContainer>
        );
    }

    useEffect(() => {
        if (hook.showAlertSuccess) {
            toast.success(hook.alertMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            hook.setShowAlertSuccess(false)
        }
    }, [hook.showAlertSuccess]);


    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexGrow: 1,
                ml: 1,
                mr: 1
            }}>
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
                <CompDialogDelete labelAccept={'Eliminar'} message={'¿Seguro que desea eliminar el usuario seleccionado?'}
                                  handleClose={hook.handleCloseDialog} execFunc={hook.deleteUsr} open={hook.showDialog}
                                  title='Eliminar Usuario'/>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                               elevation={24}>
                            <Grid item xs={12} sx={{pt: 2, pl: 2}}>
                                <h3 style={{color: "#3966ff"}}><strong>Usuarios</strong></h3>
                            </Grid>
                            <Box sx={{height: "65vh", display: "flex", justifyContent: "center", p: 1}}>
                                <DataGrid
                                    components={{
                                        NoRowsOverlay: () => (
                                            <Stack height="100%" alignItems="center" justifyContent="center"
                                                   sx={{color: "gray"}}>
                                                <SearchOff/> No ha realizado predicciones aún.
                                            </Stack>
                                        ),
                                        Toolbar: CustomToolbar,

                                    }}
                                    rows={hook.users}
                                    columns={hook.columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                    disableMultipleSelection={true}
                                    disableSelectionOnClick
                                    loading={hook.loading}
                                    sx={{
                                        "& .MuiDataGrid-columnHeaders": {
                                            backgroundColor: COLOR_SEC,
                                            color: "rgb(255,255,255)",
                                            fontSize: 16,
                                            '& .MuiButtonBase-root': {
                                                color: 'white'
                                            }
                                        },
                                        borderColor: COLOR_SEC,
                                        '& .MuiDataGrid-cell:hover': {
                                            color: COLOR_SEC,
                                        },
                                        '& .MuiDataGrid-toolbarContainer': {
                                            color: COLOR_SEC,
                                            '& .MuiButtonBase-root': {
                                                color: COLOR_SEC
                                            }
                                        }
                                    }}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}
