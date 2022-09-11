import Grid from "@mui/material/Grid";
import {PredictionContext, usePredictionContext} from "business/prediction/single/context";
import Button from "@mui/material/Button";
import {Box, Paper} from "@mui/material";
import {useState} from "react";
import {ViewGrades} from "./view__grades";

export const ViewResult = props => {
    
    return (
        <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", height:"100vh",flexGrow: 1,}} >
                <Paper  elevation={10} sx={{padding: 3,width: "50%", borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                   <ViewGrades result={props.result} grades ={props.grades} exit={props.exit}/>
                </Paper>

            </Box>
    );
}