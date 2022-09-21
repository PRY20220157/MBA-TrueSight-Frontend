import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {ViewMassiveForm} from "./view_massive_form";
import {ViewMassiveResult} from "./view_massive_result";
import {useEffect, useState} from "react";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";
import {CompCoverPage} from "../../../comps/comp_cover_page";
import "./stylesheet/view_massive_prediction.css";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";

export const ContMassivePrediction = props => {

    const hook = usePredictionMassive();
    const {showResult, showStatistics, setShowStatistics, result} = usePredictionMassiveContext()
    const [className, setClassName] = useState("massiveprediction-container");
    const [style, setStyle] = useState({});

    function showStats() {
        setShowStatistics(true)
    }

    function showResults() {
        setShowStatistics(false)
    }

    function back() {
        hook.setShowResult(false)
    }

    useEffect(() => {
        if (showStatistics) {
            setClassName("")
        } else {
            setClassName("massiveprediction-container")
        }
    }, [showStatistics]);

    return (
        <>
            {!showResult ?
                <ViewMassiveForm/> :
                <>
                    {
                        showStatistics ?
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexGrow: 1,
                                ml: 1,
                                mr: 1
                            }}>
                                <ViewStadistics predictions={result} back={showResults}/>
                            </Box>
                            :
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexGrow: 1,
                                width: '1280px',
                            }}>
                                <ViewMassiveResult rows={hook.rows} columns={hook.columns} exit={back}
                                                   showStadistics={showStats}/>
                            </Box>
                    }
                </>
            }
        </>
    )
}