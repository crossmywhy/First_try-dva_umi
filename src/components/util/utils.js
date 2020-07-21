
/**
 * Trim out the year-month-date part from Date JSONString. Return e.g. "1975-08-19".
 * @param {*} JSONString e.g. "1975-08-19T23:15:30.000Z".
 */
export function trimToDate(JSONString){
    return JSONString.slice(0, 10)+" "+JSONString.slice(11, 19);
}

/**
 * Randomly generate an integer from 1 to 10^digit.
 * @param {*} digit int. number of digit.
 */
export function idGenerator(digit){
    return (Math.floor(Math.random() * Math.pow(10, digit)) + 1);
}



