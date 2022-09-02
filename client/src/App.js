import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <nav className="py-5">
        <Header />
      </nav>
      <hr className="border border-slate-400 shadow-xl"/>
      <div className="flex justify-between mr-[15%] mt-[4%]">
        <div><EventList /></div>
        <div><EventForm /></div>
      </div>
    </div>
  );
}

export default App;
