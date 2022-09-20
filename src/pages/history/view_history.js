import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {Box, Button, Stack, Tab, TableFooter, TablePagination, Tabs, TextField, Typography} from "@mui/material";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {useHistoryPrediction} from "business/prediction/history/history";
import {ViewGrades} from "../prediction/single/view__grades";
import {ViewStadistics} from "../prediction/massive/view_stadistics";
import {ViewMassiveResult} from "../prediction/massive/view_massive_result";
import {useForm} from "react-hook-form";
import Drawer from "@mui/material/Drawer";
import {CompDrawer} from "../../comps/comp_drawer";
import {ContSinglePrediction} from "../prediction/single/cont_single_prediction";
import PredictionProvider from "../../business/prediction/single/provider";
import {ContMassivePrediction} from "../prediction/massive/cont_massive_prediction";
import PredictionMassiveProvider from "../../business/prediction/massive/provider";
import {COLOR_PRIM, COLOR_SEC} from "../../util/constants";
import {CompDialogDelete} from "../../comps/dialog/comp_dialog_delete";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 2}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const ViewHistory = props => {
    const hook = useHistoryPrediction()
    const [showStatistics, setShowStatistics] = useState(false);
    const {handleSubmit} = useForm({criteriaMode: "all"});
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleStats = () => {
        setShowStatistics(!showStatistics)
    }

    const handleStartDate = (data, event) => {
        hook.setStartDate(data.toLocaleDateString("en-US"))
    }

    const handleEndDate = (data) => {
        hook.setEndDate(data.toLocaleDateString("en-US"))
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    useEffect(() => {
        if (hook.showAlertSuccess) {
            toast.success(hook.alertMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            hook.setShowAlertSuccess(false)
        }
    }, [hook.showAlertSuccess]);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexGrow: 1,
            ml: 1,
            mr: 1
        }}>
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <CompDialogDelete labelAccept={'Eliminar'} message={'¿Seguro que desea eliminar la predicción?'}
                              handleClose={hook.handleCloseDialog} execFunc={hook.deletePred} open={hook.showDialog}
                              title='Eliminar Predicción'/>
            <CompDialogDelete labelAccept={'Eliminar'} message={'¿Seguro que desea eliminar la predicción masiva?'}
                              handleClose={hook.handleCloseDialogMassive} execFunc={hook.deleteMassPred}
                              open={hook.showDialogMassive} title='Eliminar Predicción Masiva'/>
            <Grid container>
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
                                                    <Paper sx={{
                                                        width: "100%",
                                                        borderRadius: 3,
                                                        background: 'rgba(250, 250, 250, 0.95)'
                                                    }}
                                                           elevation={24}>
                                                        <ViewMassiveResult rows={hook.rows}
                                                                           columns={hook.columns_massive_tbl}
                                                                           exit={hook.handleBack}
                                                                           showStadistics={handleStats}/>
                                                    </Paper>
                                            }
                                        </>
                                        :
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100vh",
                                            flexGrow: 1,
                                        }}>
                                            <Paper elevation={10} sx={{
                                                padding: 3, borderRadius: 8,
                                                background: 'rgba(250, 250, 250, 0.9)', mr: 2, ml: 2
                                            }}>
                                                <ViewGrades grades={hook.grades} result={hook.result}
                                                            exit={hook.handleBack}/>
                                            </Paper>
                                        </Box>
                                }
                            </> :
                            <>
                                <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                                       elevation={24}>
                                    <Grid item xs={12} sx={{pt: 2, pl: 2}}>
                                        <h3 style={{color: "#3966ff"}}><strong>Historial de Predicciones
                                            realizadas</strong></h3>

                                    </Grid>
                                    <form onSubmit={handleSubmit(hook.handleFilter)}>
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <Grid container spacing={3} sx={{mb: 3}}>
                                            <Grid item xs={10} alignItems="center" justifyContent="center">
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <Stack direction="row" spacing={5}>
                                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                                        <DesktopDatePicker
                                                            label="Desde"
                                                            inputFormat="MM/dd/yyyy"
                                                            value={hook.startDate}
                                                            name="fechadesde"
                                                            onChange={handleStartDate}
                                                            maxDate={Date.now()}
                                                            renderInput={(params) => <TextField {...params}
                                                                                                sx={{svg: {color: COLOR_SEC}}}/>}
                                                        />
                                                        <DesktopDatePicker
                                                            label="Hasta"
                                                            inputFormat="MM/dd/yyyy"
                                                            value={hook.endDate}
                                                            name="fechahasta"
                                                            onChange={handleEndDate}
                                                            maxDate={Date.now()}
                                                            renderInput={(params) => <TextField {...params}
                                                                                                sx={{svg: {color: COLOR_SEC}}}/>}
                                                        />
                                                        <Button variant="outlined" type="submit" size="large" sx={{
                                                            color: COLOR_SEC,
                                                            borderColor: COLOR_SEC
                                                        }}><FilterAltIcon sx={{color:COLOR_SEC}}/> Filtrar</Button>
                                                    </Stack>
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={2} sx={{pr: 1}}>
                                                <CompDrawer label={'Realizar una predicción'}>
                                                    {/*
                                                    TODO:prediccion simple y masiva
                                                    <PredictionMassiveProvider><ContMassivePrediction/></PredictionMassiveProvider>
*/}
                                                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                                        <Tabs value={value} onChange={handleChange}
                                                              aria-label="basic tabs example" color={COLOR_SEC}
                                                              TabIndicatorProps={{
                                                                  style: {
                                                                      color: COLOR_SEC,
                                                                      backgroundColor: COLOR_SEC,
                                                                      "& .MuiButtonBase-root-MuiTab-root.Mui-selected": {
                                                                          color: 'red'
                                                                      }
                                                                  }
                                                              }}>
                                                            <Tab label="INDIVIDUAL" {...a11yProps(0)}
                                                                 sx={{color: COLOR_SEC}}/>
                                                            <Tab label="MASIVA" {...a11yProps(1)}
                                                                 sx={{color: COLOR_SEC}}/>
                                                        </Tabs>
                                                    </Box>
                                                    <TabPanel value={value} index={0}>
                                                        <PredictionProvider><ContSinglePrediction/></PredictionProvider>
                                                    </TabPanel>
                                                    <TabPanel value={value} index={1}>
                                                        <PredictionMassiveProvider><ContMassivePrediction/></PredictionMassiveProvider>
                                                    </TabPanel>
                                                </CompDrawer>
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
                                            sx={{
                                                "& .MuiDataGrid-columnHeaders": {
                                                    backgroundColor: COLOR_SEC,
                                                    color: "rgb(255,255,255)",
                                                    fontSize: 16
                                                },
                                                borderColor: COLOR_SEC,
                                                '& .MuiDataGrid-cell:hover': {
                                                    color: COLOR_PRIM,
                                                },
                                            }}
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