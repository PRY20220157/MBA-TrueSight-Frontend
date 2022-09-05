import {PredictionMassiveContext} from "./context";
import {useState} from "react";

function PredictionMassiveProvider({children}) {

    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState([]);

    return(
        <PredictionMassiveContext.Provider value={{showResult, setShowResult,result, setResult}}>
            {children}
        </PredictionMassiveContext.Provider>
    )

}
export default PredictionMassiveProvider;