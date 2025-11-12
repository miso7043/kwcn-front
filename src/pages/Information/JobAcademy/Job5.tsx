import { jobAcademyStyles } from './jobAcademyStyles';

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
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job5Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 5 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 5</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job5Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>

        {/* 강의 5 목표 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            Lecture 5 Goal
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.containers.lightBox}>
            <p className={jobAcademyStyles.textColors.grayTextLarge}>
              • {job5Text.lecture5Goal}
            </p>
          </div>
        </section>

        {/* 캐나다 직장 문화 배우기 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job5Text.sectionTitle_WorkCulture}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
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
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job5Text.sectionTitle_CulturalDifference}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <CultureComparisonListComponent items={job5Text.culturalDifferences} />
        </section>

        {/* 성공적인 적응을 위한 팁 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job5Text.sectionTitle_AdaptationTips}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <TasksListComponent tasks={job5Text.adaptationTips} />
        </section>

        {/* 장기적 성공 전략 */}
        <SectionWithSubSectionsComponent
          title={job5Text.longTermStrategy.title}
          subSections={job5Text.longTermStrategy.subSections}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={5} />
        </section>
      </div>
    </div>
  );
};

export default Job5;

