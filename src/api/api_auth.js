import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import axios from "axios";

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
    return conn.send(config);
}
