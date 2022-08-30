import {PredictionContext} from "./context";
import {useState} from "react";

function PredictionProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [grades, setGrades] = useState({
        gmat: 0,
        gpa: 0,
        wk_xp: 0,
        app_type: 0
    });
    return (
        <PredictionContext.Provider value={{showResult,setShowResult,grades,setGrades}}>
            {children}
        </PredictionContext.Provider>
    );
}

export default PredictionProvider;