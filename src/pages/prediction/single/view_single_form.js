import {Alert, alpha, Card, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import '../single/stylesheet/view_single_form.css'
import {usePrediction} from "../../../business/prediction/single/prediction";
import "./single_prediction.css"
import Box from "@mui/material/Box";
import {useForm} from 'react-hook-form';
import {CompCoverPage} from "../../../comps/comp_cover_page";

export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    const {register, reset, formState: {errors}, handleSubmit} = useForm();

    const onclear = () => {
        reset();
    }
    return (

        <>
            <div className="singleprediction-container">
                <CompCoverPage>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                    >
                        <Paper elevation={10}
                               sx={{minWidth: 600, borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                            <form onSubmit={handleSubmit(hookPrediction.onSubmit)}>
                                <Grid container justifyContent={"center"}>
                                    <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}>Predicción
                                        de Éxito en
                                        MBA</Typography>
                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    <TextField variant="filled" label="gmat" margin="normal" type={"number"}
                                               sx={{minWidth: 500}}
                                               {...register('gmat', {
                                                   required: true,
                                               })}
                                    ></TextField>
                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    {errors.gmat?.type === 'required' &&
                                        <Alert severity="error">gmat es un Campo requerido</Alert>}
                                </Grid>

                                <Grid container justifyContent={"center"}>
                                    <TextField variant="filled" label="gpa" margin="normal" type={"number"}
                                               sx={{minWidth: 500}}
                                               {...register('gpa', {
                                                   required: true,
                                               })}
                                    ></TextField>

                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    {errors.gpa?.type === 'required' &&
                                        <Alert severity="error">gpa es un Campo requerido</Alert>}
                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    <TextField variant="filled" label="wk_xp" margin="normal" sx={{minWidth: 500}}
                                               {...register('wk_xp', {
                                                   required: true,
                                               })}
                                    ></TextField>

                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    {errors.wk_xp?.type === 'required' &&
                                        <Alert severity="error">Work Experience es un Campo requerido</Alert>}
                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    <TextField variant="filled" label="app_type" margin="normal" type={"number"}
                                               sx={{minWidth: 500}}
                                               {...register('app_type', {
                                                   required: true,
                                               })}

                                    ></TextField>

                                </Grid>
                                <Grid container justifyContent={"center"}>
                                    {errors.app_type?.type === 'required' &&
                                        <Alert severity="error">APP TYPE es un Campo requerido</Alert>}
                                </Grid>
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <Grid container justifyContent={"space-around"}>
                                    <Button variant="contained" size="large" onClick={onclear}>Limpiar</Button>
                                    <Button variant="contained" size="large" type="submit">Predecir</Button>
                                </Grid>
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                            </form>
                        </Paper>

                    </Box>
                </CompCoverPage>

            </div>
        </>
    );
}
