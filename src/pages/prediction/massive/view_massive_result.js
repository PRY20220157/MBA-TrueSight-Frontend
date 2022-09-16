import {Box, Paper} from "@mui/material";
import {
    DataGrid,
    GridToolbar,
    GridToolbarColumnsButton,
    GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
    GridToolbarFilterButton
} from '@mui/x-data-grid';
import Button from "@mui/material/Button";

export const ViewMassiveResult = props => {

    function CustomToolbar() {
        return (
            <GridToolbarContainer sx={{mb: 4}}>
                <GridToolbarColumnsButton name={'Columnas'}/>
                <GridToolbarFilterButton title={'Filtros'}/>
                <GridToolbarDensitySelector title={'Ancho de Filas'}/>
                <GridToolbarExport title={'Exportar'}/>
            </GridToolbarContainer>
        );
    }

    return (

        <>
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
                />
            </Box>
            <Button variant="contained" size="large"
                    onClick={props.exit}>SALIR</Button>
            <Button variant="contained" size="large"
                    onClick={props.showStadistics}>ESTADÍSTICAS</Button>
        </>
    )
}