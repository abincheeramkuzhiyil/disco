export function changeDate(date, numOfDays) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + numOfDays
    );
}

export function formatDateForDateControl(date) {
    let day = String(date.getDate());
    day = day.length === 1 ? `0${day}` : day;

    let month = String(date.getMonth() + 1);
    month = month.length === 1 ? `0${month}` : month;

    return `${date.getFullYear()}-${month}-${day}`;
}
