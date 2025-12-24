import { Navigate } from "react-router-dom";

const ProtectedRoute=({childern})=>{
    const isLoggedIn=localStorage.getItem("isLoggedIn");
    if(isLoggedIn){
        return <Navigate to ="/login" replace/>;
    }
    return childern;
};
export default ProtectedRoute;