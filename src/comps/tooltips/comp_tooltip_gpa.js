import {CompTooltip} from "./comp_tooltip";
import {useEffect, useState} from "react";
import {GRADES_KEYS} from "../../util/constants";

export const CompTooltipGrade = props => {

    const {type} = props
    const [desc, setDesc] = useState("");

    useEffect(() => {
        switch (type){
            case GRADES_KEYS.GPA:setDesc("aaaaa");break;
            case GRADES_KEYS.GMAT:setDesc("ssss");break;
            case GRADES_KEYS.APP_TYPE:setDesc("dddd");break;
            case GRADES_KEYS.WORk_EXP:setDesc("ffff");break;
        }
    }, []);


    return (
        <CompTooltip description={desc}/>
    )
}