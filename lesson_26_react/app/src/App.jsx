import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Contacts from './Contacts';
import AddContactForm from './AddContactForm';
import MainPage from './MainPage';
import Header from './Header';
import { LanguageContext } from './contexts/language';
import { ThemeContext } from "./contexts/theme";
import LogPage from './LogPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [language, setLanguage] = useState('UA')
  const [theme, setTheme] = useState('dark');
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
  document.body.className = theme;
}, [theme]);

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
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }



  return (
    <LanguageContext.Provider value={{value: language, change: setLanguage}}>
    <ThemeContext.Provider value={{value: theme, change: setTheme}}>
      <Header></Header>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<LogPage onLogin={() => setIsAuth(true)}/>} />
         
         {isAuth && (
          <>
          <Route path="/main" element={<MainPage/>} />
         <Route path="/add" element={<AddContactForm onAdd={addContact} />} />
         <Route path="/contact" element={<Contacts contacts={contacts} onDelete={deleteContact} />} />
         </>
         )}
       </Routes>
     </BrowserRouter>
     </ThemeContext.Provider>
     </LanguageContext.Provider>
  );
}

export default App;