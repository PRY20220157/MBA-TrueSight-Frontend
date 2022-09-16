import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";
import PropTypes from "prop-types";

export const CompGrade = props => {
    const {grade, obs, type, size, showObs} = props
    return (
        <Grid item xs={size} display={'flex'} justifyContent={"center"}>
            <Paper sx={{
                padding: 2, width: "100%", borderRadius: 8,
                background: 'rgba(250, 250, 250, 0.8)', m: 1
            }}>
                <Grid container>
                    <Grid item xs={size * 2} display={'flex'} justifyContent={"center"} alignItems={"center"}
                          sx={{color: "#04094A"}}>
                        <h3><strong>{type}</strong></h3>
                    </Grid>
                    <Grid item xs={size * 2} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                        {
                            type === 'Tipo de MBA' ? <h5>{grade}</h5> : <h2><strong>{grade}</strong></h2>
                        }
                    </Grid>
                </Grid>
                {showObs ?
                    <Grid container justifyContent={"center"}>
                        Observación:
                        {obs}
                    </Grid> : <></>
                }
            </Paper>
        </Grid>

    )
}
CompGrade.propTypes = {
    showObs: PropTypes.bool
}
CompGrade.defaultProps = {
    showObs: true
}