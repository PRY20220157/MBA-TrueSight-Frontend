import {CompTooltip} from "./comp_tooltip";
import {useEffect, useState} from "react";
import {GRADES_KEYS, GRADES_KEYS_EXCEL} from "../../util/constants";

export const CompTooltipGrade = props => {

    const {type} = props
    const [desc, setDesc] = useState("");

    useEffect(() => {
        switch (type) {
            case GRADES_KEYS_EXCEL.GPA:
            case GRADES_KEYS.GPA:
                setDesc("Promedio de notas obtenidas en pregrado.");
                break;
            case GRADES_KEYS_EXCEL.GMAT:
            case GRADES_KEYS.GMAT:
                setDesc("Puntaje total obtenido en el examen GMAT.");
                break;
            case GRADES_KEYS_EXCEL.APP_TYPE:
            case GRADES_KEYS.APP_TYPE:
                setDesc("Tipo de MBA al que va a postular.");
                break;
            case GRADES_KEYS_EXCEL.WORk_EXP:
            case GRADES_KEYS.WORk_EXP:
                setDesc("Número de años de experiencia previa a la postulación.");
                break;
            case GRADES_KEYS_EXCEL.STUDENT_ID:
                setDesc("Identificador del estudiante.");
                break;
        }
    }, []);


    return (
        <CompTooltip description={desc}/>
    )
}