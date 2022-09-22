import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import axios from "axios";
import {getUserEmail} from "../util/util";

const headers = {
    [HD_AUTHORIZATION]: localStorage.getItem(OWL_MBA_TS),
}
export const authenticate = async (data) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'auth/jwt/create/',
        method: 'post',
        headers,
        data
    }
    let result = await axios(config).then();
    console.log(result)
    return result;
}
export const sendResetPasswordEmail = async (data) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'auth/users/reset_password/',
        method: 'post',
        headers,
        data:{
            email:getUserEmail()
        }
    }
    return conn.send(config);
}
export const resetPasswd = async (data) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'auth/users/reset_password_confirm/',
        method: 'post',
        headers,
        data
    }
    return conn.send(config);
}
