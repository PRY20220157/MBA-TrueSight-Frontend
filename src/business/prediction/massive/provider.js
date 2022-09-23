import {PredictionMassiveContext} from "./context";
import {useState} from "react";

function PredictionMassiveProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field: 'student_id', headerName: 'Estudiante', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', hide:true},
        {field: 'gpa', headerName: 'GPA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gmat', headerName: 'GMAT', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'wk_xp', headerName: 'Experiencia Laboral', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'app_type', headerName: 'Tipo de MBA', flex: 2, align: 'center', headerAlign: 'center',},
        {field: 'grad_gpa', headerName: 'Resultado', flex: 1, align: 'center', headerAlign: 'center',},
    ]
    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult,
            showStatistics, setShowStatistics,rows, setRows,columns}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;