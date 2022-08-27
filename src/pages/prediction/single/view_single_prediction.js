import {CompCoverPage} from "comps/comp_cover_page";
import {ViewSingleForm} from "./view_single_form";
import {Card} from "@mui/material";
import {ViewResult} from "./view_result";
import {usePrediction} from "../../../business/prediction";

export const ViewSinglePrediction = props => {

    const predictionHook = usePrediction();

    return (<>
        <CompCoverPage>
            <Card variant="outlined" sx={{maxWidth: '40%'}}>
            {
                true?
                    <ViewSingleForm/> :
                    <ViewResult/>
            }
            </Card>
        </CompCoverPage>
    </>);
}