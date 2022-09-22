import axios from "axios";

export async function send(config) {
    let result = await sendAxios(config);
    return validateResponse((result))
}

async function validateResponse(result) {
    if (result === null)
        return '(e) No answer from server';
    if (result.status !== undefined && result.status === 200)
        return result.data;
    //TODO status validations
}

export async function sendAxios(config) {
    return axios(config).then(
        function (response) {
            return response;
        }
    ).catch(
        function (error) {
            return error;
        }
    )
}