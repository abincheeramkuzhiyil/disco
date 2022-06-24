export function getMonthAndYear(date) {
    return date.toLocaleString('default', { month: "short", year: 'numeric' });
}

export function getYear(date) {
    return date.toLocaleString('default', { year: 'numeric' })
}

export function getWeekDayName(day) {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekday[day];
}

export function getLastDayInMonthInfo(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateOfLastDayInMonth = new Date(year, month, 0)
    return {
        lastDayInMonth: dateOfLastDayInMonth.getDate(),
        nameOfLastDayInMonth: getWeekDayName(dateOfLastDayInMonth.getDay())
    }
}