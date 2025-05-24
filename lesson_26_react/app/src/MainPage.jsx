import { useContext } from "react";
import { Link } from "react-router";
import { LanguageContext, translations } from "./contexts/language";

function MainPage () {
    const {value: language} = useContext(LanguageContext);

      
return (
    <div>
        <p className="pr">{translations[language].main}</p>
        <nav>
        <Link to="/contact">{translations[language].contacts}</Link> | <Link to="/add">{translations[language].add}</Link>
      </nav>
    </div>
)
}

export default MainPage;