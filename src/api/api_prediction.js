import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import {v4 as uuidv4} from 'uuid';
import {getUserId} from "../util/util";
import axios from "axios";

const headers = {
    [HD_AUTHORIZATION]: localStorage.getItem(OWL_MBA_TS),
}

export const singlePrediction = (data) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'model/singleprediction/',
        method: 'post',
        headers,
        data
    }
    return conn.send(config);
}

export const massivePrediction = (file, user_id) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'model/massiveprediction/',
        method: 'post',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    return conn.send(config);
}
export const getPredictionsByUser = (data) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'getpredictionsbydate/',
        method: 'post',
        headers,
        data
    }
    return conn.send(config);
}
export const deletePrediction = (predId) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'predictions/' + predId,
        method: 'delete',
        headers,

    }
    return conn.send(config);
}
export const deleteMassivePrediction = (massPredId) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'deletemassivepredictions/' + massPredId,
        method: 'delete',
        headers,

    }
    return conn.send(config);
}

export const deleteAllPredictions = async () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'deleteallpredictions/' + getUserId(),
        method: 'delete',
        headers,

    }
    let result = await axios(config).then();
    console.log(result)
    return result;
}
export const deleteUser = async (userId) => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'deleteuserabyuserid/' + (userId ?? getUserId()),
        method: 'delete',
        headers,
    }
    let result = await axios(config).then();
    console.log(result)
    return result;
}

export const calculateAverage = () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'calculateaverage/',
        method: 'get',
        headers,
    }
    return conn.send(config);
}

export const getAverageBase = () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'getaveragebase/',
        method: 'get',
        headers,
    }
    return conn.send(config);
}
export const getAverage = () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'getaverage/',
        method: 'get',
        headers
    }
    return conn.send(config);
}