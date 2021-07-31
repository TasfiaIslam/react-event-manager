import { Link } from "react-router-dom";

const EventCard = ({event, deleteEventHandler}) => {
    return ( 
        <div className="flex">
            <div className="w-1/3">
                <img src={event.photo} className="object-cover h-32 w-36 rounded-l-full"/>
            </div>
            <div className="w-2/3 flex flex-col space-y-2 justify-center relative">
                <div className="flex flex-row">
                    <Link to={{pathname: `/event/${event.id}`, state:{event}}}>
                        <p className="text-lg font-semibold text-pink-400">{event.name}</p>
                    </Link>
                    {event.priority == 'yes'? <span className="bg-green-50 hover:bg-indigo-200 text-green-400 hover:text-white text-sm font-semibold rounded-full px-2 py-1 mt-1 ml-4">important</span>: null }
                </div>
                <p className="text-gray-400 font-semibold flex space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </span> 
                    <span className="">{event.date}</span>
                </p>
                <p className="text-indigo-400 flex space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span>
                        {event.notes}
                    </span>
                </p>
                <div className="absolute top-0 right-1" onClick={() => deleteEventHandler(event.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default EventCard;