import {CompCoverPage} from "../../comps/comp_cover_page";
import {ViewProfile} from "./view_profile";
import Box from "@mui/material/Box";

export const ContProfile = () => {
    return (
        <Box sx={{backgroundColor: "#F2F2F2"}}>
            <CompCoverPage>
                <ViewProfile/>
            </CompCoverPage>
        </Box>
    )
}