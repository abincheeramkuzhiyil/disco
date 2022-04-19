export function changeDate(date, numOfDays) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + numOfDays
    );
}
