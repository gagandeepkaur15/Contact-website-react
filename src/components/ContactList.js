import React from "react";
import ContactCard from "./ContactCard";

// To access the contacts array passed as prop use default parameter props 

const ContactList = (props) => {  
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact={contact} />
    });

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;