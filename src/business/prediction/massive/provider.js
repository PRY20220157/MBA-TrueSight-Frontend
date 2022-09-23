import {PredictionMassiveContext} from "./context";
import React, {useState} from "react";
import {useObservations} from "../observations";
import {handleFloatGrades} from "../obs_constants";

function PredictionMassiveProvider({children}) {

    const obsHook = useObservations()
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field: 'student_id', headerName: 'Estudiante', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', hide:true},
        {field: 'gpa', headerName: 'GPA', flex: 0.5, align: 'center', headerAlign: 'center',
            renderCell: (cellValues) => {
                return (<>{handleFloatGrades(cellValues.row.gpa,obsHook.avgs.gpaAvg,false)}</>)
            }},
        {field: 'gmat', headerName: 'GMAT', flex: 1, align: 'center', headerAlign: 'center',
            renderCell: (cellValues) => {
                return (<>{handleFloatGrades(cellValues.row.gmat,obsHook.avgs.gmatAvg,false)}</>)

            }},
        {field: 'wk_xp', headerName: 'EXP. LABORAL', flex: 1, align: 'center', headerAlign: 'center',
            renderCell: (cellValues) => {
                return (<>{handleFloatGrades(cellValues.row.wk_xp,obsHook.avgs.workExpAvg,true)}</>)

            }},
        {field: 'app_type', headerName: 'Tipo de MBA', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'grad_gpa', headerName: 'Resultado', flex: 1, align: 'center', headerAlign: 'center',
            renderCell: (cellValues) => {
                return (<>{handleFloatGrades(cellValues.row.grad_gpa,obsHook.avgs.gradGpaAvg,false)}</>)
            }
            },
    ]
    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult,
            showStatistics, setShowStatistics,rows, setRows,columns}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;