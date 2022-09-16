import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useUser from "../../business/user";
import {CircleLoader} from "react-spinners";

export const ViewProfile = () => {
    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();

    const hook = useUser()
    const styleFields = {width: "100%"}
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,}}>

            <Paper elevation={10} sx={{
                padding: 4, width: "55%", borderRadius: 8,
                background: 'rgba(250, 250, 250, 0.9)'
            }}>
                {
                    hook.loading ?
                        <Grid container justifyContent={"center"}>
                            <CircleLoader color='#1976d2' size={150}/>
                        </Grid>
                        :
                        <Grid container spacing={2} display={'box'} justifyContent={'center'}>


                            <Grid item xs={12}><h1>Información del Usuario</h1></Grid>
                            <Grid item xs={6} display={'flex'} justifyContent={"center"}>
                                <TextField variant="outlined" label="Nombre" margin="normal" type={"text"} inputProps={
                                    {readOnly: true,}
                                }
                                           defaultValue={hook.info.name} sx={styleFields}/>
                            </Grid>
                            <Grid item xs={6} justifyContent={"center"}>
                                <TextField variant="outlined" label="Apellidos" margin="normal" type={"text"}
                                           inputProps={
                                               {readOnly: true,}
                                           }
                                           defaultValue={hook.info.lastName} sx={styleFields}/>
                            </Grid>
                            <Grid item xs={6} justifyContent={"center"}>
                                <TextField variant="outlined" label="Correo" margin="normal" type={"text"} inputProps={
                                    {readOnly: true,}
                                }
                                           defaultValue={hook.info.email} sx={styleFields}/>
                            </Grid>
                            <Grid item xs={6} justifyContent={"center"}>
                                <TextField variant="outlined" label="Tipo de cuenta" margin="normal" type={"text"}
                                           inputProps={
                                               {readOnly: true,}
                                           }
                                           defaultValue={hook.info.userType} sx={styleFields}/>
                            </Grid>
                            <Grid item xs={6} justifyContent={"center"}>
                                <TextField variant="outlined" label="País" margin="normal" type={"text"} inputProps={
                                    {readOnly: true,}
                                }
                                           defaultValue={hook.info.country} sx={styleFields}/>
                            </Grid>
                            <Grid item xs={6} justifyContent={"center"}>
                                <TextField variant="outlined" label="Universidad" margin="normal" type={"text"}
                                           inputProps={
                                               {readOnly: true,}
                                           }
                                           defaultValue={hook.info.university} sx={styleFields}/>
                            </Grid>
                        </Grid>
                }
            </Paper>
        </Box>
    )
}