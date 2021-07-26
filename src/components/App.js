import './App.css';
import Header from "./Header";
import EventList from "./EventList";
import AddEvent from "./AddEvent";
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';

function App() {
  const LOCAL_STORAGE_KEY = "events";
  const [events, setEvents] = useState([]);


  const addEventHandler = (event) => {
    setEvents([...events, {id: uuid(), ...event}])
    console.log(event)
  };

  const removeEventHandler = (id) => {
    const newEventList = events.filter((event)=>{
      return event.id !== id
    })
    setEvents(newEventList);
  }

  useEffect( () => {
    const retrieveEvents =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveEvents){
      setEvents(retrieveEvents);
    }
  },[]);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  },[events]);


  return (
    <div className="App">
      <Header />
      <div className="p-6 w-9/12 min-h-screen mx-auto bg-gray-200">
        <AddEvent addEventHandler={ addEventHandler }/>
        <EventList events={ events } getEventId={ removeEventHandler }/>
      </div>
    </div>
  );
}

export default App;
