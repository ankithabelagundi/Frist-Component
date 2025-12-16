import { useContext } from "react";
import { usercontext } from "./ComponentA";

function ComponentD(){
    const user=useContext(usercontext)
return(
    <div className="box">
        <h1>ComponenetD</h1>
        <h2>{`I Like the Courses from ${user}`}</h2>
    </div>
)
}
export default ComponentD;