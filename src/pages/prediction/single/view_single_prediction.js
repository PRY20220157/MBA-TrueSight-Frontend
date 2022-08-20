import {CompCoverPage} from "comps/comp_cover_page";
import {ViewSingleForm} from "./view_single_form";
import {Card} from "@mui/material";
import {ViewResult} from "./view_result";

export const ViewSinglePrediction = props => {
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