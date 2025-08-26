import { useTranslation } from 'react-i18next';
const useLanguage = () => {
  const { i18n } = useTranslation();
  return { language: i18n.language, setLanguage: i18n.changeLanguage };
};
export default useLanguage;
