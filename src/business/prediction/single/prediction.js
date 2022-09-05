import * as apiPrediction from "../../../api/api_prediction";
import {useState} from "react";
import {GRADES} from "../../../util/constants";
import {usePredictionContext} from "./context";


export const usePrediction = () => {

    const {setResult,setShowResult,setGrades} = usePredictionContext()

    async function onSubmit(data){
        console.log(data)
        setGrades(data)
        await apiPrediction.singlePrediction(new Array(data)).then(res => {
            setResult(res.grad_gpa)
            setShowResult(true)
        })
        
    }
    function clearForm(){
        document.getElementById('inp_' + GRADES.GPA).value = '';
        document.getElementById('inp_' + GRADES.GMAT).value = '';
        document.getElementById('inp_' + GRADES.APP_TYPE).value = '';
        document.getElementById('inp_' + GRADES.WORk_EXP).value = '';
    }

    return {
        clearForm,
        onSubmit
    }
}