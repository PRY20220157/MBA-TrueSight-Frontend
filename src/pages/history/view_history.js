import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {Box, Button, Stack, TableFooter, TablePagination, TextField, Typography} from "@mui/material";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useHistoryPrediction} from "business/prediction/history/history";
import {ViewGrades} from "../prediction/single/view__grades";
import {ViewStadistics} from "../prediction/massive/view_stadistics";
import {ViewMassiveResult} from "../prediction/massive/view_massive_result";

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


        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,ml:1,mr:1}}>
            <Grid container>
                <Grid item xs={12}>
                    <strong><h3>Historial de Predicciones realizadas</h3></strong>
                </Grid>
                <Grid item xs={12}>
                    {
                        hook.showPrediction ?
                            <>
                                {
                                    hook.showingMassivePred ?
                                        <>
                                            {
                                                showStatistics ?
                                                    <ViewStadistics predictions={hook.rows} back={handleStats}/>
                                                    :
                                                    <ViewMassiveResult rows={hook.rows}
                                                                       columns={hook.columns_massive_tbl}
                                                                       exit={hook.handleBack}
                                                                       showStadistics={handleStats}/>
                                            }
                                        </>
                                        :
                                        <ViewGrades grades={hook.grades} result={hook.result} exit={hook.handleBack}/>
                                }
                            </> :
                            <>
                                <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                                       elevation={24}>
                                    <form>
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <Grid container spacing={3} sx={{mb: 3}}>
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
                                    <Box sx={{height: "65vh", display: "flex", justifyContent: "center", p: 1}}>
                                        <DataGrid
                                            rows={hook.predictions}
                                            columns={hook.columns}
                                            pageSize={10}
                                            rowsPerPageOptions={[10]}
                                            disableMultipleSelection={true}
                                            disableSelectionOnClick
                                            loading={hook.loading}
                                        />
                                    </Box>
                                </Paper>
                            </>
                    }
                </Grid>
            </Grid>

        </Box>

    );
}