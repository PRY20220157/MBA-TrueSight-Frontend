import {useState} from "react";
import {massivePrediction} from "api/api_prediction";
import {useForm} from 'react-hook-form';
import {usePredictionMassiveContext} from "./context";

export function usePredictionMassive() {
    const {setResult,showResult, setShowResult,rows, setRows, columns} = usePredictionMassiveContext()
    const fileTypes = ["xlsx", "csv"];
    const [file, setFile] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const userId = 5

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
                t.gradGpaScore = parseFloat(t.gradGpaScore).toFixed(2)
            })
            setResult(tmp)
            setRows(tmp)
            setShowResult(true)
        });
    }


    return {
        file, setFile, uploadFile, fileTypes, handleChange, error, loading, showResult, columns, rows, setShowResult
    }
}