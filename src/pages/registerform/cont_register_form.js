
import { Box, Container } from "@mui/material";
import { ViewRegisterfORM } from "./view_register_form";

export const ContRegisterfORM = props => {
    return(<>
        
        <div className='background'>
        <Container sx={{minWidth: '100% !important',height: '120vh'}}>
                 
                 <Box
                   display="flex"
                   justifyContent="center"
                   alignItems="center"
                   
                   minHeight="100vh"
                   >
                    <ViewRegisterfORM></ViewRegisterfORM>
   
                   </Box>
   
                 </Container>

        </div>
             


      
    </>);
}