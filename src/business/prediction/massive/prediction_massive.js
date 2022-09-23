import {useState} from "react";
import {massivePrediction} from "api/api_prediction";
import {useForm} from 'react-hook-form';
import {usePredictionMassiveContext} from "./context";
import {getUserId, loadMBAType} from "../../../util/util";
import {MBA_TYPES, URL_FRONTAL} from "../../../util/constants";
import XLSX from "xlsx";

export function usePredictionMassive() {
    const {setResult, showResult, setShowResult, rows, setRows, columns} = usePredictionMassiveContext()
    const fileTypes = ["xlsx", "csv"];
    const [file, setFile] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const userId = getUserId()
    let XLSX = require("xlsx");
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
        await massivePrediction(file, userId).then(res => {
            console.log(res)
            setLoading(false)
            let tmp = [...res]
            tmp.forEach((t, index) => {
                t.id = index + 1;
                t.grad_gpa = parseFloat(t.grad_gpa).toFixed(2)
                t.appTypeId = t.app_type
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

    const downloadXLSXTemplate = () => {
        getTemplate("xlsx", "Plantilla_Pred_Masiva.xlsx")
    }
    const downloadCSVTemplate = () => {
        getTemplate("csv", "Plantilla_Pred_Masiva.csv")
    }
    const getTemplate = (fileType, filename) => {
        const grades = [["student_id", "gmat", "gpa", "wk_xp", "app_type"]];
        const workbook = XLSX.utils.book_new(),
            worksheet = XLSX.utils.aoa_to_sheet(grades);
        workbook.SheetNames.push("Notas");
        workbook.Sheets["Notas"] = worksheet;

        const xlsbin = XLSX.write(workbook, {
            bookType: fileType,
            type: "binary"
        });
        let buffer = new ArrayBuffer(xlsbin.length),
            array = new Uint8Array(buffer);
        for (var i = 0; i < xlsbin.length; i++) {
            array[i] = xlsbin.charCodeAt(i) & 0XFF;
        }
        let xlsblob = new Blob([buffer], {type: "application/octet-stream"});

        let url = window.URL.createObjectURL(xlsblob),
            anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
        window.URL.revokeObjectURL(url);
        anchor.remove()
    }
    return {
        file, setFile, uploadFile, fileTypes, handleChange, error, loading, showResult, columns, rows, setShowResult,
        downloadXLSXTemplate,downloadCSVTemplate
    }
}