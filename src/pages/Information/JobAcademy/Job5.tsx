
import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SectionWithSubSectionsComponent, ThinkingBoxComponent, TasksListComponent, TableComponent, CultureComparisonListComponent } from './InfoSubComponent';
import { useMemo } from 'react';
import useLanguage from '../../../hooks/useLanguage';
import { job5Text as job5Text_ko } from './locales/Job5_ko';
import { job5Text as job5Text_en } from './locales/Job5_en';

const Job5: React.FC = () => {
  const { language } = useLanguage();
  const job5Text = useMemo(() => (language === 'ko' ? job5Text_ko : job5Text_en), [language]);
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job5Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 5 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 5</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job5Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">

        {/* 강의 5 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Lecture 5 Goal
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-gray-200 text-lg">
              • {job5Text.lecture5Goal}
            </p>
          </div>
        </section>

        {/* 캐나다 직장 문화 배우기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job5Text.sectionTitle_WorkCulture}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <ThinkingBoxComponent
            title={job5Text.thinkingBox.title}
            questions={job5Text.thinkingBox.questions}
          />
        </section>

        {/* 캐나다 직장의 기본 특징 */}
        <SectionWithSubSectionsComponent
          title={job5Text.basicFeatures.title}
          subSections={job5Text.basicFeatures.subSections}
        />

        {/* 캐나다와 한국 직장 문화 비교 */}
        <TableComponent
          title={job5Text.cultureComparison.title}
          headers={job5Text.cultureComparison.headers}
          rows={job5Text.cultureComparison.rows}
        />

        {/* 효과적인 커뮤니케이션 */}
        <SectionWithSubSectionsComponent
          title={job5Text.effectiveCommunication.title}
          subSections={job5Text.effectiveCommunication.subSections}
        />

        {/* 캐나다 직장에서의 에티켓 */}
        <SectionWithSubSectionsComponent
          title={job5Text.workplaceEtiquette.title}
          subSections={job5Text.workplaceEtiquette.subSections}
        />

        {/* 팀워크와 협업 */}
        <SectionWithSubSectionsComponent
          title={job5Text.teamworkCollaboration.title}
          subSections={job5Text.teamworkCollaboration.subSections}
        />

        {/* 문화적 차이 이해하기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job5Text.sectionTitle_CulturalDifference}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <CultureComparisonListComponent items={job5Text.culturalDifferences} />
        </section>

        {/* 성공적인 적응을 위한 팁 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job5Text.sectionTitle_AdaptationTips}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <TasksListComponent tasks={job5Text.adaptationTips} />
        </section>

        {/* 장기적 성공 전략 */}
        <SectionWithSubSectionsComponent
          title={job5Text.longTermStrategy.title}
          subSections={job5Text.longTermStrategy.subSections}
        />

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={5} />
      </div>
    </div>
  );
};

export default Job5;

