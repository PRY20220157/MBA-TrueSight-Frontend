import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import useLogin from "../../business/auth";
const { ThemeProvider } = require("@mui/system");


function ForgotPassword(){
    const hook = useLogin();

    return(

        <>
      
            <Container sx={{minWidth: '100% !important',height: '120vh', backgroundColor: '#C8102E',}}>
                 <Container component="main" maxWidth="xs" sx={{height: '110vh', backgroundColor: '#ffffff',paddingTop:'25vh'}}>
                     <Box 
                     
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent:'center',
                        justifyContent:"center",
                        direction:'column'
                    }}
                     >
                        <form>

                           <Stack spacing={5}>
                            <Grid container justifyContent="center">
                            <Typography variant="h5" color="black">Recuperar Contraseña</Typography>

                            </Grid>
                          

                         
                            <Grid container justifyContent="center">

                            <Typography variant="subtitle1" color="#808080">Ingrese su correo para enviar un correo de</Typography>
                            <Typography variant="subtitle1" color="#808080">recuperación</Typography>

                            </Grid>
                            <Grid container justifyContent="center">
                            <TextField label="Correo electronico" variant="filled" fullWidth></TextField>
                            </Grid>
                          
                           <Grid container justifyContent="space-between">
                           <Button variant="contained" sx={{ width:180}}>
                                Cancelar
                            </Button>
                            <Button variant="contained" sx={{ width:180}} onClick={hook.goToRecoverPasswordPage}>
                                Enviar
                            </Button>

                           </Grid>
                           
                            

                           
                           </Stack>

                            



                        </form>





                     </Box>




                 </Container>

            </Container>







       
        
        
        
        
        </>
    );







}export default ForgotPassword;


