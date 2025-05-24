import { createContext } from "react";

export const LanguageContext = createContext('');

export const languages = {
  UA: 'Українська',
  EN: 'English',
  PL: 'Polski'
};

export const translations = {
  UA: {
    main: 'Головна',
    home: 'На головну',
    contacts: 'Контакти',
    add: 'Додати',
    list: 'Список контактів',
    firstName: 'Ім’я',
    lastName: 'Прізвище',
    phone: 'Телефон',
    actions: 'Дії',
    delete: 'Видалити',
    fillAll: 'Заповніть всі поля!',
    save: 'Зберегти',
    validation: 'Перевірте правильність вводу',
    incorrectlog: 'Невірний логін або пароль',
  },
  EN: {
    main: 'Main',
    home: 'Go Home',
    contacts: 'Contacts',
    add: 'Add',
    list: 'Contact List',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    actions: 'Actions',
    delete: 'Delete',
    fillAll: 'Please fill all fields!',
    save: 'Save',
    validation: 'Please check the correctness of the input',
    incorrectlog: 'Incorrect login or password',
  },
  PL: {
    main: 'Strona główna',
    home: 'Do strony głównej',
    contacts: 'Kontakty',
    add: 'Dodaj',
    list: 'Lista kontaktów',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    phone: 'Telefon',
    actions: 'Akcje',
    delete: 'Usuń',
    fillAll: 'Wypełnij wszystkie pola!',
    save: 'Zapisz',
    validation: 'Proszę sprawdzić poprawność wprowadzonych danych',
    incorrectlog: 'Nieprawidłowy login lub hasło',
  }
};