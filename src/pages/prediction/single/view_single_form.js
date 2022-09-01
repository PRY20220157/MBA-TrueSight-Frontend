import {Alert, alpha, Card, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import prediction from './images/prediction.jpg'
import '../single/stylesheet/view_single_form.css'
import {usePrediction} from "../../../business/prediction/prediction";
import {GRADES} from "../../../util/constants";
import Box from "@mui/material/Box";
import {useForm} from 'react-hook-form';
export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    const {register,reset,formState: { errors },handleSubmit}= useForm();
   
    const onclear=()=>{
      reset();
  }
    return (

       <>

         <Paper elevation={10} sx={{minWidth:600,borderRadius:8,background: 'rgba(250, 250, 250, 0.9)'}}>

         <form onSubmit={handleSubmit(hookPrediction.onSubmit)}>
         <Grid container justifyContent={"center"}>
         <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}>Predicción de Éxito en MBA</Typography>
        </Grid>   
       
        

              <Grid container justifyContent={"center"}>
              <TextField variant="filled"  label="GMAT"  margin="normal" type={"number"} sx={{minWidth:500}}
              {...register('GMAT',{
                required:true,
              })}
              ></TextField>
                           

              </Grid>
              <Grid container justifyContent={"center"}>
              {errors.GMAT?.type === 'required' && <Alert severity="error">GMAT es un Campo requerido</Alert>}
              </Grid>
             
              <Grid  container justifyContent={"center"}>
              <TextField variant="filled"  label="GPA"  margin="normal" type={"number"} sx={{minWidth:500}}
               {...register('GPA',{
                required:true,
              })}
              ></TextField>

              </Grid>
              <Grid container justifyContent={"center"}>
              {errors.GPA?.type === 'required' && <Alert severity="error">GPA es un Campo requerido</Alert>}
              </Grid>
             <Grid container justifyContent={"center"}>
             <TextField variant="filled"  label="Work Experience"  margin="normal" sx={{minWidth:500}}
               {...register('Work_Experience',{
                required:true,
              })}
              ></TextField>

             </Grid>
             <Grid container justifyContent={"center"}>
              {errors.Work_Experience?.type === 'required' && <Alert severity="error">Work Experience es un Campo requerido</Alert>}
              </Grid>
             <Grid container justifyContent={"center"}>
             <TextField variant="filled"  label="APP TYPE"  margin="normal" type={"number"} sx={{minWidth:500}}
                 {...register('APP_TYPE',{
                    required:true,
                  })}
              
              ></TextField>

             </Grid>
             <Grid container justifyContent={"center"}>
              {errors.APP_TYPE?.type === 'required' && <Alert severity="error">APP TYPE es un Campo requerido</Alert>}
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
         
       </>

        



      
    );
}
