import React from "react";

class AddContact extends React.Component {
    //State in class component
    //In functional we use hook - useState
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        // Reset State
        this.setState({ name: "", email: "" });
        // this.props.history.goBack();
    }

    render(){
        return(
            <div className="ui main">
                <h1> </h1>
                <h1> </h1>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) } />
                    </div> 
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Enter your email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) } />
                    </div> 
                    <button className="ui button blue" type="submit">Add</button> 
                </form>
            </div>
        );
    }
}

export default AddContact;