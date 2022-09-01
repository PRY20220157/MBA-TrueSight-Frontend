import {useState} from "react";
import {massivePrediction} from "../../api/api_prediction";
import {useForm} from 'react-hook-form';
export function usePredictionMassive(){
    const fileTypes = ["xlsx", "csv"];
    const [file, setFile] = useState(null);
    const [error, setError] = useState(false);
    const handleChange = (file) => {
      setFile(file);
      handleChangeerror(false)
      
    };
    const handleChangeerror = (error) => {
        setError(error);
      };
    async function uploadFile(file){
        console.log("SUBIENDO ARCHIVO")
        console.log(file)
        if(file===null){
            handleChangeerror(true)
        }else{
            console.log("funciona")
            console.log(file[0])
        }
      
        //await massivePrediction(file).then();
    }
      
    
    return{
        file,setFile,uploadFile,fileTypes,handleChange,error
    }
}