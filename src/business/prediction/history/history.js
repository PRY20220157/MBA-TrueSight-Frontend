import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {deleteMassivePrediction, deletePrediction, getPredictionsByUser} from "api/api_prediction";
import {getUserId, isRecruiter, isStudent} from "util/util";
import "core-js/actual/array/group-by";
import {getDateTime} from "util/date";
import {COLOR_SEC} from "../../../util/constants";

export function useHistoryPrediction() {

    const [predictions, setPredictions] = useState([]);
    const [startDate, setStartDate] = useState(new Date('2022-08-15').toLocaleDateString("en-US"));
    const [endDate, setEndDate] = useState(new Date().toLocaleDateString("en-US"));
    const userId = getUserId()
    const [filters, setFilters] = useState({userId, startDate, endDate});
    const [predBck, setPredBck] = useState([]);
    const [grades, setGrades] = useState();
    const [result, setResult] = useState();
    const [massPredBck, setMassPredBck] = useState([]);
    const [rows, setRows] = useState();
    const [showPrediction, setShowPrediction] = useState(false);
    const [showingMassivePred, setShowingMassivePred] = useState(false);
    const [loading, setLoading] = useState(false);
    const columns = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center',color:COLOR_SEC},
        {field: 'creationDate', headerName: 'FECHA EJECUCIÓN', align: 'center', flex: 1, headerAlign: 'center',},
        {field: 'type', headerName: 'TIPO', align: 'center', flex: 1, headerAlign: 'center', hide: isStudent()},
        {
            field: "ACCIONES", flex: 1,
            headerAlign: 'center',
            align: 'center',
            sortable:false,
            renderCell: (cellValues) => {
                return (
                    <>
                        <Button sx={{color:COLOR_SEC}} onClick={(event) => {
                            viewDetail(event, cellValues);
                        }}>
                            Ver
                        </Button>
                        <Button sx={{color:COLOR_SEC}} onClick={(event) => {
                            handleDelete(event, cellValues);
                        }}>
                            Eliminar
                        </Button>
                    </>
                );
            }
        },
    ]
    const columns_massive_tbl = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gpaScore', headerName: 'GPA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gmatScore', headerName: 'GMAT', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'workExp', headerName: 'Experiencia Laboral', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'appType', headerName: 'Tipo de MBA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gradGpaScore', headerName: 'RESULT', flex: 1, align: 'center', headerAlign: 'center',}]

    const viewDetail = (event, cellValues) => {
        console.log(cellValues.row.type)
        if (cellValues.row.type === 'Masiva') {
            let preds = massPredBck[cellValues.row.id]
            preds.forEach((t, index) => {
                t.id = index + 1;
            })
            setShowingMassivePred(true)
            setRows(preds)
            setShowPrediction(true)

        } else {
            console.log(predBck)
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
        }
    };

    const handleDelete = (event, cellValues) => {
        setLoading(true)
        if (cellValues.row.type === 'Masiva') {
            deleteMassPred(event, cellValues)
        } else {
            deletePred(event, cellValues)
        }
    }
    
    const deletePred = async (event, cellValues) => {
        await deletePrediction(cellValues.row.id).then(() => {
            loadData()
        })
    }
    
    const deleteMassPred = async (event, cellValues) => {
        await deleteMassivePrediction(cellValues.row.id).then(() => {
            loadData()
        })
    }
    
    const handleBack = () => {
        setShowingMassivePred(false)
        setShowPrediction(false)
    }

    useEffect(() => {
        loadData()
    }, [filters]);
    
    const loadData = async () => {
        setLoading(true)
        let tmp = []
        let bckp = []
        await getPredictionsByUser(filters).then(res => {
            console.log(res)
            if (isStudent()) {//singular
                res.forEach(p => {
                    if (p.predictionTypeId === 1) {
                        tmp.push({id: p.predictionId, creationDate: p.creationDate})
                        bckp.push(p)
                    }
                })
                setPredBck(bckp)
                setPredictions(tmp)
            } else {
                let helper = []
                helper = [...res]
                console.log(helper)
                let all_preds = helper.reduce((group, pr) => {
                    const {predictionTypeId} = pr;
                    group[predictionTypeId] = group[predictionTypeId] ?? [];
                    group[predictionTypeId].push(pr);
                    return group;
                }, {})
                all_preds[1].forEach(p => {
                    tmp.push({id: p.predictionId, creationDate: getDateTime(p.creationDate), type: 'Simple'})
                    bckp.push(p)
                })
                setPredBck(bckp)
                const groupByMassiveId = all_preds[2].reduce((group, prediction) => {
                    const {massivePredictionId} = prediction;
                    group[massivePredictionId] = group[massivePredictionId] ?? [];
                    group[massivePredictionId].push(prediction);
                    return group;
                }, {});
                console.log(groupByMassiveId)
                setMassPredBck(groupByMassiveId)
                let keys = Object.keys(groupByMassiveId),
                    i = keys.length;
                while (i--) {
                    let mass_pred = groupByMassiveId[keys[i]][0]
                    tmp.push({id: mass_pred.massivePredictionId, creationDate: getDateTime(mass_pred.creationDate), type: 'Masiva'})
                }
            }
            setPredictions(tmp)
        })
        setLoading(false)
    }

    function handleFilter(){
        setFilters({
            userId,
            startDate,
            endDate
        })
    }

    return {
        predictions, columns, showPrediction, setShowPrediction, grades, result, handleBack,handleFilter,
        columns_massive_tbl, rows, showingMassivePred,loading,setEndDate, setStartDate,startDate,endDate
    }
}