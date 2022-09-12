import {Box, Container} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import {ViewRegister} from "./view_register";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";
import {ViewRegisterForm} from "../registerform/view_register_form";

const theme = createTheme();
export const ContRegister = props => {

    const [showForm, setShowForm] = useState(false);
    const [userType, setUserType] = useState();
    return (<>
        <div className='background'>
            <Container sx={{minWidth: '100% !important', height: '120vh'}}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh">
                    {
                        showForm ?
                            <ViewRegisterForm userType={userType}/>:
                            <ViewRegister nextStep={setShowForm} setUserType={setUserType} userType={userType}/>
                    }
                </Box>
            </Container>
        </div>


    </>);
}