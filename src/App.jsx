import { useState, useEffect } from "react";
import "modern-normalize";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import data from "./data.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("data")) ?? data
  );
  const [filter, setFilter] = useState(
    () => JSON.parse(localStorage.getItem("filter")) ?? ""
  );

  useEffect(
    () => localStorage.setItem("data", JSON.stringify(contacts)),
    [contacts]
  );
  useEffect(
    () => localStorage.setItem("filter", JSON.stringify(filter)),
    [filter]
  );

  const deleteContact = (id) =>
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  const addContact = (newContact) =>
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={"container"}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;