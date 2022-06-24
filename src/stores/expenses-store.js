export function getExpensesForDay(persistedExps, date) {
    let month = String(date.getMonth() + 1);
    month = month.length === 1 ? `0${month}` : month;

    let day = String(date.getDate());
    day = day.length === 1 ? `0${day}` : day;

    const dateString = `${date.getFullYear()}-${month}-${day}`;
    return persistedExps.filter(e => e.date === dateString);
}