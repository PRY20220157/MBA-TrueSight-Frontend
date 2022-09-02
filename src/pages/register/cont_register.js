import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { ViewRegister } from "./view_register";
import {createTheme} from '@mui/material/styles';
const theme = createTheme();
export const ContRegister = props => {
    return(<>
        
        <div className='background'>
        <Container sx={{minWidth: '100% !important',height: '120vh'}}>
                 
                 <Box
                   display="flex"
                   justifyContent="center"
                   alignItems="center"
                   
                   minHeight="100vh"
                   >
                    <ViewRegister></ViewRegister>
   
                   </Box>
   
                 </Container>

        </div>
             


      
    </>);
}