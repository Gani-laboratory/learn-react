import React, { useEffect, useState } from "react";
import axios from "axios";

const Bot = ()=>{
    const apikey = "your ampikey v:"
    const [text, setText] = useState("hello")
    const [responBot, setResponBot] = useState("")

    useEffect( () => {
        const fetch = async() =>{
            try {
                await axios({
                    url: `https://shinigami-rest.herokuapp.com/api/fun/clever?teks=${text}`,
                    method: "GET",
                    headers: {
                        "x-apikey": apikey
                    }
                }).then((val) => setResponBot(val.data.data))
            } catch(e) {
                console.log(e)
            }

        }
        fetch()
    })
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios({
                url: `https://shinigami-rest.herokuapp.com/api/fun/clever?teks=${text}`,
                method: "GET",
                headers: {
                    "x-apikey": apikey
                }
            }).then((val) => setResponBot(val.data.data))
        } catch(e) {
            console.log(e)
        }
    }
    const onChange = (event) => {
        event.preventDefault()
        setText(event.target.value)
    }
    return(
        <div className="p-10">
            <h1>Talk with bot</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} name="ngomong" className="border-solid border-black border-2 mr-10" value={text} id="ngomong"/>
                <button type="submit" className="px-4 py-3 bg-gray-300 text-black rounded-lg">Kirim</button>
            </form>
            <p>{responBot}</p>
        </div>
    );
}
export default Bot;