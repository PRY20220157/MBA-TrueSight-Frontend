import {encryptWithAES} from "./AES";

const PROFILE = 'DEV'; //LOCAL // DEV
const URl_TRUESIGHT_ALL = {
    'LOCAL': 'https://truesightupc.herokuapp.com/',
    'DEV': 'https://truesightupc.herokuapp.com/',
}
const URL_FRONTAL_ALL = {
    'LOCAL': 'https://localhost:3000/',
    'DEV': 'https://truesightupc.herokuapp.com/',
}
export const URL_FRONTAL = URL_FRONTAL_ALL[PROFILE]
export const URL_TRUE_SIGHT_BACKEND = URl_TRUESIGHT_ALL[PROFILE]
//HEADERS
export const HD_AUTHORIZATION = 'Authorization'

export const SECRET_KEY = '!AK4523VHBIU2TY37Y3BO#$%$fwdfASDFASD'

//LOCAL STORAGE
export const OWL_MBA_TS = encryptWithAES('owl_mba_truesight')
export const LS_USER_ID = encryptWithAES('user_id');
export const LS_USER_TP = encryptWithAES('user_type')
export const LS_USER_EMAIL = encryptWithAES('user_email')

//GRADES
export const GRADES_KEYS = {
    GMAT: 'GMAT',
    GPA: 'GPA',
    WORk_EXP: 'WORK_EXPERIENCE',
    APP_TYPE: 'APP_TYPE'
}

export const ALL_GRADES = [GRADES_KEYS.GMAT,GRADES_KEYS.GPA,GRADES_KEYS.WORk_EXP,GRADES_KEYS.APP_TYPE]

export const USER_TYPES = {
    ADMIN: encryptWithAES('1'),
    STUDENT: encryptWithAES('2'),
    RECRUITER: encryptWithAES('3'),
}

export const USER_TYPES_NAMES = {
    1: "Admin",
    2: "Estudiante",
    3: "Reclutador"
}

export const COUNTRIES = {
    1: "Perú"
}
export const UNIVERSITIES = {
    1: "Universidad Peruana de Ciencias Aplicadas"
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
export const COLOR_PRIM = "#04094A"
export const COLOR_SEC = "#3966ff"