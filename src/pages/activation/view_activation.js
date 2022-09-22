import {Box} from "@mui/material";
import {CircleLoader} from "react-spinners";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import * as React from "react";
import useAuth from "../../business/auth";

export const ViewActivation = props => {

    const hook = useAuth({activate: true})
    useEffect(() => {
        if (hook.showAlert) {
            toast.success(hook.alertContent, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            hook.setShowAlert(false)
        }
    }, [hook.showAlert]);

    return (
        <>
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height='100vh'>
                <CircleLoader color='#1976d2' loading={true} size={500}/>
            </Box>
        </>
    )
}