import { useState } from "react";

const User = (props)=>{
    const [count1, setCount1] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count1 = {count1}</h1>
            <button onClick={()=>{
                setCount1(count1+1);
            }}>Click Increase</button>
         
            <h2>Name: {props.name}</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: akshya@gamil.com</h4>
        </div>
    );
}

export default User;