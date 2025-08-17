import { changeLanguage, getCurrentLanguage } from '../../../i18n';

const LanguageSwitch = () => {
  const currentLang = getCurrentLanguage();

  const toggleLanguage = () => {
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    changeLanguage(newLang);
  };

  const getFlagIcon = () => {
    return currentLang === 'ko' ? '/imgs/logos/kr.svg' : '/imgs/logos/ca.svg';
  };

  const getLanguageText = () => {
    return currentLang === 'ko' ? 'KR' : 'EN';
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
      title={currentLang === 'ko' ? '한국어' : 'English'}
    >
      <img 
        src={getFlagIcon()} 
        alt={getLanguageText()}
        className="w-7 h-7 object-contain"
      />
      <span className="uppercase font-semibold">
        {getLanguageText()}
      </span>
    </button>
  );
};

export default LanguageSwitch;
