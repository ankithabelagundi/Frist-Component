function TodoCard(){
    return(
        <div style={{border:"1px solid #ccc", padding:"10px", margin:"5px 0"}}>
            <p><strong>User.ID</strong>{User.name}</p>
            <p><strong>Title</strong>{title}</p>
            <p><strong>Status</strong>{completed ? "Completed":"Pending"}</p>
        </div>
    );
}
export default TodoCard;
