import {decryptWithAES} from "./AES";
import {LS_USER_TP, USER_TYPES} from "./constants";

const checkProfile = (profile) => {
    let keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (decryptWithAES(keys[i]) === decryptWithAES(LS_USER_TP)) {
            return decryptWithAES(localStorage.getItem(keys[i])) === decryptWithAES(profile);
        }
    }
}

export const isStudent = () => {
    return checkProfile(USER_TYPES.STUDENT)
}

export const isRecruiter = () => {
    return checkProfile(USER_TYPES.RECRUITER)
}

