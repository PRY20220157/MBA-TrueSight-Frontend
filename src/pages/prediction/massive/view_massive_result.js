import {CompCoverPage} from "comps/comp_cover_page";
import {Box, Paper} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";


export const ViewMassiveResult = props => {

    const hook = usePredictionMassive();
    const {setShowStatistics} = usePredictionMassiveContext()

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
                                    rows={hook.rows}
                                    columns={hook.columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                />
                            </div>
                            <Button variant="contained" size="large"
                                    onClick={(e) => hook.setShowResult(false)}>SALIR</Button>
                            <Button variant="contained" size="large"
                                    onClick={(e) => setShowStatistics(true)}>ESTADÍSTICAS</Button>
                        </Paper>
                    </Box>
                </CompCoverPage>
            </div>
        </>
    )
}