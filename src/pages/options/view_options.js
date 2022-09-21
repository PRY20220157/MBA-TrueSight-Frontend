import {Paper} from "@mui/material";
import ReactPlayer from "react-player";
import {CompCoverPage} from "../../comps/comp_cover_page";
import Box from "@mui/material/Box";

export const ViewOptions = props => {
    return (
        <>
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,
                ml: 1, mr: 1
            }}>
                <Paper sx={{width: "100%", borderRadius: 3, background: 'rgba(250, 250, 250, 0.95)'}}
                       elevation={24}>
                    a
                </Paper>
            </Box>
        </>

    );
}