export function changeDate(date, numOfDays) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + numOfDays
    );
}

export function changeMonth(date, numOfMonths) {
    return new Date(
        date.getFullYear(),
        date.getMonth() + numOfMonths,
        date.getDate()
    );
}

export function changeYear(date, numOfYears) {
    return new Date(
        date.getFullYear() + numOfYears,
        date.getMonth(),
        date.getDate()
    );
}

export function formatDateForDateControl(date) {
    let day = String(date.getDate());
    day = day.length === 1 ? `0${day}` : day;

    let month = String(date.getMonth() + 1);
    month = month.length === 1 ? `0${month}` : month;

    return `${date.getFullYear()}-${month}-${day}`;
}
