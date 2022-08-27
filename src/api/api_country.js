import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";

const headers = {
    [HD_AUTHORIZATION]: localStorage.getItem(OWL_MBA_TS),
}
export const getCountries = () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + '/countries',
        method: 'get',
        headers
    }
    return conn.send(config);
}
