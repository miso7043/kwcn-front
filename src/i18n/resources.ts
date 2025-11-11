// 타입 정의
export interface TranslationResource {
  [key: string]: any;
}

export interface Resources {
  [language: string]: {
    [namespace: string]: TranslationResource;
  };
}

// 번역 리소스 객체 (옵션 1: 직접 정의)
import enCommon from './locales/en/common.json';
import enEvents from './locales/en/events.json';
import enAbout from './locales/en/about.json';
import enHistory from './locales/en/history.json';
import enDonate from './locales/en/donate.json';

import koCommon from './locales/ko/common.json';
import koEvents from './locales/ko/events.json';
import koAbout from './locales/ko/about.json';
import koHistory from './locales/ko/history.json';
import koDonate from './locales/ko/donate.json';

export const resources: Resources = {
  en: {
    common: enCommon,
    events: enEvents,
    about: enAbout,
    history: enHistory,
    donate: enDonate,
  },
  ko: {
    common: koCommon,
    events: koEvents,
    about: koAbout,
    history: koHistory,
    donate: koDonate,
  },
};

// 또는 동적 로딩 함수 (옵션 2)
export const loadResources = async (language: string, namespace: string) => {
  try {
    const response = await fetch(`/locales/${language}/${namespace}.json`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Failed to load ${language}/${namespace}:`, error);
    return {};
  }
};

// 네임스페이스 목록
export const namespaces = ['common', 'events', 'about', 'history', 'forms', 'donate'] as const;

// 지원 언어 목록
export const supportedLanguages = ['en', 'ko'] as const;

export type SupportedLanguage = typeof supportedLanguages[number];
export type Namespace = typeof namespaces[number];