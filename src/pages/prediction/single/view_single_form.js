import {Card} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import prediction from './images/prediction.jpg'
import '../single/stylesheet/view_single_form.css'
export const ViewSingleForm = () => {
    return (
        <Grid container className="SingleForm" sx={{p: 2, justifyContent: 'center',
        
        height: 500 ,
        
        
        

        }}>

            
            <Grid className="FormTitle">Predicción de Éxito en MBA</Grid>
            <Grid item>
                <TextField  className="TextFieldForm" color="secondary" margin="normal" required fullWidth id="email" label="GMAT" name="email" autoFocus 
                           size={'medium'}/>
                <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth id="email" label="GPA" name="email" autoFocus
                           size={'medium'}/>
                <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth id="email" label="Experiencia Laboral"
                           name="email" autoFocus size={'medium'}/>
                <TextField className="TextFieldForm"  color="secondary" margin="normal" required fullWidth id="email" label="App type" name="email"
                           autoFocus size={'medium'}/>
            </Grid>


            
            <Grid item xs={5}>
                <Button fullWidth variant="contained" className="Button" sx={{mt: 3, mb: 2}} onClick={() => {
                }}>Limpiar</Button>
            </Grid>
            <>&nbsp;</>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            
            <Grid item xs={5}>
                <Button type="submit" fullWidth variant="contained" className="Button" sx={{mt: 3, mb: 2}} onClick={() => {
                }}>Predecir</Button>
            </Grid>

           



           



        </Grid>
    );
}