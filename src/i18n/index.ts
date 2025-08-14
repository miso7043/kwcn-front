import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { resources } from './resources';

i18n
    .use(Backend) // 번역 파일을 HTTP로 로드
    .use(LanguageDetector) // 브라우저 언어 자동 감지
    .use(initReactI18next) // React와 연결
    .init({
        // 기본 설정
        fallbackLng: 'en', // 번역이 없을 때 사용할 언어
        lng: 'en', // 기본 언어
        debug: import.meta.env.VITE_I18N_DEBUG === 'true',

        // 번역 파일 경로
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // 언어 감지 설정
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'], // 선택한 언어를 localStorage에 저장
        },

        // 네임스페이스 설정
        ns: ['common', 'events', 'about', 'history'],
        defaultNS: 'common',

        // 보간(interpolation) 설정
        interpolation: {
            escapeValue: false, // React가 XSS를 자동으로 처리
        },

        // 리소스 (선택적)
        resources,
    });

export default i18n;