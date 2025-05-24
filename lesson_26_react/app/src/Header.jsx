import { useContext } from "react";
import { LanguageContext } from "./contexts/language";
import { ThemeContext } from "./contexts/theme";

function Header() {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);

  function selectChangeLang(event) {
    language.change(event.target.value);
  }
  function selectChangeThem(event) {
    theme.change(event.target.value);
  }
  return (
    <div className="header">
      <select onChange={selectChangeLang}>
        <option value="UA">UA</option>
        <option value="EN">EN</option>
        <option value="PL">PL</option>
      </select>
      <select onChange={selectChangeThem}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

export default Header;
