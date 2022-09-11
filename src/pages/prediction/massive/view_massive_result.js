import {CompCoverPage} from "comps/comp_cover_page";
import {Box, Paper} from "@mui/material";
import {
    DataGrid,
    GridToolbar,
    GridToolbarColumnsButton,
    GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarFilterButton
} from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";


export const ViewMassiveResult = props => {

    const hook = usePredictionMassive();
    const {setShowStatistics} = usePredictionMassiveContext()

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton name={'Columnas'} />
                <GridToolbarFilterButton title={'Filtros'}  />
                <GridToolbarDensitySelector title={'Ancho de Filas'}  />
                <GridToolbarExport title={'Exportar'} />
            </GridToolbarContainer>
        );
    }
    return (
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,}}>
                <Paper elevation={10}
                       sx={{borderRadius: 8, background: 'rgba(250, 250, 250, 1)', width: '100vh'}}>
                    <div style={{height: "60vh", width: '100vh'}}>
                        <DataGrid
                            localeText={{ toolbarColumns: "Columnas", toolbarDensity: "Ancho filas", toolbarExport:"Exportar", toolbarFilters:"Filtros" }}
                            rows={hook.rows}
                            columns={hook.columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            components={{
                                Toolbar: CustomToolbar,
                            }}
                        />
                    </div>
                    <Button variant="contained" size="large"
                            onClick={(e) => hook.setShowResult(false)}>SALIR</Button>
                    <Button variant="contained" size="large"
                            onClick={(e) => setShowStatistics(true)}>ESTADÍSTICAS</Button>
                </Paper>
            </Box>
    )
}