import React, {useEffect, useState} from "react";
import {Button, Tooltip} from "@mui/material";
import {deleteMassivePrediction, deletePrediction, getPredictionsByUser} from "api/api_prediction";
import {getUserId, isRecruiter, isStudent, loadMBAType} from "util/util";
import "core-js/actual/array/group-by";
import {getDateTime} from "util/date";
import {COLOR_SEC} from "../../../util/constants";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {toast} from "react-toastify";

export function useHistoryPrediction() {

    const [predictions, setPredictions] = useState([]);
    const [startDate, setStartDate] = useState(new Date('2022-08-15').toLocaleDateString("en-US"));
    const [endDate, setEndDate] = useState(getDefaultDate());
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
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', color: COLOR_SEC, hide: true},
        {field: 'creationDate', headerName: 'FECHA EJECUCIÓN', align: 'center', flex: 1, headerAlign: 'center',},
        {
            field: 'type', headerName: 'TIPO', align: 'center', flex: 1, headerAlign: 'center', hide: isStudent(),
            renderCell: (cellValues) => {
                return (<>
                    {cellValues.row.type !== 'Simple' ?
                        <><GroupsIcon sx={{color: COLOR_SEC}}/><>&nbsp;</>
                            {cellValues.row.type}</> :
                        <><PersonIcon sx={{color: COLOR_SEC}}/><>&nbsp;</>
                            {cellValues.row.type}</>
                    }
                </>)
            }
        },
        {
            field: "ACCIONES", flex: 1,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            renderCell: (cellValues) => {
                return (
                    <>
                        <Button sx={{color: COLOR_SEC}} onClick={(event) => {
                            viewDetail(event, cellValues);
                        }}>
                            <Tooltip title={"Ver Detalle"} placement="top">
                                <VisibilityIcon sx={{color: COLOR_SEC}}/>
                            </Tooltip>

                        </Button>
                        <Button sx={{color: COLOR_SEC}} onClick={(event) => {
                            handleDelete(event, cellValues);
                        }}>
                            <Tooltip title={"Eliminar"} placement="top">
                                <DeleteIcon sx={{color: COLOR_SEC}}/>
                            </Tooltip>
                        </Button>
                    </>
                );
            }
        },
    ]
    const columns_massive_tbl = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center',hide:true},
        {field: 'studentId', headerName: 'ESTUDIANTE', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'appType', headerName: 'Tipo de MBA', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'gpaScore', headerName: 'GPA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gmatScore', headerName: 'GMAT', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'workExp', headerName: 'Experiencia Laboral', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gradGpaScore', headerName: 'RESULT', flex: 1, align: 'center', headerAlign: 'center',}]
    const [showDialog, setShowDialog] = useState(false);
    const [showDialogMassive, setShowDialogMassive] = useState(false);
    const [idToDelete, setIdToDelete] = useState();
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [reload, setReload] = useState(false);

    const viewDetail = (event, cellValues) => {
        console.log(cellValues)
        if (cellValues.row.type === 'Masiva') {
            let preds = massPredBck[cellValues.row.id]
            preds.forEach((t, index) => {
                t.id = t.predictionId;
                t.appType = loadMBAType(t.appType)

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
        setIdToDelete(cellValues.row.id)
        if (cellValues.row.type === 'Masiva')
            setShowDialogMassive(true)
        else
            setShowDialog(true)
    }

    const handleCloseDialog = () => {
        setShowDialog(false)
    }
    const handleCloseDialogMassive = () => {
        console.log("CLOSING")
        setShowDialogMassive(false)
    }
    const deletePred = async () => {
        setShowDialog(false)
        setLoading(true)
        await deletePrediction(idToDelete).then(() => {
            setAlertMessage('Predicción eliminada exitosamente')
            setShowAlertSuccess(true)
            loadData().then(() => setShowAlertSuccess(false))
        })
    }

    const deleteMassPred = async () => {
        setShowDialogMassive(false)
        setLoading(true)
        await deleteMassivePrediction(idToDelete).then(() => {
            setAlertMessage('Predicción masiva eliminada exitosamente')
            setShowAlertSuccess(true)
            loadData().then(() => setShowAlertSuccess(false))
        })
    }

    const handleBack = () => {
        setShowingMassivePred(false)
        setShowPrediction(false)
    }

    useEffect(() => {
        loadData()
    }, [filters]);

    useEffect(() => {
        if (reload)
            loadData()
    }, [reload]);
    const loadData = async () => {
        setLoading(true)
        let tmp = []
        let bckp = []
        await getPredictionsByUser(filters).then(res => {
            if (!res.length > 0) {
                setPredictions([])
                setPredBck([])
                setMassPredBck([])
                return;
            }
            console.log(res)
            if (isStudent()) {//singular
                res.forEach(p => {
                    if (p.predictionTypeId === 1) {
                        tmp.push({id: p.predictionId, creationDate: p.creationDate})
                        bckp.push(p)
                    }
                })
                setPredBck(bckp)
                tmp.sort(function(a,b){
                    return new Date(b.creationDate) - new Date(a.creationDate);
                });
                setPredictions(tmp)
            } else {
                let helper = []
                helper = [...res]
                if (helper.length < 1) return []
                console.log(helper)
                let all_preds = helper.reduce((group, pr) => {
                    const {predictionTypeId} = pr;
                    group[predictionTypeId] = group[predictionTypeId] ?? [];
                    group[predictionTypeId].push(pr);
                    return group;
                }, {})
                console.log(all_preds)
                if (all_preds[1] !== undefined) {
                    all_preds[1].forEach(p => {
                        tmp.push({id: p.predictionId, creationDate: getDateTime(p.creationDate), type: 'Simple'})
                        bckp.push(p)
                    })
                    setPredBck(bckp)
                }
                if (all_preds[2] !== undefined) {

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
                        tmp.push({
                            id: mass_pred.massivePredictionId,
                            creationDate: getDateTime(mass_pred.creationDate),
                            type: 'Masiva'
                        })
                    }
                }
            }
            tmp.sort(function(a,b){
                return new Date(b.creationDate) - new Date(a.creationDate);
            });
            setPredictions(tmp)
        })
        setLoading(false)
        setReload(false)
    }

    function handleFilter() {
        setFilters({
            userId,
            startDate,
            endDate: handleEndDate()
        })
    }

    function handleEndDate() {
        let date = new Date(endDate)
        date.setDate(date.getDate() + 2);
        return date.toLocaleDateString('en-US')
    }

    function getDefaultDate() {
        let date = new Date()
        date.setDate(date.getDate() + 2);
        return date.toLocaleDateString('en-US')
    }

    return {
        predictions, columns, showPrediction, setShowPrediction, grades, result, handleBack, handleFilter,
        columns_massive_tbl, rows, showingMassivePred, loading, setEndDate, setStartDate, startDate, endDate,
        showDialog, deletePred, deleteMassPred, handleCloseDialog, handleCloseDialogMassive, showDialogMassive,
        showAlertSuccess, alertMessage, setShowAlertSuccess, setReload,getDefaultDate
    }
}