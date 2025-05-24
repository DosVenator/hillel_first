import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { LanguageContext, translations } from "./contexts/language";

function AddContactForm({ onAdd }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { value: language } = useContext(LanguageContext);

  function handleSubmit(event) {
    event.preventDefault();
    const phoneRegex = /^380[0-9]{9}$/;

    if (!firstName || !lastName || !phone) {
      alert(translations[language].fillAll);
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Невірний номер телефону!");
      return;
    }

    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
    };

    onAdd(newContact);

    setFirstName("");
    setLastName("");
    setPhone("");

    navigate("/contact");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={translations[language].firstName}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder={translations[language].lastName}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder={translations[language].phone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">{translations[language].save}</button>
    </form>
  );
}

export default AddContactForm;
