import './App.css';
import Header from "./Header";
import EventList from "./EventList";
import AddEvent from "./AddEvent";

function App() {
  const events = [
    {
      id: 1,
      name: "Birthday Party",
      date: "26th July 8 pm",
      notes: "Buy a gift",
      photo: "https://i.pinimg.com/originals/ef/59/2b/ef592b7ee3672d9c7677e507919100b6.jpg"
    },
    {
      id: 2,
      name: "Hangout",
      date: "29th July 5 pm",
      notes: "Select a place",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHL6pVxy-VQvCmjXCh-tvoyLiksjTONfX4g&usqp=CAU"
    }
  ]
  return (
    <div className="App">
      <Header />
      <div className="p-6 w-9/12 min-h-screen mx-auto bg-gray-200">
        <AddEvent />
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;
