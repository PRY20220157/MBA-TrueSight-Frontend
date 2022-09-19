import {CompTooltip} from "./comp_tooltip";
import {useEffect, useState} from "react";
import {GRADES_KEYS} from "../../util/constants";

export const CompTooltipGrade = props => {

    const {type} = props
    const [desc, setDesc] = useState("");

    useEffect(() => {
        switch (type){
            case GRADES_KEYS.GPA:setDesc("Promedio de notas obtenidas en pregrado.");break;
            case GRADES_KEYS.GMAT:setDesc("Puntaje total obtenido en el examen GMAT.");break;
            case GRADES_KEYS.APP_TYPE:setDesc("Tipo de MBA al que va a postular.");break;
            case GRADES_KEYS.WORk_EXP:setDesc("Número de años de experiencia previa a la postulación.");break;
        }
    }, []);


    return (
        <CompTooltip description={desc}/>
    )
}