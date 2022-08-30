import React from 'react'
import {ViewLogin} from "./view_login";
import useLogin from "../../business/auth";

export const ContLogin = () => {

    const hook = useLogin();

    return (
        <>
            <ViewLogin/>
        </>
    )
}