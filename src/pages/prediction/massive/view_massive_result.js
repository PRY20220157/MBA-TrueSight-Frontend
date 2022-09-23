import {Box, Paper} from "@mui/material";
import {
    DataGrid,
    GridToolbar,
    GridToolbarColumnsButton,
    GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarFilterButton
} from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {COLOR_PRIM, COLOR_SEC} from "../../../util/constants";
import React from "react";
import Grid from "@mui/material/Grid";

export const ViewMassiveResult = props => {

    function CustomToolbar() {
        return (
            <GridToolbarContainer sx={{mb: 2}}>
                <GridToolbarColumnsButton name={'Columnas'}/>
                <GridToolbarFilterButton title={'Filtros'}/>
                <GridToolbarDensitySelector title={'Ancho de Filas'}/>
                <GridToolbarExport title={'Exportar'}/>
            </GridToolbarContainer>
        );
    }

    return (

        <>
            <Grid container sx={{width: "100%", p: 3}}>
                <Grid item xs={12}>
                    <h3 style={{color: COLOR_SEC}}><strong>RESULTADOS OBTENIDOS</strong></h3>
                </Grid>
                <Grid item xs={12} sx={{width: "100%"}}>
                    <Box sx={{height: "65vh", display: "flex", justifyContent: "center"}}>
                        <DataGrid
                            localeText={{
                                toolbarColumns: "Columnas",
                                toolbarDensity: "Ancho filas",
                                toolbarExport: "Exportar",
                                toolbarFilters: "Filtros"
                            }}
                            rows={props.rows}
                            columns={props.columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            components={{
                                Toolbar: CustomToolbar,
                            }}
                            disableMultipleSelection={true}
                            disableSelectionOnClick
                            sx={{
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: COLOR_SEC,
                                    color: "rgb(255,255,255)",
                                    fontSize: 16,
                                    '& .MuiButtonBase-root': {
                                        color: 'white'
                                    }
                                },
                                borderColor: COLOR_SEC,
                                '& .MuiDataGrid-cell:hover': {
                                    color: COLOR_SEC,
                                },
                                '& .MuiDataGrid-toolbarContainer': {
                                    color: COLOR_SEC,
                                    '& .MuiButtonBase-root': {
                                        color: COLOR_SEC
                                    }
                                }
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{width: "100%"}}>
                    <Box sx={{display: 'flex', flexDirection: 'row-reverse', m: 1,}}>
                        <Button variant="contained" size="large"
                                onClick={props.exit} sx={{backgroundColor: COLOR_SEC}}>SALIR</Button>
                        <>&nbsp;</>
                        <Button variant="contained" size="large"
                                onClick={props.showStadistics}
                                sx={{backgroundColor: COLOR_SEC}}>ESTADÍSTICAS</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
