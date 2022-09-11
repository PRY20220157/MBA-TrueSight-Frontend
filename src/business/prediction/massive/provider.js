import {PredictionMassiveContext} from "./context";
import {useState} from "react";

function PredictionMassiveProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'gpaScore', headerName: 'GPA'},
        {field: 'gmatScore', headerName: 'GMAT'},
        {field: 'workExp', headerName: 'Experiencia Laboral'},
        {field: 'appType', headerName: 'Tipo de MBA'},
        {field: 'gradGpaScore', headerName: 'RESULT'},
    ]
    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult,
            showStatistics, setShowStatistics,rows, setRows,columns}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;