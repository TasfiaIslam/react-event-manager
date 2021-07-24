import './App.css';
import Header from "./Header";
import EventList from "./EventList";
import AddEvent from "./AddEvent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-9/12 h-screen mx-auto bg-gray-200">
        <AddEvent />
        <EventList />
      </div>
    </div>
  );
}

export default App;
