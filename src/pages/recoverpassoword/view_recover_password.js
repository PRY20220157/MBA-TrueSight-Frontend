import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";


function RecoverPassword(props){
   

return(

<>
<Container sx={{minWidth: '100% !important',height: '120vh', backgroundColor: '#C8102E',}}>
<Container component="main" maxWidth="xs" sx={{height: '110vh', backgroundColor: '#ffffff',paddingTop:'25vh'}}>
<Box  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent:'center',
                        justifyContent:"center",
                        direction:'column'
                    }}>


<form>

<Stack spacing={5}>
 <Grid container justifyContent="center">
 <Typography variant="h5" color="black">Restablecer Contraseña</Typography>

 </Grid>



 
 
 <TextField label="Nueva Contraseña" variant="filled" sx={{ width:400}}></TextField>
 
 <Grid container justifyContent="center">
 <TextField label="Repetir Contraseña" variant="filled" fullWidth></TextField>
 </Grid>

<Grid container justifyContent="space-between">
<Button variant="contained" sx={{ width:180}}>
     Cancelar
 </Button>
 <Button variant="contained" sx={{ width:180}} >
 Restablecer
 </Button>

</Grid>

 


</Stack>

 



</form>




























</Box>
</Container>
</Container>



</>



);




}export default RecoverPassword;