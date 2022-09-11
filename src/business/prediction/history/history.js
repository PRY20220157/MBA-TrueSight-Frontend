import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {getPredictionsByUser} from "api/api_prediction";

export function useHistoryPrediction() {

    const [predictions, setPredictions] = useState([]);
    const [predBck, setPredBck] = useState([]);
    const [grades, setGrades] = useState();
    const [result, setResult] = useState();
    const [showPrediction, setShowPrediction] = useState(false);
    const columns = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'creationDate', headerName: 'CREATION DATE', align: 'center', flex: 1},
        {
            field: "ACTIONS", flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (cellValues) => {
                return (
                    <>
                        <Button onClick={(event) => {
                            handleClick(event, cellValues);
                        }}>
                            Ver
                        </Button>
                        <Button onClick={(event) => {
                            handleClick(event, cellValues);
                        }}>
                            Eliminar
                        </Button>
                    </>
                );
            }
        },
    ]

    const handleClick = (event, cellValues) => {
        console.log(cellValues.row.id);
        let pred = predBck.filter(p => p.predictionId === cellValues.row.id)
        console.log(pred[0])
        setGrades(
            {
                gmat: pred[0].gmatScore,
                gpa: pred[0].gpaScore,
                wk_xp: pred[0].workExp,
                app_type: pred[0].appType

            })
        setResult(pred[0].gradGpaScore)
        setShowPrediction(true)
    };
    const handleBack = () => {
        setShowPrediction(false)
    }

    useEffect(() => {
        init()
    }, []);


    const init = async () => {
        let tmp = []
        let bckp = []
        await getPredictionsByUser().then(res => {
            if (true) {//singular
                res.forEach(p => {
                    if (p.massivePredictionId === null) {
                        tmp.push({id: p.predictionId, creationDate: p.creationDate})
                        bckp.push(p)
                    }
                })
            }
            setPredictions(tmp)
            setPredBck(bckp)
        })
    }
    return {
        predictions, columns,showPrediction,setShowPrediction,grades,result,handleBack
    }
}