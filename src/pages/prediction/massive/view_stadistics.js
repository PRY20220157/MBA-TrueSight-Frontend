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
import {CompCoverPage} from "../../../comps/comp_cover_page";
import Button from "@mui/material/Button";
import {usePredictionMassiveContext} from "../../../business/prediction/massive/context";
import {Line} from 'react-chartjs-2';

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

    const {result, setShowStatistics} = usePredictionMassiveContext();
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
        let tmp = [...result]
        let sum_gmat = 0;
        let sum_gpa = 0;
        let sum_wk_xp = 0;
        for (const r of tmp) {
            sum_gmat += r.gmatScore;
            sum_gpa += r.gpaScore;
            sum_wk_xp += r.workExp;
        }
        let avg_gmat = sum_gmat / tmp.length;
        let avg_gpa = sum_gpa / tmp.length;
        let avg_wk_xp = sum_wk_xp / tmp.length;
        setAverages({
            avg_gmat,
            avg_gpa,
            avg_wk_xp
        })
    }
    const triggerOrderResult = () => {
        let x = [...result]
        x.sort((a, b) => {
            return a.gradGpaScore - b.gradGpaScore;
        });
        console.log(x)
        setHelper(x)
    }
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexGrow: 1,pt:10}}>
            <Grid container spacing={1} align="center" display={"column"} sx={{p: 2, height: "100%", marginBottom: 3}}>
                <Grid item xs={12}>
                    <Button variant="contained" size="large"
                            onClick={(e) => setShowStatistics(false)}>Volver a resultados</Button>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} sx={{marginBottom: "3%"}}>
                        <Paper elevation={10} sx={{
                            padding: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width: '70%'
                        }}>
                            <Grid container justifyContent="center">
                                <h3><strong>Puntajes promedio</strong></h3>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>GMAT</Grid>
                                <Grid item xs={6}><strong>{parseInt(averages.avg_gmat)}</strong></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>GPA</Grid>
                                <Grid item xs={6}><strong>{parseFloat(averages.avg_gpa).toFixed(2)}</strong></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>Años de Experiencia</Grid>
                                <Grid item xs={6}><strong>{parseFloat(averages.avg_wk_xp).toFixed(2)}</strong></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>Tipo de MBA</Grid>
                                <Grid item xs={6}><strong>XX</strong></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sx={{marginBottom: "3%"}}>
                        <Paper elevation={10} sx={{
                            padding: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width: '70%'
                        }}>
                            <Grid container justifyContent="center">
                                <h3><strong>Alumnos ingresados: {result.length}</strong></h3>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={10} sx={{
                            paddingBottom: 2,
                            borderRadius: 8,
                            background: 'rgba(250, 250, 250, 1)',
                            width: '70%'
                        }}>
                            <Pie data={data}/>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={10} sx={{
                        paddingBottom: 2,
                        borderRadius: 8,
                        background: 'rgba(250, 250, 250, 1)',
                        width: '100%'
                    }}>
                        <Line options={optionsLine} data={dataLine}/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}