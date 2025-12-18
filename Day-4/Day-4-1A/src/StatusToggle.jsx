import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle(){
    const [status,setStatus]=useState(false);
    const handlClick=()=>{
     setStatus(!status);
    };
    return(
        <div>
            <button onClick={handlClick}>Toggle Status</button>
            {status? <ComponentA/>: <ComponentB/>}
        </div>
    );
}
export default StatusToggle;