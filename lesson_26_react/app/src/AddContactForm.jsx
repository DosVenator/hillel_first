import { useState } from 'react';

function AddContactForm({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!firstName || !lastName || !phone) {
      alert('Заповніть всі поля!');
      return;
    }

    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      phone
    };

    onAdd(newContact);

    setFirstName('');
    setLastName('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім’я"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Прізвище"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <button type="submit">Зберегти</button>
    </form>
  );
}

export default AddContactForm;