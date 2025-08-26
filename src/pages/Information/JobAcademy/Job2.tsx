import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';

import { useTranslation } from 'react-i18next';
import useLanguage from '../../../hooks/useLanguage';
import { job2Text as job2Text_ko } from './locales/Job2_ko';
import { job2Text as job2Text_en } from './locales/Job2_en';

const Job2: React.FC = () => {
    const { t } = useTranslation(['common']);
  const { language } = useLanguage();
  const job2Text = useMemo(() => (language === 'ko' ? job2Text_ko : job2Text_en), [language]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job2Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 2</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job2Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">

        {/* 강의 2 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.lecture2Goal.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <ul className="space-y-3">
              {job2Text.lecture2Goal.goals.map((goal: string, index: number) => (
                <li key={index} className="relative pl-6 text-gray-200">
                  <span className="absolute left-0 text-green-400 font-bold">✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-100 mb-2 italic">
              {job2Text.lecture2Goal.description}
            </p>
            <a
              href="https://www.workbc.ca/getmedia/07e2cc72-bcf4-48f5-9f9d-921c802a49f8/BC_Labour_Market_Outlook_2017_Korean.pdf.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors underline"
            >
              – {job2Text.lecture2Goal.source}
            </a>
          </div>
        </section>

        {/* BC주 노동시장 전망 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.marketOutlook.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="mb-6">
            <img
              src="/imgs/jobacademy/lecture2-03-800x427.jpg"
              alt={job2Text.marketOutlook.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-white/10 p-6 rounded-lg mb-6 border-l-4 border-red-400">
            <h3 className="text-red-100 text-xl font-bold mb-2">
              {job2Text.marketOutlook.subtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {job2Text.marketOutlook.factors.map((factor: string, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                <span className="text-red-400 font-bold">• </span>
                <span className="text-gray-200">{factor}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 산업별 전망 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.industryOutlook.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {job2Text.industryOutlook.industries.map((industry: string, index: number) => (
              <div key={index} className={`p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 bg-gray-900 text-gray-200 border border-gray-700`}>
                <span className={`font-bold ${index < 5 ? 'text-yellow-100' : 'text-gray-400'}`}>
                  {index + 1}.
                </span>
                <span className="ml-2">{industry}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-200 italic">
              {job2Text.industryOutlook.note}
            </p>
          </div>
        </section>

        {/* 수요가 증가할 5대 직업군 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.topOccupations.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="space-y-4 mb-6">
            {job2Text.topOccupations.occupations.map((occupation: string, index: number) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative">
                <span className="absolute -top-3 left-6 bg-green-700/50 text-white px-3 py-1 rounded-full text-sm font-bold">
                  TOP {index + 1}
                </span>
                <span className="text-white font-medium block mt-2">
                  {occupation}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-bg-yellow-600 to-yellow-500/10 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-100 mb-0">
              <strong className="text-yellow-200">{t('common:information.note')}: </strong>{job2Text.topOccupations.note}
            </p>
          </div>
        </section>

        {/* 노동시장에서 요구되는 10대 주요역량 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.keyCompetencies.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid gap-6 mb-6">
            {job2Text.keyCompetencies.competencies.map((competency, index) => (
              <div key={index} className={`bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {competency.category}
                </h3>
                <ul className="space-y-2">
                  {competency.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="text-white/90 flex items-start">
                      <span className="text-yellow-300 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BC주 노동시장 환경 정보 찾기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.laborMarketInfo.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid gap-6 mb-6">
            {job2Text.laborMarketInfo.sections.map((section, index) => (
              <div key={index} className={`bg-cyan-500/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {section.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  {section.content}
                </p>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {t('common:information.visitSite')} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 정보면접 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.informationalInterview.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-cyan-600/10 p-6 rounded-lg mb-6">
            <p className="text-orange-100 leading-relaxed">
              {job2Text.informationalInterview.description}
            </p>
          </div>

          <h3 className="text-white text-xl font-bold mb-4">
            {job2Text.informationalInterview.questionTitle}
          </h3>

          <div className="space-y-4">
            {job2Text.informationalInterview.questions.map((question: string, index: number) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                <span className="text-orange-400 font-bold">Q{index + 1}: </span>
                <span className="text-gray-200">{question}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 정보면접 및 진로탐색 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job2Text.careerExploration.title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="grid gap-6 mb-6">
            {job2Text.careerExploration.sections.map((section, index) => (
              <div key={index} className={`bg-white/10 p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-white text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {section.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <a
              href="https://www.workbc.ca/plan-career/career-trek-videos#sort=alphabetical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center max-w-[12rem] text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {t('common:information.visitSite')} →
            </a>
          </div>

          <div className="mb-6">
            <img
              src="/imgs/jobacademy/lecture2-04-800x455.jpg"
              alt={job2Text.careerExploration.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={2} />
      </div>
    </div>
  );
};

export default Job2;

