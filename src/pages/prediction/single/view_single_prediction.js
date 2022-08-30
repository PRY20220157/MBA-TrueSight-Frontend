import {CompCoverPage} from "comps/comp_cover_page";
import {ViewSingleForm} from "./view_single_form";
import {Card} from "@mui/material";
import {ViewResult} from "./view_result";
import {usePrediction} from "business/prediction/prediction";
import {usePredictionContext} from "business/prediction/context";

export const ViewSinglePrediction = props => {

    const predictionHook = usePrediction();
    const {showResult} = usePredictionContext();

    return (<>
        <CompCoverPage>
            <Card variant="outlined" sx={{maxWidth: '40%'}}>
            {
                !showResult?
                    <ViewSingleForm/> :
                    <ViewResult/>
            }
            </Card>
        </CompCoverPage>
    </>);
}