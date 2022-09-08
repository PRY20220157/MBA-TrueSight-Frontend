import {PredictionMassiveContext} from "./context";
import {useState} from "react";

function PredictionMassiveProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'gpa', headerName: 'GPA'},
        {field: 'gmat', headerName: 'GMAT'},
        {field: 'wk_xp', headerName: 'Experiencia Laboral'},
        {field: 'app_type', headerName: 'Tipo de MBA'},
        {field: 'grad_gpa', headerName: 'RESULT'},
    ]
    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult,
            showStatistics, setShowStatistics,rows, setRows,columns}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;