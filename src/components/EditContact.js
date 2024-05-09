import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = (props) => {
    const location = useLocation();
    const navigate = useNavigate();


    const [name, setName] = useState(location.state.name);
    const [email, setEmail] = useState(location.state.email);
    

        const update = (e) => {
        e.preventDefault();
        if(name==="" || email==="") {
            alert("All the fields are mandatory");
            return;
        }
        props.updateContactHandler({ id: location.state.id, name, email });
        // Reset State
        setName("");
        setEmail("");
        navigate('/');
    }


        return(
            <div className="ui main">
                <h1> </h1>
                <h1> </h1>
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" value={name} onChange={ (e) => setName(e.target.value) } />
                    </div> 
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Enter your email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    </div> 
                    <button className="ui button blue" type="submit">Update</button> 
                </form>
            </div>
        );

}

export default EditContact;