import { jobAcademyStyles } from './jobAcademyStyles';

import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, InfoBoxComponent, StepGuideComponent, TitledtwoThreeColumnListComponent, SingleTitledListComponent, ReferenceSectionComponent } from './InfoSubComponent';
import { useMemo } from 'react';
import useLanguage from '../../../hooks/useLanguage';
import { job8Text as job8Text_ko } from './locales/Job8_ko';
import { job8Text as job8Text_en } from './locales/Job8_en';

const Job8: React.FC = () => {
  const { language } = useLanguage();
  const job8Text = useMemo(() => (language === 'ko' ? job8Text_ko : job8Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job8Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 8 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 8</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job8Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* 헬스케어 커리어 소개 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job8Text.sectionTitle_HealthcareIntro}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>
            {job8Text.section1.desc.map((desc, idx) => (
              <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
            ))}

            <div className={jobAcademyStyles.grids.twoColumn}>
              <SubSectionWithList
                title={job8Text.section1.title}
                items={job8Text.section1.items}
                borderColor="border-blue-500"
              />

              <SubSectionWithList
                title={job8Text.section1.careerOptionsTitle}
                items={job8Text.section1.careerOptions}
                borderColor="border-emerald-500"
              />
            </div>
          </div>
        </section>

        {/* CDA - Certified Dental Assistant */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job8Text.sectionTitle_CDA}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job8Text.cda.what}</h3>
            {job8Text.cda.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className={jobAcademyStyles.containers.cyanLightInfo}>
                <h3 className={jobAcademyStyles.headings.h3}>{job8Text.cda.how}</h3>
                {job8Text.cda.howDesc.map((desc, idx) => (
                  <p className={jobAcademyStyles.textColors.grayLight} key={idx}>{desc}</p>
                ))}
                <SingleTitledListComponent
                  title={job8Text.publicCollegesTitle}
                  items={job8Text.cda.publicColleges}
                  titleClass="font-semibold mb-2"
                  textColor={jobAcademyStyles.textColors.grayLight}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job8Text.privateCollegesTitle}
                items={job8Text.cda.privateColleges}
                borderColor="border-cyan-500"
              />

              <SubSectionWithList
                title={job8Text.cdaEducationOverviewTitle}
                items={job8Text.cda.educationOverview}
                borderColor="border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job8Text.admissionRequirementsTitle}
                items={job8Text.cda.admissionRequirements}
                borderColor="border-yellow-500"
              />

              <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftBlue}`}>
                <h3 className={jobAcademyStyles.headings.h3}>{job8Text.cdaExamOverviewTitle}</h3>
                <div className="grid grid-cols-1 gap-4">
                  <SingleTitledListComponent
                    title={job8Text.examProcessTitle}
                    items={job8Text.cda.examProcess}
                    titleClass="mb-2 font-bold"
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                  <SingleTitledListComponent
                    title={job8Text.levelClassificationTitle}
                    items={job8Text.cda.levelClassification}
                    titleClass="mb-2 font-bold"
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HCA - Healthcare Aide */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job8Text.sectionTitle_HCA}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job8Text.hca.what}</h3>
            {job8Text.hca.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job8Text.hcaEducationOverviewTitle}
                items={job8Text.hca.educationOverview}
                borderColor="border-emerald-500"
              />

              <SubSectionWithList
                title={job8Text.englishRequirementsTitle}
                items={job8Text.hca.englishRequirements}
                borderColor="border-yellow-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job8Text.publicCollegesRegistryTitle}
                items={job8Text.hca.publicColleges}
                borderColor="border-sky-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job8Text.privateCollegesTitle}
                items={job8Text.hca.privateColleges}
                borderColor="border-sky-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.orangeBox} ${jobAcademyStyles.borders.leftEmerald}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job8Text.hcaCareerOptionsTitle}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={{
                  title: job8Text.hcaCareerLeftTitle,
                  items: job8Text.hca.careerOptions.left
                }}
                rightColumn={{
                  title: job8Text.hcaCareerRightTitle,
                  items: job8Text.hca.careerOptions.right
                }}
              />
            </div>
          </div>
        </section>

        {/* 헬스케어 커리어 선택 가이드 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardRed}>
            <h2 className={jobAcademyStyles.headings.whiteH2}>
              {job8Text.sectionTitle_CareerGuide}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <StepGuideComponent
                title={job8Text.stepGuideTitle}
                steps={job8Text.cdaVsHcaComparison.map((step, idx) => ({
                  ...step,
                  borderColor: idx === 0 ? 'border-blue-400' : 'border-green-400',
                  titleColor: idx === 0 ? 'text-blue-800' : 'text-green-800',
                }))}
                bgColor="bg-indigo-100"
                textColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job8Text.careerTipsTitle}
                items={job8Text.healthcareCareerTips}
                borderColor="border-emerald-500"
              />
            </div>

            <InfoBoxComponent
              title={job8Text.nextStepsTitle}
              description=""
              items={job8Text.nextStepsPlan.map(step => `${step.stepTitle}: ${step.stepDescription}`)}
              bgColor="bg-red-100"
              textColor="text-grey-200"
              borderColor={jobAcademyStyles.borders.leftYellow}
            />
          </div>
        </section>

        {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job8Text.sectionTitle_Reference}
          governmentTitle=""
          governmentItems={job8Text.references.left}
          associationsTitle=""
          associationsItems={job8Text.references.right}
          notice={job8Text.references.notice}
        />


        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={8} />
        </section>
      </div>
    </div>
  );
};

export default Job8;

