import {useState} from "react";
import {massivePrediction} from "api/api_prediction";
import {useForm} from 'react-hook-form';
import {usePredictionMassiveContext} from "./context";
import {getUserId, loadMBAType} from "../../../util/util";
import {MBA_TYPES, URL_FRONTAL} from "../../../util/constants";

export function  usePredictionMassive() {
    const {setResult,showResult, setShowResult,rows, setRows, columns} = usePredictionMassiveContext()
    const fileTypes = ["xlsx", "csv"];
    const [file, setFile] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const userId = getUserId()

    const handleChange = (file) => {
        setFile(file);
        handleChangeerror(false)
    };
    const handleChangeerror = (error) => {
        setError(error);
    };
    async function uploadFile(file) {
        setLoading(true)
        if (file === null) {
            handleChangeerror(true)
        }
        await massivePrediction(file,userId).then(res => {
            console.log(res)
            setLoading(false)
            let tmp = [...res]
            tmp.forEach((t, index) => {
                t.id = index + 1;
                t.grad_gpa = parseFloat(t.grad_gpa).toFixed(2)
                t.appTypeId =  t.app_type
                t.app_type = loadMBAType(t.app_type)
                t.gmatScore = t.gmat
                t.gpaScore = t.gpa
                t.workExp = t.wk_xp
                t.gradGpaScore = t.grad_gpa
                t.studentId = t.student_id
            })
            setResult(tmp)
            setRows(tmp)
            setShowResult(true)
        });
    }
 const downloadTemplate = () =>{

         window.location.href = URL_FRONTAL + 'templates/' + 'BU_MBA_salaries.xlsx';

 }

    return {
        file, setFile, uploadFile, fileTypes, handleChange, error, loading, showResult, columns, rows, setShowResult,
        downloadTemplate
    }
}