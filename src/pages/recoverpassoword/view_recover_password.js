import { Alert, Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import {useForm} from 'react-hook-form';

function RecoverPassword(props){
   
    const {register,reset,formState: { errors },handleSubmit,watch}= useForm();
    const watchShowAge = watch("NewPassword", false);
    
    const submit=(data)=>{
        console.log(data)
    }
    const onclear=()=>{
        reset();
    }
return(

<>

<div className="background">
            <Container sx={{minWidth: '100% !important',height: '120vh'}}>
                




                     <Box 
                     
                    


                display="flex"
                justifyContent="center"
                alignItems="center"
                
                minHeight="100vh"
                    
                     >

                        <Paper elevation={10} sx={{minWidth:600,borderRadius:8,background: 'rgba(250, 250, 250, 0.9)'}}>
                        <form onSubmit={handleSubmit(submit)}>

                       <Stack spacing={5}>
 <Grid container justifyContent="center">
 <Typography variant="h5" color="black">Restablecer Contraseña</Typography>

 </Grid>



 
 
 <TextField label="Nueva Contraseña" variant="filled" fullWidth
 {...register('NewPassword',{
    required:true,
   
  })}
 
 
 ></TextField>
  &nbsp;&nbsp;
                            
                            
{errors.NewPassword?.type === 'required' && <Alert severity="error">Es requerido</Alert>}
 <Grid container justifyContent="center">
 <TextField label="Repetir Contraseña" variant="filled" fullWidth
 {...register('RepeatPassword',{
    required:true,
    validate: value => value === watchShowAge
   
  })}
 
 ></TextField>

 </Grid>
 &nbsp;&nbsp;
                            
                                {errors.RepeatPassword?.type === 'required' && <Alert severity="error">Es requerido</Alert>}
                                {errors.RepeatPassword?.type === 'validate' && <Alert severity="error">Los campos deben ser iguales</Alert>}
<Grid container justifyContent="space-between">
<Button variant="contained" sx={{ width:180,borderRadius:3}} onClick={onclear}>
     Cancelar
 </Button>
 <Button variant="contained" sx={{ width:180,borderRadius:3}} type="submit">
 Restablecer
 </Button>

</Grid>

 


                        </Stack>

 



                         </form>
                        </Paper>




                     </Box>




                

            </Container>

      </div>




</>



);




}export default RecoverPassword;