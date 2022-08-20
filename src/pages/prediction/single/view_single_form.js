import {Card} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ViewSingleForm = () => {
    return (
        <Grid container sx={{p: 2, justifyContent: 'center'}}>
            <Grid>Predicción de Éxito en MBA</Grid>
            <Grid item>
                <TextField margin="normal" required fullWidth id="email" label="GMAT" name="email" autoFocus
                           size={'small'}/>
                <TextField margin="normal" required fullWidth id="email" label="GPA" name="email" autoFocus
                           size={'small'}/>
                <TextField margin="normal" required fullWidth id="email" label="Experiencia Laboral"
                           name="email" autoFocus size={'small'}/>
                <TextField margin="normal" required fullWidth id="email" label="App type" name="email"
                           autoFocus size={'small'}/>
            </Grid>
            <Grid item>
                <Button fullWidth variant="contained" sx={{mt: 3, mb: 2}} onClick={() => {
                }}>Limpiar</Button>
            </Grid>
            <>&nbsp;</>
            <Grid item>
                <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}} onClick={() => {
                }}>Predecir</Button>
            </Grid>
        </Grid>
    );
}