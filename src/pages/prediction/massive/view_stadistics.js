import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, Title
} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {Box, Grid, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {Line} from 'react-chartjs-2';
import {COLOR_SEC, GRADES_KEYS, MBA_TYPES} from "../../../util/constants";
import {CompGrade} from "../../../comps/comp_grade";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_gpa";
import {useObservations} from "../../../business/prediction/observations";
import {handleFloatGrades} from "../../../business/prediction/obs_constants";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const optionsLine = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'PUNTAJES POSIBLES  OBTENIDOS',
        },
    },
};

export const ViewStadistics = props => {

    const obsHook = useObservations()
    const [averages, setAverages] = useState({});
    const [helper, setHelper] = useState([]);
    const labels = helper.map(r => r.studentId)
    const dataLine = {
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: helper.map(r => parseFloat(r.gradGpaScore).toFixed(2)),
                borderColor: COLOR_SEC,
                backgroundColor: COLOR_SEC,
            }
        ],
    };
    useEffect(() => {
        loadAverages()
        triggerOrderResult()
    }, []);

    const loadAverages = () => {
        let tmp = [...props.predictions]
        console.log(tmp)
        let sum_gmat = 0;
        let sum_gpa = 0;
        let sum_wk_xp = 0;
        let sum_app_tp = 0;
        for (const r of tmp) {
            sum_gmat += r.gmatScore;
            sum_gpa += parseFloat(r.gpaScore + '');
            sum_wk_xp += r.workExp;
            sum_app_tp += r.appTypeId;
        }
        let avg_gmat = sum_gmat / tmp.length;
        let avg_gpa = sum_gpa / tmp.length;
        let avg_wk_xp = sum_wk_xp / tmp.length;
        let avg_app_type = sum_app_tp / tmp.length;
        setAverages({
            avg_gmat,
            avg_gpa,
            avg_wk_xp,
            avg_app_type
        })
    }
    const triggerOrderResult = () => {
        let x = [...props.predictions]
        x.sort((a, b) => {
            return a.gradGpaScore - b.gradGpaScore;
        });
        console.log(x)
        setHelper(x)
    }

    const loadMBAType = () => {
        if (averages.avg_app_type !== undefined) {
            console.log(averages)
            let type = MBA_TYPES.filter(t => t.id === parseInt(averages.avg_app_type))
            return type[0].name
        }
    }
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            flexGrow: 1,
        }}>
            <Grid container spacing={1} align="center" sx={{height: "100%", marginBottom: 3}}>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" sx={{backgroundColor:COLOR_SEC,mt:5}}
                            onClick={props.back}>Volver a resultados</Button>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} sx={{marginBottom: "3%"}}>
                        <Paper elevation={10} sx={{
                            padding: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width: '100%'
                        }}>
                            <Grid container justifyContent="center">
                                <h3 style={{color:COLOR_SEC}}><strong>Alumnos ingresados:</strong></h3><>&nbsp;</><h3><strong>{props.predictions.length}</strong></h3>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: "3%"}}>
                        <Paper elevation={10} sx={{
                            padding: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width: '100%'
                        }}>
                            <Grid container justifyContent="center">
                                <h3 style={{color:COLOR_SEC}}><strong>Puntajes promedio</strong></h3>
                            </Grid>
                            {
                                obsHook.loading ?
                                    <></>:
                                    <Grid container>
                                        <CompGrade grade={<>{handleFloatGrades(parseInt(averages.avg_gmat), obsHook.avgs.gmatAvg, false)}</>}
                                                   obs={'obs'} type={'GMAT'} size={6} showObs={false}
                                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>} />
                                        <CompGrade grade={<>{handleFloatGrades(parseFloat(averages.avg_gpa).toFixed(2), obsHook.avgs.gpaAvg, false)}</>}
                                                   obs={'obs'} type={'GPA'} size={6}  showObs={false} tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                                        <CompGrade grade={<>{handleFloatGrades(parseInt(averages.avg_wk_xp), obsHook.avgs.workExpAvg, true)}</>}
                                                   type={'Años de Experiencia'} size={6}  showObs={false} obs={'obs'}
                                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                        <CompGrade grade={loadMBAType()} obs={'obs'} type={'Tipo de MBA'} size={6}  showObs={false}
                                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.APP_TYPE}/>}/>
                                    </Grid>
                            }
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} sx={{marginBottom: "3%"}}>
                        <Paper elevation={10} sx={{
                            paddingBottom: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width:"100%"
                        }}>
                            <Line options={optionsLine} data={dataLine}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}