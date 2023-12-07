import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStroge";
import { useTranslation } from "react-i18next";
import { language as L } from "../../languages/language";
const Navbar = () => {
  const { changeLanguage, language } = useLocalStorage();
  const { t } = useTranslation();
  return (
    <div>
      
      
      <h1>{L[language].hello} </h1>
      <h1>hii </h1>
      <div className='logo'></div>
      <ul>
        <li>Home</li>
        <li>Ala</li>
        <li>Rayen</li>
      </ul>
      <div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={language}
        >
          <option value='en'>english</option>
          <option value='ar'>arabic</option>
          <option value='fr'>french</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
