
import { Box, Container } from "@mui/material";
import { ViewRegisterForm } from "./view_register_form";

export const ContRegisterForm = props => {
    return(<>
        
        <div className='background'>
        <Container sx={{minWidth: '100% !important',height: '100vh'}}>
                 <Box
                   display="flex"
                   justifyContent="center"
                   alignItems="center"
                   minHeight="100vh">
                    <ViewRegisterForm></ViewRegisterForm>
                   </Box>
                 </Container>

        </div>
             


      
    </>);
}