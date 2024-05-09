import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

// To access the contacts array passed as prop use default parameter props 

const ContactList = (props) => {  
    console.log("Contact List in ContactList.js: "+props);
    
    const inputEl = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
    });

    const getSearchTerm = () => {
        console.log(inputEl.current.value);
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div className="main">
            <h2>Contact List</h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} ></input> {/*We did like this to show the use of useRef*/}
                    {/* <input type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={event.target.value} ></input> */} {/*Can be done like this*/}
                    <i className="search icon"></i>
                </div>
            </div>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
        </div>
    );
}

export default ContactList;