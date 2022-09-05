import {CompCoverPage} from "comps/comp_cover_page";
import {ViewSingleForm} from "./view_single_form";
import {Box, Card} from "@mui/material";
import {ViewResult} from "./view_result";
import {usePrediction} from "business/prediction/single/prediction";
import {usePredictionContext} from "business/prediction/single/context";
import './single_prediction.css'

export const ViewSinglePrediction = props => {

    const {showResult} = usePredictionContext();

    return (<>
        {
            !showResult ?
                <ViewSingleForm/> :
                <ViewResult/>
        }
    </>);
}