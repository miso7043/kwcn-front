import { jobAcademyStyles } from './jobAcademyStyles';
import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledtwoThreeColumnListComponent, InfoBoxComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job12Text as job12Text_ko } from './locales/Job12_ko';
import { job12Text as job12Text_en } from './locales/Job12_en';

const Job12: React.FC = () => {
  const { language } = useLanguage();
  const job12Text = React.useMemo(() => (language === 'ko' ? job12Text_ko : job12Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job12Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 12 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 12</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job12Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job12Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* EA 소개 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job12Text.sectionTitle_EA}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job12Text.sectionTitle_EAJob}</h3>
              <p className={jobAcademyStyles.textColors.grayLight}>
                {/* 설명은 필요시 job12Text.intro 등으로 분리 가능 */}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job12Text.eaMainTasks.title}
                items={job12Text.eaMainTasks.items}
                borderColor={job12Text.eaMainTasks.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job12Text.eaWorkEnvironment.title}
                items={job12Text.eaWorkEnvironment.items}
                borderColor={job12Text.eaWorkEnvironment.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftOrange}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job12Text.sectionTitle_EAImportance}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job12Text.eaImportance.leftColumn}
                rightColumn={job12Text.eaImportance.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* EA 자격 요건 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job12Text.sectionTitle_Qualification}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job12Text.sectionTitle_QualificationBasic}
                items={job12Text.eaQualification.basic}
              />

              <BoxListComponent
                title={job12Text.sectionTitle_QualificationPreferred}
                items={job12Text.eaQualification.preferred}
              />
            </div>

            <InfoBoxComponent
              title={job12Text.eaQualification.why.title}
              description={job12Text.eaQualification.why.description}
              items={job12Text.eaQualification.why.items}
              bgColor={job12Text.eaQualification.why.bgColor}
            />
          </div>
        </section>

        {/* BC주 정부인가 학교 프로그램 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job12Text.sectionTitle_BCPrograms}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <p className={jobAcademyStyles.textColors.grayLight}>
              {/* 설명은 필요시 job12Text.bcPrograms.desc 등으로 분리 가능 */}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job12Text.sectionTitle_PublicColleges}
                items={job12Text.bcPrograms.public}
              />

              <BoxListComponent
                title={job12Text.sectionTitle_PrivateInstitutions}
                items={job12Text.bcPrograms.private}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftEmerald}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job12Text.sectionTitle_ProgramConsiderations}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job12Text.bcPrograms.considerations.leftColumn}
                rightColumn={job12Text.bcPrograms.considerations.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 교육프로그램 공통 입학요건 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardRed}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job12Text.sectionTitle_Admission}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job12Text.sectionTitle_AdmissionEducation}
                items={job12Text.admissionRequirements.education}
              />

              <BoxListComponent
                title={job12Text.sectionTitle_AdmissionEnglish}
                items={job12Text.admissionRequirements.english}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job12Text.sectionTitle_AdmissionAdditional}
                items={job12Text.admissionRequirements.additional}
              />

              <BoxListComponent
                title={job12Text.sectionTitle_AdmissionSchoolDiff}
                items={job12Text.admissionRequirements.schoolDiff}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftYellow}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job12Text.sectionTitle_AdmissionPrep}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job12Text.sectionTitle_AdmissionPrep1}</h3>
                  <ul className="space-y-1">
                    {job12Text.admissionRequirements.prep.basic.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h3 className="font-semibold mb-2">{job12Text.sectionTitle_AdmissionPrep2}</h3>
                  <ul className="space-y-1">
                    {job12Text.admissionRequirements.prep.docs.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={jobAcademyStyles.textColors.purpleLight}>
                  <h3 className="font-semibold mb-2">{job12Text.sectionTitle_AdmissionPrep3}</h3>
                  <ul className="space-y-1">
                    {job12Text.admissionRequirements.prep.process.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EA 진로 전망 및 발전 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className="text-zinc-90 text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job12Text.sectionTitle_Career}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job12Text.sectionTitle_CareerOutlook}
                items={job12Text.career.outlook}
              />

              <BoxListComponent
                title={job12Text.sectionTitle_CareerPath}
                items={job12Text.career.path}
              />
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftEmerald} p-6`}>
              <h3 className="text-black text-xl font-bold mb-4">{job12Text.sectionTitle_CareerAdvice}</h3>
              <TitledtwoThreeColumnListComponent
                leftColumn={job12Text.career.advice.leftColumn}
                rightColumn={job12Text.career.advice.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job12Text.sectionTitle_Reference}
          governmentTitle={job12Text.sectionTitle_ReferenceGov}
          governmentItems={job12Text.references.government}
          associationsTitle={job12Text.sectionTitle_ReferenceAssoc}
          associationsItems={job12Text.references.associations}
          notice={job12Text.references.notice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={12} />
        </section>
      </div>
    </div>
  );
};

export default Job12;

