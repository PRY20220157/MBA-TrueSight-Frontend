import {Box, Paper} from "@mui/material";
import {ViewGrades} from "./view__grades";

export const ViewResult = props => {

    return (
        <Box sx={{display: "flex", justifyContent: "center", width: "500px"}}>
            <ViewGrades result={props.result} grades={props.grades} exit={props.exit}/>
        </Box>
    );
}