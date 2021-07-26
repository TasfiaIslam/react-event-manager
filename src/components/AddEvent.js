import React from "react"

class AddEvent extends React.Component{

     
    
    state = {
        name: "",
        date: "",
        notes: "",
        photo: null
    }

    handleImageInput = (e) => {
        const imgUrl = URL.createObjectURL(e.target.files[0]);
        this.state.photo = imgUrl;
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.date === "" || this.state.notes === ""){
            alert("All the fields are mandatory!!");
            return;
        }

        this.props.addEventHandler(this.state);
        
        this.setState({name: "", date: "", notes: "", photo: null})
        console.log(this.state);
    }


    render(){
        return(
            <div className="p-6 shadow-md w-3/5 mx-auto bg-gray-600">
                <div className="py-4 my-4 w-9/12 mx-auto">
                    <h2 className="my-2 ml-4 text-2xl text-red-200 font-semibold">Add Event</h2>
                    <form className="flex flex-col" onSubmit={this.add}>
                        <div className="my-2 flex">
                            <label className="mx-4 text-gray-50 w-1/3 ">Event Name</label>
                            <input 
                                    value={this.state.name}
                                    onChange={(e) => this.setState({name: e.target.value})}
                                    id="name" type="text" placeholder="Name" 
                                    className="w-2/3 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2 flex">
                            <label className="mx-4 text-gray-50 w-1/3 ">Event Date</label>
                            <input 
                                    value={this.state.date}
                                    onChange={(e) => this.setState({date: e.target.value})}
                                    id="name" type="text" placeholder="Date" 
                                    className="w-2/3 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2 flex">
                            <label className="mx-4 text-gray-50 w-1/3 ">Notes</label>
                            <textarea 
                                    value={this.state.notes}
                                    onChange={(e) => this.setState({notes: e.target.value})}
                                    id="notes" placeholder="Notes" 
                                    className="w-2/3 focus:outline-none focus:shadow-outline" 
                                />
                        </div>
                        <div className="my-2 flex">
                            <label className="mx-4 text-gray-50 w-1/3 ">Image</label>
                            <input 
                                    onChange={this.handleImageInput}
                                    id="photo" type="file" 
                                    className="w-2/3 text-gray-200" 
                                />
                        </div>
                        <button className="my-4 ml-4 p-1 w-3/5 md:w-2/5 bg-indigo-400 hover:bg-indigo-600 text-white font-bold  rounded focus:outline-none focus:shadow-outline" type="submit">
                                Add 
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEvent;