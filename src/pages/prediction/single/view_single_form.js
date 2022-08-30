import {Card} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import prediction from './images/prediction.jpg'
import '../single/stylesheet/view_single_form.css'
import {usePrediction} from "../../../business/prediction/prediction";
import {GRADES} from "../../../util/constants";
import Box from "@mui/material/Box";

export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    return (
        <Grid container className="SingleForm" sx={{p: 2, justifyContent: 'center', height: 500,}}>
            <Box component="form" onSubmit={hookPrediction.makePrediction} noValidate>
                <Grid className="FormTitle">Predicción de Éxito en MBA</Grid>
                <Grid item>
                    <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth
                               label="GMAT" name={GRADES.GMAT} id={'inp_' + GRADES.GMAT} type={"number"}
                               inputProps={{step: 0.1, min: 0}} size={'medium'}/>
                    <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth
                               label="GPA" name={GRADES.GPA} autoFocus size={'medium'} id={'inp_' + GRADES.GPA}
                               type={"number"} inputProps={{step: 0.1, min: 0}}/>
                    <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth
                               inputProps={{step: 0.1, min: 0}} name={GRADES.WORk_EXP} autoFocus size={'medium'}/>
                    <TextField className="TextFieldForm" color="secondary" margin="normal" required fullWidth
                               label="App type" name={GRADES.APP_TYPE} id={'inp_' + GRADES.APP_TYPE} type={"number"}
                               inputProps={{step: 0.1, min: 0}} autoFocus size={'medium'}/>
                </Grid>
                <Grid item xs={5}>
                    <Button fullWidth variant="contained" size="large" sx={{mt: 3, mb: 2}}
                            onClick={(e) => hookPrediction.clearForm()}>
                        Limpiar
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Button type="submit" fullWidth variant="contained" size="large" sx={{mt: 3, mb: 2}}
                            onClick={(e) => hookPrediction.makePrediction()}>
                        Predecir
                    </Button>
                </Grid>
            </Box>
        </Grid>
    );
}
