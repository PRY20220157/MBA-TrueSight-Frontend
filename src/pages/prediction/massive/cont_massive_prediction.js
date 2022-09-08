import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {ViewMassiveForm} from "./view_massive_form";
import {ViewMassiveResult} from "./view_massive_result";
import {useState} from "react";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";

export const ContMassivePrediction = props => {

    const {showResult, showStatistics} = usePredictionMassiveContext()
    return (
        <>
            {
                !showResult ?
                    <ViewMassiveForm/>:
                    <>
                        {
                            showStatistics ?
                                <ViewStadistics/>
                                :
                                <ViewMassiveResult/>
                        }
                    </>
            }
        </>
    )
}