import { useState,createContext } from "react";
import ComponentB from "./ComponentB";
export const usercontext=createContext();
function ComponentA(){
    const[user,setUser]=useState("masai");


return(
    <div className="box">
        <h1>ComponenetA</h1>
        <h2>{`hello welcome to ${user}`}</h2>
        

        <usercontext.Provider value={user}>
      <ComponentB/>
        </usercontext.Provider>
    </div>
)
}
export default ComponentA;