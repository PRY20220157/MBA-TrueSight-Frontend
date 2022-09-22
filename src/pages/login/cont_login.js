import React from 'react'
import {ViewLogin} from "./view_login";
import useAuth from "../../business/auth";

export const ContLogin = () => {

    const hook = useAuth();

    return (
        <>
            <ViewLogin/>
        </>
    )
}