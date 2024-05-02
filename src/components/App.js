import React, { useState } from 'react'; 
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

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} /> {/* handler to receive state from child */}
      <ContactList contacts={contacts}/> {/* Passed contacts array as a prop from parent to child */}
    </div>
  );
}

export default App;
