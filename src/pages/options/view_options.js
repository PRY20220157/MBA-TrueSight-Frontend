import {Button, Paper} from "@mui/material";
import ReactPlayer from "react-player";
import {CompCoverPage} from "../../comps/comp_cover_page";
import Box from "@mui/material/Box";
import {resetPassword} from "../../api/api_auth";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {ViewOption} from "./view_option";
import {COLOR_DANG, COLOR_SEC} from "util/constants";

export const ViewOptions = props => {
    return (
        <>
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,
                ml: 1, mr: 1
            }}>
                <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                       elevation={24}>
                    <Grid container sx={{p:2}} spacing={1}>
                        <Grid item xs={12}>
                            <h2 style={{color: "#3966ff"}}><strong>Opciones</strong></h2>
                        </Grid>
                        <Grid  item xs={4}>
                            <ViewOption title={'a'} desc={'asdasd'} labelExec={'a'} colorButton={COLOR_SEC}/>
                        </Grid>
                        <Grid  item xs={4}>
                            <ViewOption title={'b'} desc={'asdasd'} labelExec={'b'} colorButton={COLOR_SEC}/>
                        </Grid>
                        <Grid  item xs={4}>
                            <ViewOption title={'c'} desc={'asdasd'} labelExec={'c'}  colorButton={COLOR_DANG}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>

    );
}