import {Alert, alpha, Card, MenuItem, Paper, Select, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import '../single/stylesheet/view_single_form.css'
import {usePrediction} from "business/prediction/single/prediction";
import "./single_prediction.css"
import Box from "@mui/material/Box";
import {useForm} from 'react-hook-form';
import {CompCoverPage} from "comps/comp_cover_page";
import {useEffect, useState} from "react";
import {CircleLoader, ClipLoader, GridLoader} from "react-spinners";
import {MBA_TYPES} from "util/constants";

export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    const {register, reset, formState: {errors}, handleSubmit, setError} = useForm({criteriaMode: "all"});
    const [errorGmatMsg, setErrorGmatMsg] = useState('');
    const onClear = () => {
        reset();
    }
    useEffect(() => {
        validateGmat()
    }, [errors.gmat]);

    const validateGmat = () => {
        if (errors.gmat !== undefined) {
            if (errors.gmat.types.required) setErrorGmatMsg("Por favor ingrese este campo");
            if (errors.gmat.types.max) setErrorGmatMsg("El maximo puntaje permitido es 800")
        } else {
            setErrorGmatMsg('')
        }
    }

    return (

        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,pt:10}}>
            <Paper elevation={10} sx={{
                padding: 4, width: "100%", borderRadius: 8,
                background: 'rgba(250, 250, 250, 0.8)', mr: 2, ml: 2
            }}>
                {
                    hookPrediction.loading ?
                        <Grid container justifyContent={"center"}>
                            <CircleLoader color='#1976d2' loading={hookPrediction.loading} size={150}/>
                        </Grid>
                        :
                        <form onSubmit={handleSubmit(hookPrediction.onSubmit)}>
                            <Grid container justifyContent={"center"}>
                                <Typography variant="h2" fontFamily={"sans-serif"} fontStyle={"italic"}>
                                    Predicción de Éxito en MBA
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Grid item xs={3} display={'flex'} justifyContent={"center"}>
                                    <Paper sx={{
                                        padding: 2, width: "100%", borderRadius: 8,
                                        background: 'rgba(250, 250, 250, 0.8)', m:1
                                    }}>
                                        <Grid container justifyContent={"center"}><strong><h3>GMAT</h3></strong></Grid>
                                        <Grid container justifyContent={"center"}>
                                            <Typography variant="1" gutterBottom>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                                                consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                                Eum
                                                quasi quidem quibusdam.
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent={"center"}>
                                            <TextField required label="GMAT" margin="normal" type={"number"}
                                                       inputProps={{min: 0}}
                                                       {...register('gmat', {
                                                           required: true,
                                                           max: 800
                                                       })}
                                                       sx={{width: "70%"}}
                                                       error={errors.gmat !== undefined}
                                                       helperText={errorGmatMsg}
                                            />
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3} display={'flex'} justifyContent={"center"}>
                                    <Paper sx={{
                                        padding: 2, width: "100%", borderRadius: 8,
                                        background: 'rgba(250, 250, 250, 0.8)', m:1
                                    }}>
                                        <Grid container justifyContent={"center"}><strong><h3>GPA</h3></strong></Grid>
                                        <Grid container justifyContent={"center"}>
                                            <Typography variant="1" gutterBottom align={'justify'}>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                                                consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                                Eum
                                                quasi quidem quibusdam.
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent={"center"}>
                                            <TextField required label="GPA" margin="normal" type={"number"}
                                                       inputProps={{step: 0.1, min: 0}}
                                                       {...register('gpa', {
                                                           required: true,
                                                           min: 0
                                                       })}
                                                       sx={{width: "70%"}}
                                                       error={errors.gpa !== undefined}
                                                       helperText={errors.app_type?.type === 'required' ? 'Por favor ingrese este campo' : ''}
                                            />
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3} display={'flex'} justifyContent={"center"}>
                                    <Paper sx={{
                                        padding: 2, width: "100%", borderRadius: 8,
                                        background: 'rgba(250, 250, 250, 0.8)', m:1
                                    }}>
                                        <Grid container justifyContent={"center"}><strong><h3>Experiencia Laboral</h3>
                                        </strong></Grid>
                                        <Grid container justifyContent={"center"}>
                                            <Typography variant="1" gutterBottom align={'justify'}>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                                                consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                                Eum
                                                quasi quidem quibusdam.
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent={"center"}>
                                            <TextField required label="Experiencia Laboral" margin="normal"
                                                       sx={{width: "70%"}}
                                                       inputProps={{min: 0}} type={"number"}
                                                       {...register('wk_xp', {
                                                           required: true,
                                                           min: 0,
                                                           valueAsNumber: true
                                                       })}
                                                       error={errors.wk_xp !== undefined}
                                                       helperText={errors.wk_xp?.type === 'required' ? 'Por favor ingrese este campo' : ''}
                                            ></TextField>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3} display={'flex'} justifyContent={"center"}>
                                    <Paper sx={{
                                        padding: 2, width: "100%", borderRadius: 8,
                                        background: 'rgba(250, 250, 250, 0.8)', m:1
                                    }}>
                                        <Grid container justifyContent={"center"}><strong><h3>Tipo de MBA</h3></strong></Grid>
                                        <Grid container justifyContent={"center"}>
                                            <Typography variant="1" gutterBottom align={'justify'}>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                                                consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                                Eum
                                                quasi quidem quibusdam.
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent={"center"}>
                                            <TextField
                                                select
                                                required
                                                label="Tipo de MBA"
                                                margin="normal"
                                                inputProps={register('app_type', {
                                                    required: true,
                                                })}
                                                sx={{width: "70%"}}
                                                error={errors.app_type !== undefined}
                                                helperText={errors.app_type?.type === 'required' ? 'Por favor seleccione una opción' : ''}
                                            >
                                                {MBA_TYPES.map((option) => (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={"space-around"} sx={{mt: 3}}>
                                <Grid item>
                                    <Button variant="outlined" size="large" onClick={onClear}>Limpiar</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" size="large" type="submit">Predecir</Button>
                                </Grid>
                            </Grid>
                        </form>
                }
            </Paper>
        </Box>

    );
}
