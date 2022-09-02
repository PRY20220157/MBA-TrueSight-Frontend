import {ViewTutorial} from "./view_tutorial";
import {CompCoverPage} from "../../comps/comp_cover_page";
import './tutorial.css'
import { Box } from "@mui/material";
export const ContTutorial = props => {
    return(
    <div className="tutorial-container" >

<CompCoverPage>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    
                    
                   >

                   <ViewTutorial/>
                   </Box>
    

    </CompCoverPage>



    </div>
    
    
    );
}