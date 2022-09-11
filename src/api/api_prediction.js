import * as conn from './connection';
import {HD_AUTHORIZATION, OWL_MBA_TS, URL_TRUE_SIGHT_BACKEND} from "util/constants";
import { v4 as uuidv4 } from 'uuid';

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

export const massivePrediction = (file,user_id) => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    formData.append("massive_prediction_id", uuidv4());
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'model/massiveprediction/',
        method: 'post',
            data: formData,
        headers
    }
    return conn.send(config);
}
export const getPredictionsByUser = () => {
    let config = {
        url: URL_TRUE_SIGHT_BACKEND + 'predictionbyid/',
        method: 'post',
        headers,
        data: {
            userId:5 //change to local storage
        }
    }
    return conn.send(config);
}