import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import { v4 as uuidv4 } from 'uuid';

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