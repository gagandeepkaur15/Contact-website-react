import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "dipesh@gmail.com",
    },
    {
      id: "2",
      name: "Nikesh",
      email: "nikesh@gmail.com",
    },
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/> {/* Passed contacts array as a prop from parent to child */}
    </div>
  );
}

export default App;
