import React from "react";
import user from "../images/user.png";
import { useLocation, useNavigate } from "react-router-dom";

const ContactDetail = (props) => {
    console.log("Propsss: "+props);

    const location = useLocation();

    const name = location.state.name;
    const email = location.state.email;

    const navigate = useNavigate();
    const toContactList = () => {
        navigate("/");
    }

    return (
       <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" /> 
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
            <a onClick={()=>{toContactList()}}>
                <button className="ui button blue center">Back to Contact List</button>
            </a>
            </div>
       </div>
    );
}

export default ContactDetail;