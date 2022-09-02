import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import {postEvent} from '../utils/ApiClient';

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    await postEvent({title: data.title, date: data.date, venue: data.venue})
  };


  return (
    <div className="flex flex-col justify-center border-2 border-slate-300 pt-[5%] px-[10%] w-[550px] gap-10">
      <h1 className="font-bold text-3xl">Create a new event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 pb-[10%]">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-bold">TITLE</label>
          <input
            name="title"
            placeholder="Codework assessment"
            {...register("title", { required: true, maxLength: 20 })}
            className="border h-14 rounded-lg placeholder:pl-3" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-bold">DATE</label>
          <input
            name="date"
            type="datetime"
            placeholder= "DD/MM/YYYY, HH:mm"
            {...register("date", {setValueAs: date => new Date(date),required: true, valueAsDate:true})} 
            className="border h-14 rounded-lg placeholder:pl-3" 
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="venue" className="font-bold">VENUE</label>
          <input
            name="venue"
            placeholder="London"
            {...register("venue", { required: true, maxLength: 20 })} 
            className="border h-14 rounded-lg placeholder:pl-3" 
          /> 
        </div>
        <input type="submit" className=""/>
    </form>
    </div>
  )
}

export default EventForm