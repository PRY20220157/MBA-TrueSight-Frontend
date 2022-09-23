import {getUserEmail, getUserId} from "../util/util";
import {useEffect, useState} from "react";
import {getUserInfo, getUserStatistics} from "../api/api_user";
import {COUNTRIES, UNIVERSITIES, USER_TYPES_NAMES} from "../util/constants";
import {getDateTime} from "../util/date";

export default function useUser() {

    const userEmail = getUserEmail()
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false);
    const [statistics, setStatistics] = useState({
        "predNum": 0,
        "predNumThisMonth": 0,
        "avgGpa": 0,
        "avgGmat": 0,
        "gradGpaAvg": 0,
        "workExpAvg": 0,
        "maxGpaResult": {
            "predictionId": 0,
            "userId": 0,
            "gmatScore": 0,
            "gpaScore": "0.00",
            "workExp": 0,
            "appType": 0,
            "gradGpaScore": "0.00",
            "creationDate": "",
            "massivePredictionId": 0,
            "predictionTypeId": 0,
            "studentId": ""
        },
        "maxGpaResultThisMonth": {
            "predictionId": 13325,
            "userId": 16,
            "gmatScore": 660,
            "gpaScore": "3.40",
            "workExp": 4,
            "appType": 4,
            "gradGpaScore": "3.82",
            "creationDate": "2022-09-23T05:42:10.255618Z",
            "massivePredictionId": 22,
            "predictionTypeId": 2,
            "studentId": "dd"
        }
    });

    useEffect(() => {
        getInfo().then()
        getStatistics()
    }, []);

    const getInfo = async () => {
        setLoading(true)
        await getUserInfo(userEmail).then(res => {
            let hlp = {
                name: res[1].userInfo[0].firstName,
                lastName: res[1].userInfo[0].lastName,
                email: res[0].user[0].email,
                userType: USER_TYPES_NAMES[res[0].user[0].userTypeId],
                country: COUNTRIES[res[1].userInfo[0].countryId],
                university: UNIVERSITIES[res[1].userInfo[0].universityId],
                creationDate: getDateTime(res[1].userInfo[0].creationDate),
                lastUpdateDate: getDateTime(res[1].userInfo[0].updatedDate),
            }
            setInfo(hlp)
            setLoading(false)
        })
    }

    const getStatistics = () => {
        setLoading(true)
        getUserStatistics().then(res => {
            setStatistics(res.data)
            setLoading(false)
        })
    }

    return {
        info, loading,statistics
    }
}