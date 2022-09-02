import {CompCoverPage} from "../../comps/comp_cover_page";
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './tutorial.css'
import { Paper ,Grid, Box} from "@mui/material";
export const ViewTutorial = props => {
    return(<>
       

           
            <Paper  elevation={10} sx={{borderRadius:2,background: 'rgba(250, 250, 250, 0.8)'}}>
                
            
                <ReactPlayer url='https://www.youtube.com/watch?v=6QzcF3xdoF8&ab_channel=PetWard' />
                
          
            </Paper>
            
            
       
    </>);
}