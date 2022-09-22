import {decryptWithAES} from "./AES";
import {LS_USER_EMAIL, LS_USER_ID, LS_USER_TP, OWL_MBA_TS, USER_TYPES} from "./constants";

const checkProfile = (profile) => {
    let keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (decryptWithAES(keys[i]) === decryptWithAES(LS_USER_TP)) {
            return decryptWithAES(localStorage.getItem(keys[i])) === decryptWithAES(profile);
        }
    }
}
const getItemFromLS = key => {
    let keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (decryptWithAES(keys[i]) === decryptWithAES(key)) {
            return decryptWithAES(localStorage.getItem(keys[i]))
        }
    }
}
export const getUserId = () => {
    return parseInt(getItemFromLS(LS_USER_ID));
}

export const getUserEmail = () => {
    return getItemFromLS(LS_USER_EMAIL)
}

export const getToken = () => {
    return getItemFromLS(OWL_MBA_TS);
}


export const isStudent = () => {
    return checkProfile(USER_TYPES.STUDENT)
}

export const isRecruiter = () => {
    return checkProfile(USER_TYPES.RECRUITER)
}

