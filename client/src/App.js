import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import Header from "./components/Header";
import React, {useState} from 'react';
function App() {
  const [eventData, setEventData] = useState([])

  return (
    <div>
      <nav className="py-5">
        <Header />
      </nav>
      <hr className="border border-slate-400 shadow-xl"/>
      <div className="flex justify-between mr-[15%] mt-[4%]">
        <div><EventList eventData={eventData} setEventData={setEventData}/></div>
        <div><EventForm setEventData={setEventData}/></div>
      </div>
    </div>
  );
}

export default App;
