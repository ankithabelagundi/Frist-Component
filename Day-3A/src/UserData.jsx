import { useState, useEffect } from "react";

function UserData(){
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>response.json())
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching user:",error);
            setLoading(false);
        });

    },[]);
    if (loading){
        return<h3>Loading...</h3>
    }
    return(
        <div>
            <h2>User Data</h2>
            <p><strong>Name</strong>{user.name}</p>
            <p><strong>Email</strong>{user.email}</p>
            <p><strong>Phone</strong>{user.phone}</p>
        </div>
    );
}
export default UserData;