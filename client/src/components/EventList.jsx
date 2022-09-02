import React,{useState, useEffect} from 'react'
import {getEvents, sortEventsByDate, isLatestEvent} from '../utils/ApiClient';
import EventBox from './EventBox';

const EventList = () => {
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        getEvents().then(data => setEventData(sortEventsByDate(data)))
    },[eventData])
    
    return (
        <div className="flex flex-col">
            {eventData.map(event => (<EventBox key={event._id} isLatestEvent={isLatestEvent(eventData,event)} title={event.title} date={event.date} venue={event.venue}/>))}
        </div>
    )
}

export default EventList