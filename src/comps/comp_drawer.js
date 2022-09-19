import {Button} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import {useState} from "react";
import {COLOR_SEC} from "../util/constants";

export const CompDrawer = props => {

    const [state, setState] = useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return(
        <React.Fragment key={'right'}>
            <Button variant="contained" onClick={toggleDrawer('right', true)} sx={{backgroundColor:COLOR_SEC}}>{props.label}</Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {props.children}
            </Drawer>
        </React.Fragment>
    )
}