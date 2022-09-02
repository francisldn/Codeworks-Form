export const URL = `http://localhost:3001/events`

export const getEvents = async () => {
    return await fetch(URL)
                .then(res => res.json())
                .catch((error) => console.log(error))
}

export const postEvent = (data) => {
    return fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

export const sortEventsByDate = (events) => {
    console.log(events.sort((a,b) => Number(b.date) - Number(a.date)))
    return events.sort((a,b) => new Date(b.date) - new Date(a.date));
}

export const isLatestEvent = (events, event) => {
    return sortEventsByDate(events)[0].date === event.date? true: false;
}