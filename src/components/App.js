import './App.css';
import Header from "./Header";
import EventList from "./EventList";
import AddEvent from "./AddEvent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="p-6 w-9/12 h-screen mx-auto bg-gray-50">
        <AddEvent />
        {/* <EventList /> */}
      </div>
    </div>
  );
}

export default App;
