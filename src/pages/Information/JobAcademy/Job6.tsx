import { jobAcademyStyles } from './jobAcademyStyles';

import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job6Text as job6Text_ko } from './locales/Job6_ko';
import { job6Text as job6Text_en } from './locales/Job6_en';

const Job6: React.FC = () => {
  const { language } = useLanguage();
  const job6Text = React.useMemo(() => (language === 'ko' ? job6Text_ko : job6Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job6Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 6 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 6</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job6Text.lectureSubtitle.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < job6Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* 고용기준법 적용 여부 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              1. {job6Text.section1.title}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              {job6Text.section1.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
              <SubSectionWithList
                title={job6Text.section1.exclusionCases.title}
                items={job6Text.section1.exclusionCases.items}
                borderColor="border-red-500"
              />

              <SubSectionWithList
                title={job6Text.section1.unrelatedIssues.title}
                items={job6Text.section1.unrelatedIssues.items}
                borderColor="border-yellow-500"
              />

              <SubSectionWithList
                title={job6Text.section1.uncertaintyActions.title}
                items={job6Text.section1.uncertaintyActions.items}
                borderColor="border-green-500"
              />
            </div>
          </div>
        </section>

        {/* 직원 채용 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              2. {job6Text.section2.title}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              {job6Text.section2.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job6Text.section2.employerObligations.title}
                items={job6Text.section2.employerObligations.items}
                borderColor="border-blue-500"
              />

              <SubSectionWithList
                title={job6Text.section2.specialRulesRequired.title}
                items={job6Text.section2.specialRulesRequired.items}
                borderColor="border-purple-500"
              />
            </div>

            <div className={jobAcademyStyles.section.yellowWarning}>
              <p className={jobAcademyStyles.textColors.darkZinc}>
                <strong>{job6Text.label_important}</strong> {job6Text.section2.important}
              </p>
            </div>
          </div>
        </section>

        {/* 근무 시간 및 초과 근무 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              3. {job6Text.section3.title}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job6Text.section3.standardWorkHours.title}
                items={job6Text.section3.standardWorkHours.items}
                borderColor="border-yellow-500"
              />

              <SubSectionWithList
                title={job6Text.section3.overtime.title}
                items={job6Text.section3.overtime.items}
                borderColor="border-orange-500"
              />

              <SubSectionWithList
                title={job6Text.section3.minimumWorkHours.title}
                items={job6Text.section3.minimumWorkHours.items}
                borderColor="border-green-500"
              />

              <SubSectionWithList
                title={job6Text.section3.breakTime.title}
                items={job6Text.section3.breakTime.items}
                borderColor="border-blue-500"
              />

              <SubSectionWithList
                title={job6Text.section3.travelTime.title}
                items={job6Text.section3.travelTime.items}
                borderColor="border-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* 휴가 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardRed}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              4. {job6Text.section4.title}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.grids.twoColumn}>
              <SubSectionWithList
                title={job6Text.section4.vacationTypes.title}
                items={job6Text.section4.vacationTypes.items}
                borderColor="border-red-500"
              />

              <SubSectionWithList
                title={job6Text.section4.importantPoints.title}
                items={job6Text.section4.importantPoints.items}
                borderColor="border-orange-500"
              />
            </div>
          </div>
        </section>

        {/* 참고 링크 */}
        <ReferenceSectionComponent
          title={job6Text.sectionTitle_Reference}
          governmentTitle=""
          governmentItems={job6Text.references.leftColumn.items}
          associationsTitle=""
          associationsItems={job6Text.references.rightColumn.items}
          notice={job6Text.references.notice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={6} />
        </section>
      </div>
    </div>
  );
};

export default Job6;

