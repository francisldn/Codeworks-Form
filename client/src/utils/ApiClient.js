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

export const sortAndFilterEventsByDate = (events) => {
    const eventList = events.slice().filter(event => new Date(event.date) >= Date.now())
    return eventList.sort((a,b) => new Date(a.date) - new Date(b.date));
}

export const isLatestEvent = (events, event) => {
    return sortAndFilterEventsByDate(events)[0].date === event.date? true: false;
}