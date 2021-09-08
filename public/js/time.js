export function unixToDate(unixStamp) {
    return new Date(unixStamp).toLocaleDateString();
}

export function dayOfTheWeek(timeStamp) {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[new Date(timeStamp).getDay()];
}