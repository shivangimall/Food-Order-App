import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }
    componentDidMount() {
        // console.log("Parent CompnentDidMount");
    }
    render(){
        // console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Course</h2>

                <UserClass/>
               
            </div>  
        )

    }

}
// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Course</h2>
//             <User name = {"Akshya Saini (function)"}/>

//             <UserClass name = {"Akshya Saini (Class)"} location = {"Delhi"}/>
//         </div>  
//     )
// };

export default About;