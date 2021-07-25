import React from "react"

class AddEvent extends React.Component{
    render(){
        return(
            <div className="p-6 shadow-md w-3/5 mx-auto bg-gray-600">
                <div className="py-4 my-4 w-9/12 mx-auto">
                    <h2 className="my-2 ml-4 text-2xl text-red-200 font-semibold">Add Event</h2>
                    <form className="flex flex-col">
                        <div className="my-2">
                            <label className="mx-4 text-gray-50">Event Name</label>
                            <input 
                                    
                                    id="name" type="text" placeholder="Name" 
                                    className="pl-1 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2">
                            <label className="mx-4 text-gray-50">Event Name</label>
                            <input 
                                    
                                    id="name" type="text" placeholder="Name" 
                                    className="pl-1 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2">
                            <label className="mx-4 text-gray-50">Event Name</label>
                            <input 
                                    
                                    id="name" type="text" placeholder="Name" 
                                    className="pl-1 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2">
                            <label className="mx-4 text-gray-50">Event Name</label>
                            <input 
                                    
                                    id="name" type="text" placeholder="Name" 
                                    className="pl-1 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <button className="my-2 ml-4 p-1 w-3/5 md:w-2/5 bg-indigo-400 hover:bg-indigo-600 text-white font-bold  rounded focus:outline-none focus:shadow-outline" type="submit">
                                Add 
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEvent;