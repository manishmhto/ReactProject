import { useState } from "react";

export default function Name() {
    // let name = "Gaman";
    let[name, setName] = useState("Gamana");
    const change = () => {
        setName("Chandu");
    }
  return (
    <div>
        <h1>Hello {name}!</h1>
        <button onClick={change}>change name</button>
    </div>
    
  )
}
