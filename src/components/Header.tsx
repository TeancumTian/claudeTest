import { useTranslation } from 'react-i18next';
import { Languages, Terminal } from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">
          <Terminal className="icon" />
          <h1>{t('nav.title')}</h1>
        </div>
        <button onClick={toggleLanguage} className="language-toggle">
          <Languages className="icon-small" />
          <span>{i18n.language === 'en' ? '中文' : 'English'}</span>
        </button>
      </div>
    </header>
  );
}