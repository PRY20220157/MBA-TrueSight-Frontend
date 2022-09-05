import {useState} from "react";
import {massivePrediction} from "api/api_prediction";
import {useForm} from 'react-hook-form';
import {usePredictionMassiveContext} from "./context";
export function usePredictionMassive(){
    const fileTypes = ["xlsx", "csv"];
    const [file, setFile] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [rows, setRows] = useState([]);
    const columns = [
        {field:'id',headerName:'ID'},
        {field:'gpa',headerName:'GPA'},
        {field:'gmat',headerName:'GMAT'},
        {field:'wk_xp',headerName:'Experiencia Laboral'},
        {field:'app_type',headerName:'Tipo de MBA'},
        {field:'grad_gpa',headerName:'RESULT'},
    ]
    const handleChange = (file) => {
      setFile(file);
      handleChangeerror(false)
    };
    const handleChangeerror = (error) => {
        setError(error);
      };
    async function uploadFile(file){
        setLoading(true)
        console.log("SUBIENDO ARCHIVO")
        console.log(file)
        if(file===null){
            handleChangeerror(true)
        }else{
            console.log("funciona")
            console.log(file[0])
        }
      
        await massivePrediction(file).then(res => {
            console.log(res)
            setLoading(false)
            let tmp = [...res]
            tmp.forEach((t,index) => t.id = index + 1 )
            setRows(tmp)
            setShowResult(true)
        });
    }

    
    return{
        file,setFile,uploadFile,fileTypes,handleChange,error, loading, showResult,columns,rows,setShowResult
    }
}