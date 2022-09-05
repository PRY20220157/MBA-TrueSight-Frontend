import React from "react";
import {CompCoverPage} from "comps/comp_cover_page";
import {Alert, Box, Button, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {FileUploader} from "react-drag-drop-files";
import "./stylesheet/view_massive_prediction.css"
export const ViewMassiveForm = props => {
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
                               sx={{minWidth: 600, borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                            {
                                props.hook.loading ?
                                    <Grid container justifyContent={"center"}>
                                        <CircularProgress size={200}/>
                                    </Grid>
                                    :
                                    <form>
                                        <Grid container justifyContent={"center"}>
                                            <Stack direction="row" spacing={1}>
                                                <FileDownloadIcon fontSize="large"></FileDownloadIcon>
                                                <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}>Descargar
                                                    Plantilla</Typography>
                                            </Stack>
                                        </Grid>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
                                        <Grid container justifyContent={"center"}>
                                            <FileUploader
                                                multiple={false}
                                                handleChange={props.hook.handleChange}
                                                name="file"
                                                types={props.hook.fileTypes}
                                            ></FileUploader>
                                        </Grid>
                                        &nbsp;&nbsp;
                                        &nbsp;&nbsp;
                                        <Grid container justifyContent={"center"}>
                                            <p>{props.hook.file.length > 0 ? `Archivo subido: ` + props.hook.file[0].name : "Ningun Archivo subido"}</p>
                                        </Grid>
                                        {props.hook.error && <Alert severity="error">No hay archivos</Alert>}
                                        &nbsp;&nbsp;
                                        <Grid container justifyContent={"center"}>
                                            <Button variant="contained"
                                                    onClick={(e) => props.hook.uploadFile(props.hook.file)}>Continuar</Button>
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