import EventCard from "./EventCard"

const EventList = ({events}) => {
    return ( 
        <div className="p-4 shadow-md w-3/5 mx-auto bg-gray-600 mt-6">
                <div className="w-9/12 mx-auto">
                    <h2 className="mt-2 mb-6 ml-4 text-2xl text-gray-50 font-semibold">All Events</h2>
                </div>
                {events.map((event) => (
                    <div key={event.id} className="bg-red-50 mb-4 h-32 rounded-l-full shadow-md ">
                        <EventCard event={event}/>
                    </div>
                ))}
       
        </div>
     );
}
 
export default EventList;