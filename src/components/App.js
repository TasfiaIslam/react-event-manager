import './App.css';
import Header from "./Header";
import EventList from "./EventList";
import AddEvent from "./AddEvent";
import EventDetail from './EventDetail';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact 
              render={(props) => (<EventList {...props} events={ events } getEventId={ removeEventHandler }/>) } 
            />
            <Route 
              path="/add"  
              render={(props) => (<AddEvent {...props} addEventHandler={ addEventHandler }/>) } 
            />
            <Route path="/event/:id" component={EventDetail} />
          </Switch>
          </Router>
      </div> 
    </div>
  );
}

export default App;
