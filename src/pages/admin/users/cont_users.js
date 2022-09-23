import {Box} from "@mui/material";
import {CompCoverPage} from "comps/comp_cover_page";
import {ViewUsers} from "./view_users";

export const ContUsers = () => {
    return (
        <Box className="singleprediction-container">
            <CompCoverPage>
                <ViewUsers/>
            </CompCoverPage>
        </Box>
    )
}