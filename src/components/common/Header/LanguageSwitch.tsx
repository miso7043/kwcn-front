import React from 'react';
import { changeLanguage, getCurrentLanguage } from '../../../i18n';

interface LanguageSwitchProps {
  textColor?: string;
  isScrolled?: boolean;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  isScrolled = false
}) => {
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

  // 스크롤 상태에 따른 스타일 정의
  const buttonStyle = {
    color: isScrolled ? '#000' : '#fff',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:opacity-80 transition-all"
      style={buttonStyle}
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
