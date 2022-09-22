import PredictionProvider from "business/prediction/single/provider";
import {usePredictionContext} from "business/prediction/single/context";
import {ViewSingleForm} from "./view_single_form";
import {ViewResult} from "./view_result";
import "./single_prediction.css"
import {CompCoverPage} from "comps/comp_cover_page";
import {Box} from "@mui/material";
import {useEffect} from "react";

export const ContSinglePrediction = props => {
    const {showResult} = usePredictionContext();
    const {grades, result, setShowResult} = usePredictionContext();
    useEffect(() => {
        props.setReload(true)
    }, [showResult]);

    return (

        <>
                {
                    !showResult ?
                        <ViewSingleForm/> :
                        <ViewResult grades={grades} result={result} exit={setShowResult}/>
                }
        </>
    );
}