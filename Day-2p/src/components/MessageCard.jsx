function Messagecard(props){
return(
    <div style={{broder:"1px solid #ccc", padding:"16px", margin:"10px", borderRadius:"8px"}}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
    </div>
)
}
export default Messagecard;