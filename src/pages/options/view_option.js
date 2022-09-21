import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {COLOR_PRIM, COLOR_SEC} from "../../util/constants";
import React from "react";

export const ViewOption = props => {

    const {colorButton} = props

    return (
        <>
            <Paper sx={{width: "100%", borderRadius: 3, background: 'rgb(210,226,255)',p:1}}
                   elevation={24}>
                <Grid container sx={{width: "100%"}} >
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} >
                        <h5 style={{color: COLOR_PRIM}}><strong>{props.title}</strong></h5>
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} >
                        {props.desc}
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} sx={{pt:1}} >
                        <Button variant="contained" size="small"
                                onClick={props.execFunc}
                                sx={{backgroundColor: colorButton}}>{props.labelExec}</Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}