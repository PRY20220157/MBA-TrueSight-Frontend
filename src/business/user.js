import {getUserEmail, getUserId} from "../util/util";
import {useEffect, useState} from "react";
import {getUserInfo} from "../api/api_user";
import {COUNTRIES, UNIVERSITIES, USER_TYPES_NAMES} from "../util/constants";
import {getDateTime} from "../util/date";

export default function useUser() {

    const userEmail = getUserEmail()
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getInfo().then()
    }, []);
    useEffect(() => {
        console.log(info)
    }, [info]);

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
    return {
        info, loading
    }
}