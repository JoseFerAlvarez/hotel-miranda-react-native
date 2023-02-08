/**Format one date */
const formatDate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
}

/**Get booking price from number of days */
const getBookingPrice = (checkin, checkout, price) => {
    const time = ((new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)).toFixed(0);
    return ((time * price) / 100).toFixed(2);
}

/**Get the total number of days */
const getDays = (checkin, checkout) => {
    return ((new Date(checkout).getTime() - new Date(checkin).getTime()) / (1000 * 60 * 60 * 24)).toFixed(0);
}

export {
    formatDate,
    getBookingPrice,
    getDays
};
