// Contacts.js
import React, { useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
    // Add more contacts as needed
  ]);

  const deleteContacts = () => {
    setContacts([]); // This will clear the contacts array
  };
  const showContacts = () => {
    setContacts([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
        { id: 3, name: 't k', email: 'jane@example.com', phone: '098-777-4321' }
      ]); 
  };

  return (
    <div className="contacts">
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={deleteContacts} className="delete-button">Delete Contacts</button>
      <button onClick={showContacts} className="show-button">Show Contacts</button>
    </div>
  );
};

export default Contacts; 