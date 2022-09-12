import {CompCoverPage} from "../../comps/comp_cover_page";
import * as React from 'react';

import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useForm, useFormState} from 'react-hook-form'
import {useLocation, useNavigate} from "react-router";
import {Box, Button, Stack, TableFooter, TablePagination, TextField, Typography} from "@mui/material";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useHistoryPrediction} from "business/prediction/history/history";
import {ViewResult} from "../prediction/single/view_result";
import {ViewGrades} from "../prediction/single/view__grades";
import {isRecruiter} from "../../util/util";
import {ViewStadistics} from "../prediction/massive/view_stadistics";
import {ViewMassiveResult} from "../prediction/massive/view_massive_result";

function enterDetail() {

}

export const ViewHistory = props => {
    const hook = useHistoryPrediction()
    const [showStatistics, setShowStatistics] = useState(false);

    const [datesFilter, setDatesFilter] = useState({

        from: new Date('2014-08-18T21:11:54'),
        to: new Date('2014-08-18T21:11:54')
    });
const handleStats = () => {
    setShowStatistics(!showStatistics)
    }

    const handleInputChange1 = (data, event) => {
        setDatesFilter({
            ...datesFilter,
            to: data
        })
        console.log(datesFilter)
    }
    const handleInputChange2 = (data) => {
        console.log(data);
        setDatesFilter({
            ...datesFilter,
            from: data
        })
        console.log(datesFilter)
    }
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,}}>
            <Paper sx={{width: "65%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.9)'}} elevation={24}>
                {
                    hook.showPrediction ?
                        <>
                            {
                                hook.showingMassivePred?
                                    <>
                                        {
                                            showStatistics ?
                                                <ViewStadistics predictions={hook.rows} back={handleStats} />
                                                :
                                                <ViewMassiveResult rows={hook.rows} columns={hook.columns_massive_tbl} exit={hook.handleBack}
                                                                   showStadistics={handleStats}/>
                                        }
                                    </>
                                    :
                                <ViewGrades grades={hook.grades} result={hook.result} exit={hook.handleBack}/>
                            }
                        </> :
                        <>
                            <form>
                                &nbsp;&nbsp; &nbsp;&nbsp;
                                <Grid container spacing={3}>
                                    <Grid item xs={8} alignItems="center" justifyContent="center">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack direction="row" spacing={5}>
                                                &nbsp;&nbsp; &nbsp;&nbsp;
                                                <DesktopDatePicker
                                                    label="Desde"
                                                    inputFormat="MM/dd/yyyy"
                                                    value={datesFilter.from}
                                                    name="fechadesde"
                                                    onChange={handleInputChange1}
                                                    maxDate={Date.now()}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DesktopDatePicker
                                                    label="Hasta"
                                                    inputFormat="MM/dd/yyyy"
                                                    value={Date.now()}
                                                    name="fechahasta"
                                                    onChange={handleInputChange2}
                                                    maxDate={Date.now()}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" type="submit" size="large"> Filtrar</Button>
                                    </Grid>
                                </Grid>
                            </form>
                            <Box style={{height: "45vh", display: "flex", justifyContent: "center"}}>

                                <DataGrid
                                    rows={hook.predictions}
                                    columns={hook.columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    disableMultipleSelection={true}
                                    disableSelectionOnClick
                                />
                            </Box>
                        </>
                }
            </Paper>
        </Box>
    );
}