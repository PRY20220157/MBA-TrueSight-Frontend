import TextField from "@mui/material/TextField";
import {CompCoverPage} from "comps/comp_cover_page";
import {usePredictionMassive} from "business/prediction/prediction_massive";
import {Alert, Box, Button, Card, Grid, Paper, Stack, Typography} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { FileUploader } from "react-drag-drop-files";
import {useForm} from 'react-hook-form';
import { useState } from "react";
import './stylesheet/view_massive_prediction.css'


export const ViewMassivePrediction = () => {

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
                


                 <Paper elevation={10} sx={{minWidth:600,borderRadius:8,background: 'rgba(250, 250, 250, 0.9)'}}>
                    <form >
                    <Grid container justifyContent={"center"}>
                      <Stack direction="row" spacing={1}>
                      <FileDownloadIcon fontSize="large"></FileDownloadIcon>
                      <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"} >Descargar Plantilla</Typography>

                      </Stack>


                    </Grid>
                   
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <Grid container justifyContent={"center"}>
                        <FileUploader 
                        multiple={true}
                        handleChange={hook.handleChange}  
                        name="file" 
                        types={hook.fileTypes}  
                         
                        ></FileUploader>

                    </Grid>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <Grid container justifyContent={"center"}>
                           <p>{hook.file ? `Archivo guardado` : "Ningun Archivo subido"}</p>
                    </Grid>
                    
                    {hook.error && <Alert severity="error">No hay archivos</Alert>}
                    &nbsp;&nbsp;
                
                    <Grid container justifyContent={"center"}>
                        <Button  variant="contained"   onClick={(e) => hook.uploadFile(hook.file)}>Continuar</Button>

                    </Grid>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    </form>

                 </Paper>
            </Box>
               


            </CompCoverPage>
            </div>
        </>
    )
}