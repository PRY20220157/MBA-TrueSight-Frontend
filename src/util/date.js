const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const moment = require('moment-timezone');

function getMoment(date) {
    return moment.utc(date).tz("America/Lima");
}

function dateProcessor(date, format) {
    return getMoment(date).format(format);
}
export const getDateTime = (date) => {
    return dateProcessor(date, DATETIME_FORMAT);
}