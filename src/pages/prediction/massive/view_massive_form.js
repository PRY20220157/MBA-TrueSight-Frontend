import React from "react";
import {CompCoverPage} from "comps/comp_cover_page";
import {Alert, Box, Button, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {FileUploader} from "react-drag-drop-files";
import "./stylesheet/view_massive_prediction.css";
import {usePredictionMassive} from "business/prediction/massive/prediction_massive";

export const ViewMassiveForm = props => {

    const hook = usePredictionMassive();

    return (
        <>
            <div className="massiveprediction-container">
                <CompCoverPage>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                    >
                        <Paper elevation={10}
                               sx={{
                                   padding: 3,
                                   minWidth: 600,
                                   borderRadius: 8,
                                   background: 'rgba(250, 250, 250, 0.9)'
                               }}>
                            {
                                hook.loading ?
                                    <Grid container justifyContent={"center"}>
                                        <CircularProgress size={200}/>
                                    </Grid>
                                    :
                                    <form>
                                        <Grid container justifyContent={"center"}>
                                            <Stack direction="Grid" spacing={1}
                                                   onClick={(e) => console.log(e)} sx={{cursor: "pointer"}}>
                                                <FileDownloadIcon fontSize="large"></FileDownloadIcon>
                                                <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}>Descargar
                                                    Plantilla</Typography>
                                            </Stack>
                                        </Grid>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
                                        <Grid container justifyContent={"center"}>
                                            <Grid item xs={12}>
                                                <FileUploader
                                                    multiple={false}
                                                    handleChange={hook.handleChange}
                                                    name="file"
                                                    types={hook.fileTypes}
                                                    label={'Suba o  arrastre su archivo aqui'}
                                                    hoverTitle={'Suelte aqui'}
                                                >
                                                </FileUploader>
                                            </Grid>

                                        </Grid>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
                                        <Grid container justifyContent={"center"}>
                                            <p>{hook.file ? `Archivo subido: ` + hook.file.name : "Ningun Archivo subido"}</p>
                                        </Grid>
                                        {hook.error && <Alert severity="error">No hay archivos</Alert>}
                                        <Grid container justifyContent={"center"}>
                                            <Button variant="contained"
                                                    onClick={(e) => hook.uploadFile(hook.file)}
                                                    disabled={hook.file === undefined}
                                            >Continuar</Button>
                                        </Grid>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
                                    </form>
                            }
                        </Paper>
                    </Box>
                </CompCoverPage>
            </div>
        </>
    )
}