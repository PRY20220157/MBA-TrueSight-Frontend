import * as apiPrediction from "../../../api/api_prediction";
import {useState} from "react";
import {GRADES_KEYS} from "../../../util/constants";
import {usePredictionContext} from "./context";


export const usePrediction = () => {

    const {setResult, setShowResult, setGrades} = usePredictionContext()
    const [loading, setLoading] = useState(false);
    const userId = 5

    async function onSubmit(data) {
        setLoading(true)
        data.gmat = parseInt(data.gmat)
        data.app_type = parseInt(data.app_type)
        data.gpa = parseFloat(data.gpa)
        data.wk_xp = parseFloat(data.wk_xp)
        data.userId = userId
        setGrades(data)
        await apiPrediction.singlePrediction(new Array(data)).then(res => {
            setResult(res.gradGpaScore)
            setLoading(false)
            setShowResult(true)
        })

    }

    return {
        onSubmit,
        loading
    }
}