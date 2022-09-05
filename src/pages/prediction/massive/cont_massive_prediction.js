import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {ViewMassiveForm} from "./view_massive_form";
import {ViewMassiveResult} from "./view_massive_result";

export const ContMassivePrediction = props => {
    const hook = usePredictionMassive();

    return (
        <>
            {
                !hook.showResult ?
                    <ViewMassiveForm hook={hook}/> :
                    <ViewMassiveResult hook={hook}/>
            }
        </>
    )
}