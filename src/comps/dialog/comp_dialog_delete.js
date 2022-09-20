import {CompDialog} from "./comp_dialog";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const CompDialogDelete = props =>{

    return(
        <CompDialog handleClose={props.handleClose} execFunc={props.execFunc} open={props.open} labelAccept={props.labelAccept}>
            <Grid container display='flex' justifyContent='center'>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <DeleteIcon sx={{color:"#C32826", fontSize:"10rem"}}/>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                  <h4><strong>{props.title}</strong></h4>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    {props.message}
                </Grid>
            </Grid>
        </CompDialog>
    )
}
CompDialogDelete.propTypes = {
    labelAccept: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    execFunc: PropTypes.func.isRequired,
    open:PropTypes.bool.isRequired,
}