import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {ViewMassiveForm} from "./view_massive_form";
import {ViewMassiveResult} from "./view_massive_result";
import {useState} from "react";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";
import {CompCoverPage} from "../../../comps/comp_cover_page";
import "./stylesheet/view_massive_prediction.css";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";

export const ContMassivePrediction = props => {

    const hook = usePredictionMassive();
    const {showResult, showStatistics, setShowStatistics, result} = usePredictionMassiveContext()

    function showStats() {
        setShowStatistics(true)
    }

    function showResults() {
        setShowStatistics(false)
    }

    function back() {
        hook.setShowResult(false)
    }

    return (
        <>
            <div className="massiveprediction-container">
                <CompCoverPage>
                    {!showResult ?
                        <ViewMassiveForm/> :
                        <>
                            {
                                showStatistics ?
                                    <ViewStadistics predictions={result} back={showResults}/>
                                    :
                                    <Box sx={{
                                        display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "100vh", flexGrow: 1, ml: 1, mr: 1
                                    }}>
                                        <Paper sx={{
                                            width: "100%",
                                            borderRadius: 3,
                                            background: 'rgba(250, 250, 250, 0.95)'
                                        }}
                                               elevation={24}>
                                            <ViewMassiveResult rows={hook.rows} columns={hook.columns} exit={back}
                                                               showStadistics={showStats}/>
                                        </Paper>
                                    </Box>
                            }
                        </>
                    }
                </CompCoverPage>
            </div>
        </>
    )
}