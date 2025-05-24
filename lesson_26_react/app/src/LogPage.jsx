import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { LanguageContext, translations } from "./contexts/language";

function LogPage({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { value: language } = useContext(LanguageContext);

  function GetLogIn() {
    if (login === "admin" && password === "admin") {
      onLogin();
      navigate("/main");
    } else {
      alert(translations[language].incorrectlog);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={GetLogIn}>Enter</button>
    </div>
  );
}

export default LogPage;
