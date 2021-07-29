import { Link } from "react-router-dom";
import EventCard from "./EventCard"

const EventList = ({events, getEventId}) => {
    const deleteEventHandler = (id) => {
        getEventId(id);
    }
    return ( 
        <div className="p-4 shadow-md w-3/5  mx-auto rounded-xl bg-gray-600 mt-6 justify-center">
                <div className="mt-2 mb-4 flex justify-between items-center">
                    <h2 className="ml-14 text-2xl text-gray-50 font-semibold">All Events</h2>
                    <Link to="/add">
                        <button className="w-16 h-10  text-sm text-gray-50 font-semibold rounded-lg bg-indigo-400 hover:bg-indigo-200 hover:text-gray-600">
                            New
                        </button>
                    </Link>
                </div>
                {events.map((event) => (
                    <div key={event.id} className="bg-red-50 mb-4 h-32 rounded-l-full shadow-md ">
                        <EventCard event={event} deleteEventHandler={ deleteEventHandler }/>
                    </div>
                ))}
        </div>
     );
}
 
export default EventList;