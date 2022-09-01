import {ContSinglePrediction} from "./single/cont_single_prediction";
import './cont_prediction.css'
import PredictionProvider from "business/prediction/provider";
import { Box, Grid } from "@mui/material";
import { CompCoverPage } from "comps/comp_cover_page";
import { ViewSingleForm } from "./single/view_single_form";

export const ContPrediction = props => {
    return (<>
         <div className="singleprediction-container">
           <CompCoverPage>

              
               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    
                    
                   >
                   <ViewSingleForm></ViewSingleForm>
                   </Box>

              
                 

            




           </CompCoverPage>
           </div>
                    
             
            

        
    </>);
}