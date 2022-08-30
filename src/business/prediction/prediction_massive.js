import {useState} from "react";
import {massivePrediction} from "../../api/api_prediction";

export function usePredictionMassive(){
    const [file, setFile] = useState();

    async function uploadFile(file){
        console.log("SUBIENDO ARCHIVO")
        console.log(file)
        //await massivePrediction(file).then();
    }

    return{
        file,setFile,uploadFile
    }
}