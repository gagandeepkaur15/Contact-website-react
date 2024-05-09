import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from '../api/contacts';
import EditContact from "./EditContact";

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

// ------------------------------------------------------------------------------------------------------------

  // IF USING LOCAL STORAGE TO GET CONTACTS
  // const [contacts, setContacts] = useState(() => {
  //   const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  //ELSE
  const [contacts, setContacts] = useState([]);

//---------------------------------------------------------------------------------------------------------------

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

//---------------------------------------------------------------------------------------------------------------

  //FOR LOCAL STORAGE
  // const addContactHandler = (contact) => {
  //   console.log("Contact List in App.js: "+contact);
  //   // setContacts([...contacts, contact]);
  //   setContacts([...contacts, { id: uuidv4(), ...contact }]);
  // };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  }

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id, name, email} = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? {...response.data} : contact;
    }));
  };

//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------

  //FOR LOCAL STORAGE
  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });
  //   setContacts(newContactList);
  // };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

//---------------------------------------------------------------------------------------------------------------

//---------------------To retrieve contacts from browsers local storage---------------------------------------------------

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY)
  //   );
  //   if (retrieveContacts) {
  //     setContacts(retrieveContacts);
  //   }  
  // }, []);

//---------------------To retrieve contacts from api---------------------------------------------------------------------

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(()=>{
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

//-----------------------To save contacts in browsers local storage----------------------------------------------------

  //To store the contacts in browsers local storage as key value pair with key 'contacts'
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
        // returns true or false
      });
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            // exact
            element={<ContactList contacts={searchTerm < 1 ? contacts : searchResults} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={<EditContact updateContactHandler={updateContactHandler} />}
          />
          <Route
            path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
      {/* <Header /> */}
      {/* <AddContact addContactHandler={addContactHandler} /> handler to receive state from child */}
      {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> Passed contacts array as a prop from parent to child */}
    </div>
  );
}

export default App;
