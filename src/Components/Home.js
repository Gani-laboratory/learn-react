import React from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalState";
const Home = ()=>{
    const [GlobalState, setGlobalState] = useContext(GlobalContext)
    const [user, setUser] = useState("");
    const onSubmit = (event) =>{
        event.preventDefault()
        setGlobalState({type:"setNama", payload:user})
    }
    const onChange = (event) =>{
        event.preventDefault();
        let inputId = event.target.id;
        let value = event.target.value;
        if(inputId === "userInput"){
            setUser(value)
        }
    }
    return(
        <div className="p-10">
            <p>{GlobalState.name}</p>
            <form onSubmit={onSubmit}>
                <input type="text" className="border-solid border-black border-2 mr-10" name="userInput" id="userInput" value={user} onChange={onChange}/>
                <button className="px-4 py-3 bg-gray-300 text-black rounded-lg" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Home;