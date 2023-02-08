import { REACT_APP_LOCAL_URL, REACT_APP_TOKEN } from "@env";

/**Fetch one booking by reference */
export const getBooking = async (reference) => {
    const response = await fetch(`${REACT_APP_LOCAL_URL}${reference}`, {
        method: 'POST',
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${REACT_APP_TOKEN}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: null
    })

    const json = await response.json();
    return json;
}
