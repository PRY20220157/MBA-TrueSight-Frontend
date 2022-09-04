import {ViewSinglePrediction} from "./view_single_prediction";
import PredictionProvider from "../../../business/prediction/provider";

export const ContSinglePrediction = props => {
    return (

        <PredictionProvider>
            <ViewSinglePrediction/>
        </PredictionProvider>

    );
}