import React from 'react'
import {ViewLogin} from "./view_login";
import useLogin from "../../business/login";

export const ContLogin = () => {

    const hook = useLogin();

    return (
        <>
            <ViewLogin/>
        </>
    )
}