import {CompCoverPage} from "../../../comps/comp_cover_page";
import {Box, Paper} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import Button from "@mui/material/Button";


export const ViewMassiveResult = props => {
    return (
        <>
            <div className="massiveprediction-container">
                <CompCoverPage>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                        minWidth="100vh"
                    >
                        <Paper elevation={10}
                               sx={{borderRadius: 8, background: 'rgba(250, 250, 250, 1)', width: '100vh'}}>
                            <div style={{height: "60vh", width: '100vh'}}>
                                <DataGrid
                                    rows={props.hook.rows}
                                    columns={props.hook.columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                />
                            </div>
                            <Button variant="contained" size="large"
                                    onClick={(e) => props.hook.setShowResult(false)}>SALIR</Button>
                            <Button variant="contained" size="large"
                                    onClick={(e) => props.hook.setShowResult(false)}>ESTADÍSTICAS</Button>
                        </Paper>
                    </Box>
                </CompCoverPage>
            </div>
        </>
    )
}