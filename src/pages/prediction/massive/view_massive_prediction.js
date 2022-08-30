import TextField from "@mui/material/TextField";
import {CompCoverPage} from "comps/comp_cover_page";
import {usePredictionMassive} from "business/prediction/prediction_massive";
import {Button, Card, Grid} from "@mui/material";

export const ViewMassivePrediction = () => {

    const hook = usePredictionMassive();

    return (
        <>
            <CompCoverPage>
                <Card sx={{p: 2, justifyContent: 'center', height: '70%', maxWidth: '40%'}}>
                    <Grid container>
                        <Grid item xs='12'>
                            <TextField type="file" onChange={(e) => hook.setFile(e)}/>
                        </Grid>
                        <Grid item>
                            <Button type="submit" fullWidth variant="contained" size="large" sx={{mt: 3, mb: 2}}
                                    onClick={(e) => hook.uploadFile()}>
                                Subir
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </CompCoverPage>
        </>
    )
}