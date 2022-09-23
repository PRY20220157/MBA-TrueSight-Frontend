import {SECRET_KEY} from "./constants";

const CryptoJS = require('crypto-js');

export const encryptWithAES = (text) => {
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decryptWithAES = (ciphertext) => {
    let newExactString = ciphertext.replaceAll('"', '');
    const bytes = CryptoJS.AES.decrypt(newExactString, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};