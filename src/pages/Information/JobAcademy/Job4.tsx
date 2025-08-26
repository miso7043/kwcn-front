
import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { StarMethodComponent, TasksListComponent, SectionWithSubSectionsComponent, ThinkingBoxComponent } from './InfoSubComponent';
import { useMemo } from 'react';
import useLanguage from '../../../hooks/useLanguage';
import { job4Text as job4Text_ko } from './locales/Job4_ko';
import { job4Text as job4Text_en } from './locales/Job4_en';

const Job4: React.FC = () => {
  const { language } = useLanguage();
  const job4Text = useMemo(() => (language === 'ko' ? job4Text_ko : job4Text_en), [language]);
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job4Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 4 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 4</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job4Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">

        {/* 강의 4 목표 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            Lecture 4 Goal
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-gray-200 text-lg">
              • {job4Text.lecture4Goal}
            </p>
          </div>
        </section>

        {/* 인터뷰 준비하기 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job4Text.interviewPrep}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <ThinkingBoxComponent
            title={job4Text.thinkingBox.title}
            questions={job4Text.thinkingBox.questions}
          />
        </section>

        {/* 면접의 종류 */}
        <SectionWithSubSectionsComponent
          title={job4Text.interviewTypes.title}
          subSections={job4Text.interviewTypes.subSections}
        />

        {/* 인터뷰 준비 단계 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job4Text.interviewPrepStepsSectionTitle}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <TasksListComponent tasks={job4Text.interviewPrepSteps.map(step => ({
            title: step.title,
            description: '',
            tips: step.tips
          }))} />
        </section>

        {/* 인터뷰에서 중요한 요소들 */}
        <SectionWithSubSectionsComponent
          title={job4Text.importantInterviewElements.title}
          subSections={job4Text.importantInterviewElements.subSections}
        />

        {/* 자주 나오는 인터뷰 질문들 */}
        <SectionWithSubSectionsComponent
          title={job4Text.commonInterviewQuestions.title}
          subSections={job4Text.commonInterviewQuestions.subSections}
        />

        {/* STAR 기법 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job4Text.starMethodSectionTitle}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <div className="mb-6">
            <p className="text-gray-200 mb-4 leading-relaxed">
              {job4Text.starMethodGuide}
            </p>
          </div>

          <StarMethodComponent items={job4Text.starMethod} />
        </section>

        {/* 면접 후 할 일 */}
        <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {job4Text.postInterviewSectionTitle}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
          </h2>

          <TasksListComponent tasks={job4Text.postInterviewTasks} />
        </section>

        {/* 자신감 키우기 */}
        <SectionWithSubSectionsComponent
          title={job4Text.interviewConfidence.title}
          subSections={job4Text.interviewConfidence.subSections}
        />

        {/* Job Academy 네비게이션 */}
        <JobAcademyNavigation currentJobId={4} />
      </div>
    </div>
  );
};

export default Job4;

