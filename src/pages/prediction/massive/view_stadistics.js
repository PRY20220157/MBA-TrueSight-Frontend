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
import {GRADES_KEYS, MBA_TYPES} from "../../../util/constants";
import {CompGrade} from "../../../comps/comp_grade";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_gpa";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [50, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
export const optionsLine = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Puntajes obtenidos',
        },
    },
};

export const ViewStadistics = props => {

    const [averages, setAverages] = useState({});
    const [helper, setHelper] = useState([]);
    const labels = helper.map(r => r.id.toString())
    const dataLine = {
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: helper.map(r => parseFloat(r.gradGpaScore).toFixed(2)),
                borderColor: 'rgb(0,149,255)',
                backgroundColor: 'rgba(0,149,255,0.5)',
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
            sum_app_tp += r.appType;
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
            height: "100vh",
            flexGrow: 1,
        }}>
            <Grid container spacing={1} align="center" sx={{height: "100%", marginBottom: 3}}>
                <Grid item xs={12}>
                    <Button variant="contained" size="large"
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
                                <h3><strong>Alumnos ingresados: {props.predictions.length}</strong></h3>
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
                                <h3><strong>Puntajes promedio</strong></h3>
                            </Grid>
                            <Grid container>
                                <CompGrade grade={parseInt(averages.avg_gmat)} obs={'obs'} type={'GMAT'} size={6} showObs={false}
                                           tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>} />
                                <CompGrade grade={parseFloat(averages.avg_gpa).toFixed(2)} obs={'obs'} type={'GPA'}
                                           size={6}  showObs={false} tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                                <CompGrade grade={parseFloat(averages.avg_wk_xp).toFixed(2)} obs={'obs'}
                                           type={'Años de Experiencia'} size={6}  showObs={false}
                                           tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                <CompGrade grade={loadMBAType()} obs={'obs'} type={'Tipo de MBA'} size={6}  showObs={false}
                                           tooltip={<CompTooltipGrade type={GRADES_KEYS.APP_TYPE}/>}/>
                            </Grid>
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