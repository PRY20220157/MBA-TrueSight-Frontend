import {encryptWithAES} from "./AES";

const PROFILE = 'LOCAL'; //LOCAL // DEV
const URl_TRUESIGHT_ALL = {
    'LOCAL': 'http://ec2-18-222-7-20.us-east-2.compute.amazonaws.com:8000/',
    'DEV': 'http://ec2-18-223-22-15.us-east-2.compute.amazonaws.com:8000',
}
export const URL_TRUE_SIGHT_BACKEND = URl_TRUESIGHT_ALL[PROFILE]
//HEADERS
export const HD_AUTHORIZATION = 'Authorization'

export const SECRET_KEY = '!AK4523VHBIU2TY37Y3BO#$%$fwdfASDFASD'

//LOCAL STORAGE
export const OWL_MBA_TS = encryptWithAES('owl_mba_truesight')
export const LS_USER_ID = encryptWithAES('user_id');
export const LS_USER_TP = encryptWithAES('user_type')

//GRADES
export const GRADES = {
    GMAT: 'GMAT',
    GPA: 'GPA',
    WORk_EXP: 'WORK_EXPERIENCE',
    APP_TYPE: 'APP_TYPE'
}

export const USER_TYPES = {
    ADMIN: encryptWithAES('1'),
    STUDENT: encryptWithAES('2'),
    RECRUITER: encryptWithAES('3'),
}
export const MBA_TYPES = [
    {"id": 1, "name": "MBA in Health Sector Management/MPH in Global Health"},
    {"id": 2, "name": "MS·MBA in General Management"},
    {"id": 3, "name": "MBA in General Management/MA in Economics"},
    {"id": 4, "name": "MBA in Health Sector Management"},
    {"id": 5, "name": "MBA in General Management"},
    {"id": 6, "name": "MBA in General Management/MS in Media Ventures"},
    {"id": 7, "name": "MBA in Public and Nonprofit Management"},
    {"id": 8, "name": "MBA in Health Sector Management/MD"},
    {"id": 9, "name": "MBA in Health Sector Management/MPH in Health Care Management"},
    {"id": 10, "name": "MS·MBA in Public and Nonprofit Management"},
    {"id": 11, "name": "MBA in General Management/MA in International Relations"},
    {"id": 12, "name": "MBA in General Management/MS in Manufacturing Engineering"},
    {"id": 13, "name": "MS·MBA in Health Sector Management"},
    {"id": 14, "name": "MBA in Public and Nonprofit Management/MA in Economics"},
    {"id": 15, "name": "MBA in Health Sector Management/MPH in Global Health"},
    {"id": 16, "name": "MS·MBA in General Management"},
    {"id": 17, "name": "MBA in General Management/MA in Economics"},
    {"id": 18, "name": "MBA in Health Sector Management"},
    {"id": 19, "name": "MBA in General Management"},
    {"id": 20, "name": "MBA in General Management/MS in Media Ventures"},
    {"id": 21, "name": "MBA in Public and Nonprofit Management"},
    {"id": 22, "name": "MBA in Health Sector Management/MD"},
    {"id": 23, "name": "MBA in Health Sector Management/MPH in Health Care Management"},
    {"id": 24, "name": "MS·MBA in Public and Nonprofit Management"},
    {"id": 25, "name": "MBA in General Management/MA in International Relations"},
    {"id": 27, "name": "MBA in General Management/MS in Manufacturing Engineering"},
    {"id": 28, "name": "MS·MBA in Health Sector Management"},
    {"id": 29, "name": "MBA in Public and Nonprofit Management/MA in Economics"}
]

