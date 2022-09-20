import {Dialog, DialogActions, DialogContent, Slide} from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import {forwardRef} from "react";

export const CompDialog = props =>{

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>{props.children}</DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancelar</Button>
                <Button onClick={props.execFunc} autoFocus>{props.labelAccept}</Button>
            </DialogActions>
        </Dialog>
    )
}
CompDialog.propTypes = {
    labelAccept: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    execFunc: PropTypes.func.isRequired,
    open:PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
}