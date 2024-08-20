import moment from 'moment-timezone';

// Get Local Time from the device
export function getLocalTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Convert UTC to Local Time
export function convertUTCToLocal(utcDate, timeZone) {
  return moment.utc(utcDate).tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
}

// Convert Local Time to UTC
export function convertLocalToUTC(localDate, timeZone) {
  return moment.tz(localDate, timeZone).utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
}
