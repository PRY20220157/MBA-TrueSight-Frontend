const PROFILE = 'LOCAL'; //LOCAL // DEV
const URl_TRUESIGHT_ALL = {
    'LOCAL': 'http://ec2-3-14-15-208.us-east-2.compute.amazonaws.com:8000/',
    'DEV': 'http://ec2-18-223-22-15.us-east-2.compute.amazonaws.com:8000',
}
export const URL_TRUE_SIGHT_BACKEND = URl_TRUESIGHT_ALL[PROFILE]
//HEADERS
export const HD_AUTHORIZATION = 'Authorization'

//LOCAL STORAGE
export const OWL_MBA_TS = 'owl_mba_truesight'

//GRADES
export const GRADES = {
    GMAT : 'GMAT',
    GPA:'GPA',
    WORk_EXP:'WORK_EXPERIENCE',
    APP_TYPE: 'APP_TYPE'

}

