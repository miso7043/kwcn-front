import { jobAcademyStyles } from './jobAcademyStyles';

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
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job4Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 4 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 4</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job4Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>

        {/* 강의 4 목표 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            Lecture 4 Goal
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.containers.lightBox}>
            <p className={jobAcademyStyles.textColors.grayTextLarge}>
              • {job4Text.lecture4Goal}
            </p>
          </div>
        </section>

        {/* 인터뷰 준비하기 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job4Text.interviewPrep}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
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
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job4Text.interviewPrepStepsSectionTitle}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
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
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job4Text.starMethodSectionTitle}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.spacing.marginBottom6}>
            <p className={jobAcademyStyles.textColors.grayTextLarge}>
              {job4Text.starMethodGuide}
            </p>
          </div>

          <StarMethodComponent items={job4Text.starMethod} />
        </section>

        {/* 면접 후 할 일 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job4Text.postInterviewSectionTitle}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <TasksListComponent tasks={job4Text.postInterviewTasks} />
        </section>

        {/* 자신감 키우기 */}
        <SectionWithSubSectionsComponent
          title={job4Text.interviewConfidence.title}
          subSections={job4Text.interviewConfidence.subSections}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={4} />
        </section>
      </div>
    </div>
  );
};

export default Job4;

