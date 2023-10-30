import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log("Child Constructor");
        this.state = {
            userInfo:{
                name: "Shivangi",
                location: "Delhi",
                avatar_url:"default",
            }
        };

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shivangi");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    render(){
        const {name, location,avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
                <img src = {avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: akshya@gamil.com</h4>
            </div>
        );
    }
}

export default UserClass;