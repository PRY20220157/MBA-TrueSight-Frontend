import {ViewOptions} from "./view_options";
import './cont_option.css'
import { Box, Container } from "@mui/material";
import { CompCoverPage } from "comps/comp_cover_page";
import { ViewTutorial } from "pages/tutorial/view_tutorial";
export const ContOptions = props => {
    return(
        <div className="options-container" >
    
    <CompCoverPage>
                    
    
                       <ViewOptions/>
                       
        
    
        </CompCoverPage>
    
    
    
        </div>
        
        
        );
}