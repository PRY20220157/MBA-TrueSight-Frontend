import Grid from "@mui/material/Grid";
import {Navigate, useNavigate} from "react-router";
import usePrincipal from "../../business/principal";
import predictionimage from './images/PredictionImage.png'
import historialimage from './images/HistorialImage.png'
import tutorialimage from './images/TutorialImage.png'
import optionimage from './images/OptionImage.png'
import './principal.css'
import { Typography } from "@mui/material";
export const ViewPrincipal = props => {

    const hook = usePrincipal()

    return (
        <>
                 <Typography variant="subtitle1">Bienvenido</Typography>
                   &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    
            <Grid container spacing={2} style={{cursor:'pointer', minHeight:'100% !important'}}>
                <Grid item xs={12} onClick={(e) => hook.goToPrediction()}
                      >
                    
                    <img className="predictionimage"
                      src={predictionimage}
                      alt="predictionimage"
                    ></img>
                </Grid>
                <Grid item xs={12} onClick={(e) => hook.goToHistory()}
                >
                     <img className="historialimage"
                     src={historialimage}
                     alt="historialimage"
                   ></img>
                </Grid>
                <Grid item xs={8} onClick={(e) => hook.goToTutorial()}
                      >
                    
                    <img className="tutorialimage"
                     src={tutorialimage}
                     alt="tutorialimage"
                   ></img>
                </Grid>
                <Grid item xs={4} onClick={(e) => hook.goToOptions()}
                     >
                  <img className="optionimage"
                     src={optionimage}
                     alt="optionimage"
                   ></img>
                </Grid>
            </Grid>
        </>
    );
}