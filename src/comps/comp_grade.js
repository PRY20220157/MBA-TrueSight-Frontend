import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";
import PropTypes from "prop-types";

export const CompGrade = props => {
    const {grade, obs, type, size, showObs,tooltip} = props
    return (
        <Paper sx={{width: "100%", p: 1,mt:1}}>
            <Grid container xs={size} display={'flex'} justifyContent={"center"} sx={{width: "100%"}} alignContent={"center"}>
                <Grid item xs={6} display={'flex'} justifyContent={"center"} alignContent={"center"}
                      sx={{color: "#04094A"}}>
                    <h5><strong>{type}</strong></h5><>&nbsp;</>{tooltip}
                </Grid>
                <Grid item xs={6} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                    {
                        type === 'Tipo de MBA' ? <a><strong>{grade}</strong></a> : <h4><strong>{grade}</strong></h4>
                    }
                </Grid>
                {showObs ?
                    <Grid item xs={12} display={'flex'} justifyContent={"center"}>
                        Observación:
                        {obs}
                    </Grid> : <></>
                }
            </Grid>
        </Paper>

    )
}
CompGrade.propTypes = {
    showObs: PropTypes.bool
}
CompGrade.defaultProps = {
    showObs: true
}