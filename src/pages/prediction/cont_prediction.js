import {ContSinglePrediction} from "./single/cont_single_prediction";
import './cont_prediction.css'
import PredictionProvider from "business/prediction/provider";

export const ContPrediction = props => {
    return (<>
        <>
            <div className="singleprediction-container">
                <PredictionProvider>
                    <ContSinglePrediction/>
                </PredictionProvider>
            </div>

        </>
    </>);
}