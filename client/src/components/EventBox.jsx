import React from 'react'
import moment from 'moment';

const Eventbox = ({isLatestEvent, title, date, venue}) => {
  return (
    <div className="mx-[5%]">
        {isLatestEvent ? (
            <div className="w-[600px] h-[280px] bg-orange-500 text-white flex mb-[5%] mx-[20%] py-[5%] px-[5%] gap-16 rounded-xl hover:scale-110 transition-all">
                <div className="mb-8">
                    <p>NEXT EVENT</p>
                </div>
                <div className="text-center mt-[8%] flex flex-col gap-4">
                    <h2 className="font-bold text-3xl">{moment(date).format("Do MMM")}</h2>
                    <h2 className="text-3xl">{title}</h2>
                    <p>{date}</p>
                    <p>{venue}</p>
                </div>
            </div>)
         :
        (<div className="w-[600px] h-[200px]flex my-[2%] mx-[20%] border border-slate-500 gap-16 rounded-xl hover:scale-110 transition-all">
                <div className="flex">
                    <div className="bg-orange-500 text-white w-[20%] text-center py-[5%]">
                        <h2 className="font-bold text-3xl">{moment(date).format("Do MMM")}</h2>
                    </div>
                    <div className="flex flex-col w-full py-[4%] pl-[5%]">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p className="text-slate-500">{date}</p>
                        <p className="text-slate-500">{venue}</p>
                    </div>
                </div>
            </div>)}
    </div>
  )
}

export default Eventbox