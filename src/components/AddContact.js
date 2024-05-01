import React from "react";

class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                <h1> </h1>
                <h1> </h1>
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name"/>
                    </div> 
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Enter your email"/>
                    </div> 
                    <button className="ui button blue">Add</button> 
                </form>
            </div>
        );
    }
}

export default AddContact;