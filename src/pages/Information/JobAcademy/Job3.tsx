import { jobAcademyStyles } from './jobAcademyStyles';
import React, { useState } from 'react';
import ImageZoomModal from '../../../components/ui/ImageZoom/ImageZoomModal';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';

// import { useTranslation } from 'react-i18next';
import useLanguage from '../../../hooks/useLanguage';
import * as job3ko from './locales/Job3_ko';
import * as job3en from './locales/Job3_en';
import {
  SubSectionWithList,
  NumberedListComponent,
  IconListComponent,
  // QuestionListComponent,
  SectionWithSubSectionsComponent
} from './InfoSubComponent';

const Job3: React.FC = () => {
  const [zoomIdx, setZoomIdx] = useState<number | null>(null);
  // const { t } = useTranslation(['info_job3']);
  const { language } = useLanguage();

  // console.log("Current language:", language);
  // 언어에 따라 데이터 소스 선택
  const job3 = language === 'en' ? job3en : job3ko;
  const {
    coverLetterDefinition,
    coverLetterThinking,
    resumeThinking,
    brandingGuidelines,
    coverLetterStructure,
    essentialTasks,
    coverLetterRequirements,
    coverLetterDos,
    coverLetterDonts,
    resumeDonts,
    coverLetterConsiderations,
    resumeQuestions,
    resumeRequirements,
    job3Text
  } = job3;



  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job3.job3Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 3</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job3.job3Text.lectureSubtitle}
          </h2>
        </div>
      </div>


      <div className={jobAcademyStyles.containers.centerContainer}>

        {/* 강의 3 목표 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.lecture3Goal}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>
        </section>

        {/* Cover Letter 작성법 배우기 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterGuide}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <SubSectionWithList {...coverLetterThinking} />
        </section>

        {/* Cover Letter란 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterWhat}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={`${jobAcademyStyles.grids.singleColumn} ${jobAcademyStyles.spacing.marginBottom6}`}>
            <SubSectionWithList {...coverLetterDefinition} />

            <div className={jobAcademyStyles.section.highlightInBox}>
              <h3 className="text-yellow-800 text-xl font-semibold mb-4">{job3Text.coverLetterFAQTitle}</h3>
              <div className={jobAcademyStyles.textColors.grayTextSpaced}>
                <p><strong>{job3Text.coverLetterFAQ1}</strong></p>
                <p><strong>{job3Text.coverLetterFAQ2}</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Letter 작성 고려사항 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterConsider}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <IconListComponent {...coverLetterConsiderations} />
        </section>

        {/* Cover Letter의 구성 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterStructure}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <NumberedListComponent {...coverLetterStructure} />
        </section>

        {/* Cover Letter에 있어야 하는 것들 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterMust}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={jobAcademyStyles.spacing.questionSpacing}>
            <IconListComponent {...coverLetterRequirements} />
          </div>
        </section>

        {/* Cover Letter를 쓸 때 해야 하는 것들 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterDo}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <IconListComponent {...coverLetterDos} />
        </section>

        {/* Cover Letter를 쓸 때 하지 말아야 하는 것들 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.coverLetterDont}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <IconListComponent {...coverLetterDonts} />
        </section>

        {/* Resume 작성법 배우기 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.resumeGuide}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <SubSectionWithList {...resumeThinking} />
        </section>

        {/* Resume란 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.resumeWhat}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <div className={`${jobAcademyStyles.section.highlightInBox} mb-5`}>
            <p className={jobAcademyStyles.textColors.grayTextLarge}>
              {job3Text.resumeDesc}
            </p>
          </div>

          <div className={`${jobAcademyStyles.grids.twoColumn}`}>
            {resumeQuestions.questions.map((question, index) => (
              <div key={index} className={`${jobAcademyStyles.containers.lightBox} shadow-sm border-l-4 p-6 ${resumeQuestions.borderColor}`}>
                <h3 className={`${resumeQuestions.textColor} font-bold mb-2`}>{question}</h3>
              </div>
            ))}
          </div>
          
          {/* <QuestionListComponent {...resumeQuestions} /> */}
        </section>

        {/* Resume를 쓸 때 고려할 것들 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.resumeConsider}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <SubSectionWithList {...brandingGuidelines} />
        </section>

        {/* Resume를 쓸 때 하지 말아야 하는 것들 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.resumeDont}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <IconListComponent {...resumeDonts} />
        </section>

        <SectionWithSubSectionsComponent {...resumeRequirements} />

        {/* Cover Letter와 Resume 작성시 꼭 해야 하는 것 */}
        <section className={jobAcademyStyles.section.basic}>
          <h2 className={jobAcademyStyles.sectionTitle}>
            {job3Text.mustDo}
            
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
          </h2>

          <NumberedListComponent {...essentialTasks} />

          <div className={`${jobAcademyStyles.grids.twoColumn} mt-8`}>
            {[
              {
                title: job3Text.sampleResume1,
                src: '/imgs/jobacademy/lecture3-01.webp',
                alt: job3Text.sampleResume1,
              },
              {
                title: job3Text.sampleResume2,
                src: '/imgs/jobacademy/lecture3-02.webp',
                alt: job3Text.sampleResume2,
              },
            ].map((item, idx) => (
              <React.Fragment key={item.src}>
                <div className="bg-amber-200/60 p-6 rounded-lg border-l-4 border-blue-500 cursor-pointer shadow-lg" onClick={() => setZoomIdx(idx)}>
                  <h3 className={jobAcademyStyles.headings.h3}>{item.title}</h3>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={jobAcademyStyles.containers.fullWidthImage}
                  />
                </div>
                {zoomIdx === idx && (
                  <ImageZoomModal
                    open={zoomIdx === idx}
                    src={item.src}
                    alt={item.alt}
                    onClose={() => setZoomIdx(null)}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={3} />
        </section>
      </div>
    </div>
  );
};

export default Job3;

