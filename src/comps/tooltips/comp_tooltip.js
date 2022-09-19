import {Tooltip} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
export const CompTooltip = (props) => {
    const {description} = props
    return (
        <>
            <Tooltip title={description} placement="right">
                <InfoIcon sx={{color:"#3966ff"}} fontSize={'10px'}/>
            </Tooltip>
        </>
    )
}