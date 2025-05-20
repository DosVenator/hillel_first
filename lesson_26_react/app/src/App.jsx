import { useEffect, useState } from 'react';
import Contacts from './Contacts';
import AddContactForm from './AddContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState('contacts');
  
  useEffect(() => {
    async function loadData() {
      const response = await fetch('/data.json');
      const data = await response.json();
      setContacts(data);
    }
    loadData();
  }, []);

  function addContact(newContact) {
    setContacts(prev => [...prev, newContact]);
    setPage('contacts');
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <nav>
        <button onClick={() => setPage('contacts')}>Контакти</button>
        <button onClick={() => setPage('add')}>Додати</button>
      </nav>
      {page === 'contacts' && <Contacts contacts={contacts} onDelete={deleteContact} />}
      {page === 'add' && <AddContactForm onAdd={addContact} />}
    </div>
  );
}

export default App;