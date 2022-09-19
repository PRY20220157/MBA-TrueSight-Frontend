import React from "react";
import {CompCoverPage} from "comps/comp_cover_page";
import {Alert, Box, Button, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {FileUploader} from "react-drag-drop-files";
import "./stylesheet/view_massive_prediction.css";
import {usePredictionMassive} from "business/prediction/massive/prediction_massive";
import {CircleLoader} from "react-spinners";
import {ALL_GRADES, COLOR_SEC, GRADES_KEYS} from "../../../util/constants";
import {CompTooltip} from "../../../comps/tooltips/comp_tooltip";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_gpa";
import Divider from "@mui/material/Divider";

export const ViewMassiveForm = props => {

    const hook = usePredictionMassive();

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center", alignContent: "center", width: "500px"}}>

                {
                    hook.loading ?
                        <Grid container justifyContent={"center"}>
                            <CircleLoader color='#1976d2' size={150}/>
                        </Grid>
                        :
                        <form>
                            <Grid container justifyContent={"justify"} sx={{mb: 2}}>
                                Para realizar una predicción masiva primero debe descargar la plantilla,
                                en la cual encontrará los siguientes campos:
                            </Grid>
                            <Grid container>
                                {
                                    ALL_GRADES.map(g=>{
                                        return(<Grid item xs={6} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                                            {g}<>&nbsp;</>
                                            <CompTooltipGrade type={g}/>
                                        </Grid>)
                                    })
                                }

                            </Grid>
                            <Divider sx={{mt:1,mb:1}}/>

                            <Grid container justifyContent={"center"}>
                                <Stack direction="Grid" spacing={1}
                                       onClick={hook.downloadTemplate} sx={{cursor: "pointer"}}>
                                    <FileDownloadIcon fontSize="large" sx={{color: COLOR_SEC}}></FileDownloadIcon>
                                    <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}
                                                color={COLOR_SEC}>Descargar
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
            </Box>
        </>
    )
}