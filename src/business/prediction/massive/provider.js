import {PredictionMassiveContext} from "./context";
import {useState} from "react";

function PredictionMassiveProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center', hide:true},
        {field: 'gpaScore', headerName: 'GPA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gmatScore', headerName: 'GMAT', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'workExp', headerName: 'Experiencia Laboral', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'appType', headerName: 'Tipo de MBA', flex: 1, align: 'center', headerAlign: 'center',},
        {field: 'gradGpaScore', headerName: 'Resultado', flex: 1, align: 'center', headerAlign: 'center',},
    ]
    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult,
            showStatistics, setShowStatistics,rows, setRows,columns}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;