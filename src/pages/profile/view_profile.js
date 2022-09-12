import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const ViewProfile = () => {
    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,}}>

            <Paper elevation={10} sx={{
                padding: 4, width: "75%", borderRadius: 8,
                background: 'rgba(250, 250, 250, 0.9)'
            }}>

                <Grid container spacing={2} display={'box'} justifyContent={'center'}>
                    <Grid item xs={12}><h1>Información del Usuario</h1></Grid>
                    <Grid item xs={6} display={'box'} justifyContent={"center"}>
                        <TextField variant="filled" label="Nombre" margin="normal" type={"text"} disabled defaultValue={'asdfads'}/>
                    </Grid>
                    <Grid item xs={6} justifyContent={"center"}>
                        <TextField variant="filled" label="Apellidos" margin="normal" type={"text"} disabled/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}