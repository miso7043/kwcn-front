import { jobAcademyStyles } from './jobAcademyStyles';
import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, InfoBoxComponent, StepGuideComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job7Text as job7Text_ko } from './locales/Job7_ko';
import { job7Text as job7Text_en } from './locales/Job7_en';


const Job7: React.FC = () => {
  const { language } = useLanguage();
  const job7Text = useMemo(() => (language === 'ko' ? job7Text_ko : job7Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job7Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 7 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 7</h2>
        </div>
        <div className={`absolute left-[66%] ${language === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg ">
            {job7Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job7Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* 직장에서 임금 받기 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job7Text.sectionTitle1}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <p className={jobAcademyStyles.textColors.grayParagraph}>
                {job7Text.section1Description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job7Text.paymentRules.title}
                items={job7Text.paymentRules.items}
                borderColor={job7Text.paymentRules.borderColor}
              />

              <SubSectionWithList
                title={job7Text.wageStandards.title}
                items={job7Text.wageStandards.items}
                borderColor={job7Text.wageStandards.borderColor}
              />

              <SubSectionWithList
                title={job7Text.deductionsRecords.title}
                items={job7Text.deductionsRecords.items}
                borderColor={job7Text.deductionsRecords.borderColor}
              />

              <SubSectionWithList
                title={job7Text.tipsUniforms.title}
                items={job7Text.tipsUniforms.items}
                borderColor={job7Text.tipsUniforms.borderColor}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job7Text.vacationPay.title}
                items={job7Text.vacationPay.items}
                borderColor={job7Text.vacationPay.borderColor}
              />

              <div className={jobAcademyStyles.containers.lightBox}>
                <h3 className={jobAcademyStyles.headings.h3}>{job7Text.holidayPayCalculation.title}</h3>
                <div className={jobAcademyStyles.textColors.grayDark}>
                  <p className="mb-2"><strong>{job7Text.holidayPayCalculation.formulaLabel}</strong> {job7Text.holidayPayCalculation.formula}</p>
                  <p className="mb-2"><strong>{job7Text.holidayPayCalculation.workingHolidayTitle}</strong></p>
                  <ul className="ml-4 space-y-1">
                    {job7Text.holidayPayCalculation.workingHolidayRules.map((rule, index) => (
                      <li key={index}>• {rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 사직 또는 해고 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job7Text.sectionTitle2}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <p className={jobAcademyStyles.textColors.grayParagraph}>
                {job7Text.section2Description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job7Text.employeeResignation.title}
                items={job7Text.employeeResignation.items}
                borderColor={job7Text.employeeResignation.borderColor}
              />

              <SubSectionWithList
                title={job7Text.employerTermination.title}
                items={job7Text.employerTermination.items}
                borderColor={job7Text.employerTermination.borderColor}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <SubSectionWithList
                  title={job7Text.justCause.title}
                  items={job7Text.justCause.items}
                  borderColor={job7Text.justCause.borderColor}
                />

                <div className="bg-yellow-600/20 mt-3 p-6 rounded-lg">
                  <p className={jobAcademyStyles.textColors.grayDark}>
                    {job7Text.justCause.note}
                  </p>
                </div>
              </div>

              <SubSectionWithList
                title={job7Text.layoff.title}
                items={job7Text.layoff.items}
                borderColor={job7Text.layoff.borderColor}
              />
            </div>

            <InfoBoxComponent
              title={job7Text.finalWageComposition.title}
              description={job7Text.finalWageComposition.description}
              items={job7Text.finalWageComposition.items}
              bgColor="bg-cyan-900/20"
              textColor={jobAcademyStyles.textColors.grayDark}
            />
          </div>
        </section>

        {/* 법정 공휴일 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job7Text.sectionTitle3}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <p className={jobAcademyStyles.textColors.grayParagraph}>
                {job7Text.section3Description}
              </p>
            </div>

            <div className={`${jobAcademyStyles.grids.twoColumn} mb-8`}>
              <StepGuideComponent
                title={job7Text.holidayPaySteps.title}
                steps={job7Text.holidayPaySteps.steps}
                bgColor={jobAcademyStyles.section.amberCardYellow}
                textColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job7Text.holidayReplacement.title}
                items={job7Text.holidayReplacement.items}
                borderColor={job7Text.holidayReplacement.borderColor}
              />
            </div>

            <div className="bg-indigo-900/10 border border-indigo-600/20 p-6 rounded-lg">
              <h3 className={jobAcademyStyles.headings.h3}>{job7Text.bcHolidaysTitle}</h3>
              {/* <ReferenceListComponent
                leftColumn={job7Text.bcHolidays.leftColumn}
                rightColumn={job7Text.bcHolidays.rightColumn}
              /> */}

              <div className={jobAcademyStyles.grids.twoColumn}>
                      <div className={jobAcademyStyles.textColors.grayLight}>
                          {job7Text.bcHolidays.leftColumn.items.map((item: string, index: number) => (
                              <p key={index} className="mb-2">• {item}</p>
                          ))}
                      </div>
                      <div className={jobAcademyStyles.textColors.grayLight}>
                          {job7Text.bcHolidays.rightColumn.items.map((item: string, index: number) => (
                              <p key={index} className="mb-2">• {item}</p>
                          ))}
                      </div>
                  </div>
            </div>
          </div>
        </section>

        {/* 참고 링크 */}
        <ReferenceSectionComponent
          title={job7Text.sectionTitle4}
          governmentTitle=""
          governmentItems={job7Text.references.leftColumn.items}
          associationsTitle=""
          associationsItems={job7Text.references.rightColumn.items}
          notice={job7Text.references.notice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={7} />
        </section>
      </div>
    </div>
  );
};

export default Job7;