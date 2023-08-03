
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange} value={i18n.language}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default LanguageSelector;