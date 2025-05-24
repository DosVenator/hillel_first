import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext, translations } from "./contexts/language";
import { ThemeContext } from "./contexts/theme";

function Contacts({ contacts, onDelete }) {
  const {value: language} = useContext(LanguageContext);
  const {value: theme} = useContext(ThemeContext);

  return (
    <div className={`contact_container  ${theme}`}>
      <h2>{translations[language].list}</h2>
      <Link to="/main">{translations[language].home}</Link>
      <table>
        <thead>
          <tr>
            <th>{translations[language].firstName}</th>
            <th>{translations[language].lastName}</th>
            <th>{translations[language].phone}</th>
            <th>{translations[language].actions}</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onDelete(contact.id)}>{translations[language].delete}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
