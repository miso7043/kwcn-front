import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { resources } from './resources';

// 지원하는 언어 목록
const supportedLanguages = ['ko', 'en'];

// 브라우저 언어를 지원하는 언어로 매핑
const getInitialLanguage = () => {
  // localStorage에서 이전에 설정된 언어 확인
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && supportedLanguages.includes(savedLang)) {
    return savedLang;
  }

  // 브라우저 언어 확인 (여러 언어 고려)
  const browserLanguages = navigator.languages || [navigator.language || 'en'];
  
  for (const browserLang of browserLanguages) {
    // 정확한 언어 코드 매칭 (예: 'ko-KR' -> 'ko')
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // 한국어 관련 언어 코드들
    if (['ko', 'kr'].includes(langCode)) {
      return 'ko';
    }
    
    // 영어 관련 언어 코드들
    if (['en'].includes(langCode)) {
      return 'en';
    }
  }
  
  // 기본값은 영어
  return 'en';
};

i18n
    .use(Backend) // 번역 파일을 HTTP로 로드
    .use(LanguageDetector) // 브라우저 언어 자동 감지
    .use(initReactI18next) // React와 연결
    .init({
        // 기본 설정
        fallbackLng: 'en', // 번역이 없을 때 사용할 언어를 영어로 변경
        lng: getInitialLanguage(), // 브라우저 언어 기반으로 초기 언어 설정
        debug: import.meta.env.VITE_I18N_DEBUG === 'true',

        // 번역 파일 경로
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // 언어 감지 설정 개선
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
            caches: ['localStorage'], // 선택한 언어를 localStorage에 저장
            excludeCacheFor: ['cimode'], // 개발 모드에서는 캐시하지 않음
            convertDetectedLanguage: (lng: string) => {
              // 브라우저에서 감지된 언어를 지원하는 언어로 변환
              const langCode = lng.split('-')[0];
              return supportedLanguages.includes(langCode) ? langCode : 'en';
            }
        },

        // 지원하는 언어 명시
        supportedLngs: supportedLanguages,
        load: 'languageOnly', // 'en-US' -> 'en'으로 변환

        // 네임스페이스 설정
        ns: ['common', 'events', 'about', 'history', 'info_job1'],
        defaultNS: 'common',

        // 보간(interpolation) 설정
        interpolation: {
            escapeValue: false, // React가 XSS를 자동으로 처리
        },

        // 리소스 (선택적)
        resources,
    });

// 언어 변경 유틸리티 함수
export const changeLanguage = (language: string) => {
  if (supportedLanguages.includes(language)) {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  }
};

// 현재 언어 가져오기
export const getCurrentLanguage = () => i18n.language || 'en';

// 지원하는 언어 목록 내보내기
export { supportedLanguages };

export default i18n;