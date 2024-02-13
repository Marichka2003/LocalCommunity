// LanguageSelector.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Перевіряємо, чи є збережена мова у localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]); // Включаємо i18n до масиву залежностей

  const changeLanguage = (language) => {
    // Змінюємо мову та зберігаємо в localStorage
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  return (
    <div className="language-buttons">
      <button className="language-button" onClick={() => changeLanguage('en')}>En</button>
      <button className="language-button" onClick={() => changeLanguage('uk')}>Uk</button>
    </div>
  );
};

export default LanguageSelector;
