import React,{useEffect} from 'react'
import {getEvents, sortAndFilterEventsByDate, isLatestEvent} from '../utils/ApiClient';
import EventBox from './EventBox';

const EventList = ({eventData, setEventData}) => {
    

    useEffect(() => {
        getEvents().then(data => setEventData(sortAndFilterEventsByDate(data)))
    },[])
    
    return (
        <div className="flex flex-col" id="list">
            {eventData.map(event => (<EventBox key={event._id} isLatestEvent={isLatestEvent(eventData,event)} title={event.title} date={event.date} venue={event.venue}/>))}
        </div>
    )
}

export default EventList