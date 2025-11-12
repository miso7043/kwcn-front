import { jobAcademyStyles } from './jobAcademyStyles';
import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledtwoThreeColumnListComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job13Text as job13Text_ko } from './locales/Job13_ko';
import { job13Text as job13Text_en } from './locales/Job13_en';

const Job13: React.FC = () => {
  const { language } = useLanguage();
  const job13Text = React.useMemo(() => (language === 'ko' ? job13Text_ko : job13Text_en), [language]);

  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job13Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 1 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt={job13Text.lectureBackgroundAlt}
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>{job13Text.lectureNumber}</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job13Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job13Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* Community Worker 소개 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job13Text.sectionTitle1}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job13Text.sectionSubtitle1}</h3>
              <p className={jobAcademyStyles.textColors.grayLight}>
                {job13Text.intro}
              </p>
            </div>

            <div className={`${jobAcademyStyles.grids.twoColumn} mb-6`}>
              <SubSectionWithList
                title={job13Text.communityWorkerMainTasks.title}
                items={job13Text.communityWorkerMainTasks.items}
                borderColor={job13Text.communityWorkerMainTasks.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job13Text.serviceTargets.title}
                items={job13Text.serviceTargets.items}
                borderColor={job13Text.serviceTargets.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftOrange}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job13Text.sectionSubtitle2}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job13Text.valuesPrinciples.leftColumn}
                rightColumn={job13Text.valuesPrinciples.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 근무 환경 및 분야 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job13Text.sectionTitle2}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job13Text.nonprofitTitle}
                items={job13Text.workFields.nonprofit}
              />

              <BoxListComponent
                title={job13Text.publicTitle}
                items={job13Text.workFields.public}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftEmerald}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job13Text.sectionSubtitle3}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job13Text.clinicalTitle}</h3>
                  <ul className="space-y-1">
                    {job13Text.workFields.specialties.clinical.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job13Text.communityTitle}</h3>
                  <ul className="space-y-1">
                    {job13Text.workFields.specialties.community.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.darkZinc}>
                  <h3 className="font-semibold mb-2">{job13Text.researchTitle}</h3>
                  <ul className="space-y-1">
                    {job13Text.workFields.specialties.research.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 자격 및 교육 요건 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardRed}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job13Text.sectionTitle3}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job13Text.educationTitle}
                items={job13Text.qualification.education}
              />

              <BoxListComponent
                title={job13Text.licenseTitle}
                items={job13Text.qualification.license}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job13Text.experienceTitle}
                items={job13Text.qualification.experience}
              />

              <BoxListComponent
                title={job13Text.qualitiesTitle}
                items={job13Text.qualification.qualities}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftLime}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job13Text.institutionsTitle}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job13Text.bachelorTitle}</h3>
                  <ul className="space-y-1">
                    {job13Text.qualification.institutions.bachelor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job13Text.masterTitle}</h3>
                  <ul className="space-y-1">
                    {job13Text.qualification.institutions.master.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 진로 발전 및 전망 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job13Text.sectionTitle4}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job13Text.levelsTitle}
                items={job13Text.career.levels}
              />

              <BoxListComponent
                title={job13Text.specialtiesTitle}
                items={job13Text.career.specialties}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftLime}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job13Text.outlookTitle}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job13Text.career.outlook.leftColumn}
                rightColumn={job13Text.career.outlook.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 급여 및 근무 조건 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job13Text.sectionTitle5}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job13Text.salaryLevelsTitle}
                items={job13Text.salary.levels}
              />

              <BoxListComponent
                title={job13Text.conditionsTitle}
                items={job13Text.salary.conditions}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftRose}`}>
              <h3 className="text-black text-xl font-bold mb-4">{job13Text.rewardTitle}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job13Text.salary.reward.leftColumn}
                rightColumn={job13Text.salary.reward.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
                {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job13Text.sectionTitle6}
          associationsTitle={job13Text.associationsTitle}
          associationsItems={job13Text.references.associations}
          governmentTitle={job13Text.governmentTitle}
          governmentItems={job13Text.references.government}
          notice={job13Text.references.notice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={13} />
        </section>
      </div>
    </div >
  );
};

export default Job13;

