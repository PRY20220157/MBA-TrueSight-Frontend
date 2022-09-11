import {usePredictionMassive} from "../../../business/prediction/massive/prediction_massive";
import {ViewMassiveForm} from "./view_massive_form";
import {ViewMassiveResult} from "./view_massive_result";
import {useState} from "react";
import {ViewStadistics} from "./view_stadistics";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";
import {CompCoverPage} from "../../../comps/comp_cover_page";
import "./stylesheet/view_massive_prediction.css";

export const ContMassivePrediction = props => {

    const {showResult, showStatistics} = usePredictionMassiveContext()
    return (
        <>
            <div className="massiveprediction-container">
                <CompCoverPage>
                    {!showResult ?
                        <ViewMassiveForm/> :
                        <>
                            {
                                showStatistics ?
                                    <ViewStadistics/>
                                    :
                                    <ViewMassiveResult/>
                            }
                        </>
                    }
                </CompCoverPage>
            </div>
        </>
    )
}