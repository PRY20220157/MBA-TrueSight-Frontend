import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import axios from "axios";

const headers = {
    [HD_AUTHORIZATION]: localStorage.getItem(OWL_MBA_TS),
}
export const getUserInfo = (email) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'usersbyemail/',
        method: 'post',
        headers,
        data: {
            email
        }
    }
    return conn.send(config);
}

export const getUsers = async () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'users/',
        method: 'get',
        headers
    }
    let result = await axios(config).then();
    console.log(result)
    return result;
}