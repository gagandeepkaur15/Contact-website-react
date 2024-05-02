import React, { useState, useEffect } from 'react'; //useEffect for persisting data
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dipesh",
  //     email: "dipesh@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Nikesh",
  //     email: "nikesh@gmail.com",
  //   },
  // ];

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  //To retrieve contacts from browsers local storage
  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  //To store the contacts in browsers local storage as key value pair with key 'contacts'
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} /> {/* handler to receive state from child */}
      <ContactList contacts={contacts}/> {/* Passed contacts array as a prop from parent to child */}
    </div>
  );
}

export default App;
