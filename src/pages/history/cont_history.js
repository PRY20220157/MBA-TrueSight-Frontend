import {ViewHistory} from "./view_history";
import {CompCoverPage} from "../../comps/comp_cover_page";

export const ContHistory = props => {
    //return (<div style={{backgroundColor:"#F2F2F2"}}>
    return (<div className="singleprediction-container">
    <CompCoverPage>
            <ViewHistory/>
        </CompCoverPage>
    </div>);
}