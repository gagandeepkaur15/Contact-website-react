import React from "react";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    console.log(props);

    const navigate = useNavigate();
    const toContactDetail = () => {
        navigate(`/contact/${id}`, {state: {name: props.contact.name, email:props.contact.email}});
    }

    const toEdit = () => {
        navigate(`/edit`, {state: {id: props.contact.id ,name: props.contact.name, email:props.contact.email}});
    }

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <a onClick={()=>{toContactDetail()}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </a>
            </div>
            <i className="trash alternate outline icon" style={{color: "red", marginTop: "7px", marginLeft: "10px"}} onClick={() => props.clickHandler(id)}></i>
            <a onClick={()=>{toEdit()}}>
            <i className="edit alternate outline icon" style={{color: "blue", marginTop: "7px"}}></i>
            </a>
        </div>
    );
}

export default ContactCard;