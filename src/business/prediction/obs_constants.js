import {Tooltip} from "@mui/material";
import {CompareArrows, HorizontalRule, KeyboardDoubleArrowDown, KeyboardDoubleArrowUp} from "@mui/icons-material";
import {COLOR_ALERT, COLOR_DANG, COLOR_SUCCESS} from "../../util/constants";
import React from "react";

const supIcon = <>
    <Tooltip title={'Puntaje superior al promedio'} placement="top">
        < KeyboardDoubleArrowUp sx={{color: COLOR_SUCCESS}}/>
    </Tooltip>
</>
const lessIcon = <>
    <Tooltip title={'Puntaje inferior al promedio'} placement="top">
        < KeyboardDoubleArrowDown sx={{color: COLOR_DANG}}/>
    </Tooltip>
</>

const eqIcon = <>
    <Tooltip title={'Puntaje promedio'} placement="top">
        <  CompareArrows sx={{color: COLOR_ALERT}}/>
    </Tooltip>
</>


export const handleFloatGrades = (val,avg,isInteger) => {
    let value = null
    let average = null
    if(isInteger){
        value = parseInt(val)
        average = parseInt(avg)
    }else {
        value = parseFloat(val)
        average = parseFloat(avg)
    }
    if (value > average)
        return  <>{val}<>&nbsp;</>{supIcon}</>
    if (value < average )
        return  <>{val}<>&nbsp;</>{lessIcon}</>
    if (value === average)
        return  <>{val}<>&nbsp;</>{eqIcon}</>

}