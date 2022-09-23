import {CompCoverPage} from "../../comps/comp_cover_page";
import {ViewProfile} from "./view_profile";
import Box from "@mui/material/Box";
import "./assets.css"

export const ContProfile = () => {
    return (
        <Box className={'profile-container'}>
            <CompCoverPage>
                <ViewProfile/>
            </CompCoverPage>
        </Box>
    )
}