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
import enInfoJob1 from './locales/en/info_job1.json';
import enInfoJob2 from './locales/en/info_job2.json';
import enInfoJob3 from './locales/en/info_job3.json';
import enInfoJob4 from './locales/en/info_job4.json';
import enInfoJob5 from './locales/en/info_job5.json';
import enInfoJob6 from './locales/en/info_job6.json';
import enInfoJob7 from './locales/en/info_job7.json';
import enInfoJob8 from './locales/en/info_job8.json';
import enInfoJob9 from './locales/en/info_job9.json';
import enInfoJob10 from './locales/en/info_job10.json';
import enInfoJob11 from './locales/en/info_job11.json';
import enInfoJob12 from './locales/en/info_job12.json';
import enInfoJob13 from './locales/en/info_job13.json';
import enInfoJob14 from './locales/en/info_job14.json';

import koCommon from './locales/ko/common.json';
import koEvents from './locales/ko/events.json';
import koAbout from './locales/ko/about.json';
import koHistory from './locales/ko/history.json';
import koInfoJob1 from './locales/ko/info_job1.json';
import koInfoJob2 from './locales/ko/info_job2.json';
import koInfoJob3 from './locales/ko/info_job3.json';
import koInfoJob4 from './locales/ko/info_job4.json';
import koInfoJob5 from './locales/ko/info_job5.json';
import koInfoJob6 from './locales/ko/info_job6.json';
import koInfoJob7 from './locales/ko/info_job7.json';
import koInfoJob8 from './locales/ko/info_job8.json';
import koInfoJob9 from './locales/ko/info_job9.json';
import koInfoJob10 from './locales/ko/info_job10.json';
import koInfoJob11 from './locales/ko/info_job11.json';
import koInfoJob12 from './locales/ko/info_job12.json';
import koInfoJob13 from './locales/ko/info_job13.json';
import koInfoJob14 from './locales/ko/info_job14.json';

export const resources: Resources = {
  en: {
    common: enCommon,
    events: enEvents,
    about: enAbout,
    history: enHistory,
    info_job1: enInfoJob1,
    info_job2: enInfoJob2,
    info_job3: enInfoJob3,
    info_job4: enInfoJob4,
    info_job5: enInfoJob5,
    info_job6: enInfoJob6,
    info_job7: enInfoJob7,
    info_job8: enInfoJob8,
    info_job9: enInfoJob9,
    info_job10: enInfoJob10,
    info_job11: enInfoJob11,
    info_job12: enInfoJob12,
    info_job13: enInfoJob13,
    info_job14: enInfoJob14,
  },
  ko: {
    common: koCommon,
    events: koEvents,
    about: koAbout,
    history: koHistory,
    info_job1: koInfoJob1,
    info_job2: koInfoJob2,
    info_job3: koInfoJob3,
    info_job4: koInfoJob4,
    info_job5: koInfoJob5,
    info_job6: koInfoJob6,
    info_job7: koInfoJob7,
    info_job8: koInfoJob8,
    info_job9: koInfoJob9,
    info_job10: koInfoJob10,
    info_job11: koInfoJob11,
    info_job12: koInfoJob12,
    info_job13: koInfoJob13,
    info_job14: koInfoJob14,
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
export const namespaces = ['common', 'events', 'about', 'history', 'forms', 'info_job1', 'info_job2', 'info_job3', 'info_job4', 'info_job5', 'info_job6', 'info_job7', 'info_job8', 'info_job9', 'info_job10', 'info_job11', 'info_job12', 'info_job13', 'info_job14'] as const;

// 지원 언어 목록
export const supportedLanguages = ['en', 'ko'] as const;

export type SupportedLanguage = typeof supportedLanguages[number];
export type Namespace = typeof namespaces[number];