import { useState } from "react";

export default function Greet() {
    const[name, setName] = useState("Gammana");
    return(
        <div>
            <h1>Baba {name}</h1>
            <button onClick={() => setName(" Tillu")}>Change Name</button>
            <button onClick={() => setName("Btech from Delhi")}>Reset</button>
        </div>
    )
}