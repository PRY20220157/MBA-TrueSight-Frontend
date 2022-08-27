import * as apiPrediction from "../api/api_prediction";
import {useState} from "react";
import {GRADES} from "../util/constants";


export const usePrediction = () => {

    async function makePrediction(e){
        const data = new FormData(e.currentTarget);
        e.preventDefault()
        console.log({
            gmat: data.get(GRADES.GMAT),
            gpa: data.get(GRADES.GPA),
            wk_xp: data.get(GRADES.WORk_EXP),
            app_type: data.get(GRADES.APP_TYPE)
        })
    /*    await apiPrediction.singlePrediction({
            gmat: data.get(GRADES.GMAT),
            gpa: data.get(GRADES.GPA),
            wk_xp: data.get(GRADES.WORk_EXP),
            app_type: data.get(GRADES.APP_TYPE)
        }).then(res =>{
            console.log(res)
        })*/
    }

    function clearForm(){
        document.getElementById('inp_' + GRADES.GPA).value = '';
        document.getElementById('inp_' + GRADES.GMAT).value = '';
        document.getElementById('inp_' + GRADES.APP_TYPE).value = '';
        document.getElementById('inp_' + GRADES.WORk_EXP).value = '';
    }

    return {
        makePrediction,
        clearForm
    }
}