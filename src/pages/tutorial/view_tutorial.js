import {CompCoverPage} from "../../comps/comp_cover_page";
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './tutorial.css'
import { Paper ,Grid, Box} from "@mui/material";
export const ViewTutorial = props => {
    return(<>
            <Paper  elevation={10} sx={{borderRadius:2,background: 'rgba(250, 250, 250, 0.8)',height:"40vh", width:"600px",m:3 }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"
                        allowFullScreen></iframe>

            </Paper>
            
            
       
    </>);
}