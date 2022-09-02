import React from 'react'
import { useForm } from "react-hook-form";
import {postEvent, sortAndFilterEventsByDate, getEvents} from '../utils/ApiClient';
import { ErrorMessage } from '@hookform/error-message';

const EventForm = ({setEventData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try{
      await postEvent({title: data.title, date: data.date, venue: data.venue})
      const eventData = await getEvents();
      setEventData(sortAndFilterEventsByDate(eventData))
    } catch (error) {
      alert(new Error("Something is wrong. Please re-submit."))
    }
  };


  return (
    <div className="flex flex-col justify-center border-2 border-slate-300 pt-[5%] px-[10%] w-[30vw] gap-10 rounded-xl">
      <h1 className="font-bold text-3xl">Create a new event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 pb-[10%]">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-bold">TITLE</label>
          <input
            name="title"
            id="title"
            required
            placeholder="Codework assessment"
            {...register("title", { required: "Title field is required" })}
            className="border h-14 rounded-lg pl-3" 
          />
          {errors && <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-bold">DATE</label>
          <input
            name="date"
            id="date"
            type="datetime-local"
            placeholder= "DD/MM/YYYY, HH:mm"
            required
            {...register("date", {setValueAs: date => new Date(date),required: "Date field is required"})} 
            className="border h-14 rounded-lg pl-3" 
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="venue" className="font-bold">VENUE</label>
          <input
            name="venue"
            id="venue"
            required
            placeholder="London"
            {...register("venue", { required: "Venue field is required"})} 
            className="border h-14 rounded-lg pl-3" 
          /> 
          {errors && <ErrorMessage
            errors={errors}
            name="venue"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />}
        </div>
        <input type="submit" className="h-14 border bg-orange-500 text-2xl font-bold text-white rounded-xl hover:bg-black hover:scale-105 cursor-pointer"/>
    </form>
    </div>
  )
}

export default EventForm