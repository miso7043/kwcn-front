import { jobAcademyStyles } from './jobAcademyStyles';
import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import {
  SimpleTitleListComponent,
  SmallTitleListComponent,
  SubSectionWithList,
  BoxListComponent,
  MultiColumnListComponent,
  TableComponent,
  ReferenceSectionComponent
} from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job10Text as job10Text_ko } from './locales/Job10_ko';
import { job10Text as job10Text_en } from './locales/Job10_en';

const Job10: React.FC = () => {
  const { language } = useLanguage();
  const job10Text = React.useMemo(() => (language === 'ko' ? job10Text_ko : job10Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-gray-800 drop-shadow-2xl">
            {job10Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 10 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 10</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job10Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job10Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* ECE 소개 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job10Text.sectionTitle_ECE}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job10Text.sectionTitle_ECEJob}</h3>
              <p className={jobAcademyStyles.textColors.grayLight}>
                {/* 설명 필요시 job10Text.eceIntro 등으로 분리 가능 */}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job10Text.eceMainTasks.title}
                items={job10Text.eceMainTasks.items}
                borderColor={job10Text.eceMainTasks.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job10Text.eceSkills.title}
                items={job10Text.eceSkills.items}
                borderColor={job10Text.eceSkills.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>
          </div>
        </section>

        {/* ECE 자격증 단계 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job10Text.sectionTitle_ECECertificates}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <p className={jobAcademyStyles.textColors.grayLight}>
              {/* 설명 필요시 job10Text.eceCertificateDesc 등으로 분리 가능 */}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <SubSectionWithList
                title={job10Text.eceAssistant.title}
                items={job10Text.eceAssistant.items}
                borderColor={job10Text.eceAssistant.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job10Text.eceCertificate.title}
                items={job10Text.eceCertificate.items}
                borderColor={job10Text.eceCertificate.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job10Text.eceDiploma.title}
                items={job10Text.eceDiploma.items}
                borderColor={job10Text.eceDiploma.borderColor}
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={jobAcademyStyles.containers.cyanLightInfo}>
              <h3 className={jobAcademyStyles.headings.h3}>{job10Text.sectionTitle_ECESpecialization}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h4 className="font-semibold mb-2">{job10Text.eceITTitle}</h4>
                  <p>{job10Text.eceITDesc}</p>
                </div>
                <div className={jobAcademyStyles.textColors.grayLight}>
                  <h4 className="font-semibold mb-2">{job10Text.eceSpecialNeedsTitle}</h4>
                  <p>{job10Text.eceSpecialNeedsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ECE 취득 프로세스 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job10Text.sectionTitle_ECEProcess}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <p className="text-gray-200 mb-6">
                {/* 설명 필요시 job10Text.eceProcessDesc 등으로 분리 가능 */}
              </p>
            </div>

            <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftEmerald}`}>
              <h3 className={jobAcademyStyles.headings.h3}>{job10Text.sectionTitle_ECEProcessDocs}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                {job10Text.sectionTitle_ECEProcessDocsList.map((doc, idx) => (
                  <div className={jobAcademyStyles.textColors.grayLight} key={idx}>
                    <h4 className="font-semibold mb-2 text-green-900">{doc.title}</h4>
                    <p>{doc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ECE가 되는 방법들 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className="bg-orange-100 rounded-lg p-8">
            <h2 className={jobAcademyStyles.sectionTitle}>
              {job10Text.sectionTitle_ECEHow}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            {/* 방법 1: BC주 정부인가 교육프로그램 */}
            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{job10Text.sectionTitle_ECEHow1}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <BoxListComponent
                  title={job10Text.sectionTitle_PublicColleges}
                  items={job10Text.publicColleges}
                />

                <BoxListComponent
                  title={job10Text.sectionTitle_PrivateColleges}
                  items={job10Text.privateColleges}
                />
              </div>

              <MultiColumnListComponent
                title={job10Text.sectionTitle_SchoolDistricts}
                columns={job10Text.schoolDistrictsColumns}
                borderColor={jobAcademyStyles.borders.leftEmerald}
              />

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h4 className="text-gray-800 font-bold mb-3">{job10Text.sectionTitle_ECEOverview}</h4>
                <div className={jobAcademyStyles.grids.twoColumn}>
                  <SmallTitleListComponent
                    title={job10Text.sectionTitle_EducationPeriod}
                    items={job10Text.eceEducationPeriods}
                  />
                  <SmallTitleListComponent
                    title={job10Text.sectionTitle_Admission}
                    items={job10Text.eceAdmissionRequirements}
                  />
                </div>
              </div>
            </div>

            {/* 방법 2: 한국경력 인정 */}
            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{job10Text.sectionTitle_ECEHow2}</h3>

                <div className={jobAcademyStyles.grids.twoColumn}>
              <BoxListComponent
                title={job10Text.sectionTitle_Qualification}
                items={job10Text.koreanQualificationRequirements}
                titleColor={jobAcademyStyles.textColors.grayDark}
                spacing="space-y-2"
                marginBottom="mb-6"
              />

              <MultiColumnListComponent
                title={job10Text.sectionTitle_KoreanExperience}
                columns={job10Text.koreanExperienceColumns}
                gridCols="grid-cols-1 md:grid-cols-2"
                spacing="space-y-2"
                marginBottom=""
                borderColor={jobAcademyStyles.borders.leftEmerald}
              />
              </div>
            </div>

            {/* 방법 3: 타주 자격 전환 */}
            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{job10Text.sectionTitle_ECEHow3}</h3>

              <p className="text-gray-200 mb-6">
                {/* 설명 필요시 job10Text.provinceTransferDesc 등으로 분리 가능 */}
              </p>

              <div className="bg-zinc-300 p-6 rounded-lg mb-6">
                <TableComponent
                  title={job10Text.provinceQualificationTableData.title}
                  headers={job10Text.provinceQualificationTableData.headers}
                  rows={job10Text.provinceQualificationTableData.rows}
                />
                <p className="text-gray-900 text-xs mt-4">
                  {job10Text.sectionTitle_ReferenceNotice}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ECE Career Options */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className="bg-orange-100 rounded-lg p-8">
            <h2 className="text-gray-800 text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job10Text.sectionTitle_ECECareer}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job10Text.sectionTitle_DirectCareers}
                items={job10Text.eceDirectCareers}
                titleColor="text-gray-800 text-xl"
                spacing="space-y-2"
              />

              <BoxListComponent
                title={job10Text.sectionTitle_WorkEnvironments}
                items={job10Text.eceWorkEnvironments}
                titleColor="text-gray-800 text-xl"
                spacing="space-y-2"
              />
            </div>

            <div className={`${jobAcademyStyles.borders.leftYellow} bg-green-100 p-6 rounded-lg mb-6`}>
              <h3 className="text-gray-800 text-xl font-bold mb-4">{job10Text.sectionTitle_Montessori}</h3>
              <div className={jobAcademyStyles.grids.twoColumn}>
                <SimpleTitleListComponent
                  title={job10Text.sectionTitle_MontessoriOverview}
                  items={job10Text.montessoriOverview}
                />
                <SimpleTitleListComponent
                  title={job10Text.sectionTitle_MontessoriRequirements}
                  items={job10Text.montessoriRequirements}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 성공 가이드 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className="bg-rose-100 rounded-lg p-8">
            <h2 className="text-gray-800 text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job10Text.sectionTitle_ECESuccess}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job10Text.sectionTitle_Success}
                items={job10Text.eceSuccessFactors}
                titleColor="text-gray-800 text-xl"
                spacing="space-y-2"
              />

              <BoxListComponent
                title={job10Text.sectionTitle_Challenges}
                items={job10Text.eceChallenges}
                titleColor="text-gray-800 text-xl"
                spacing="space-y-2"
              />
            </div>

            <div className="bg-lime-100 p-6 rounded-lg">
              <h3 className="text-gray-800 text-xl font-bold mb-4">{job10Text.sectionTitle_ECEOutlook}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                <SimpleTitleListComponent
                  title={job10Text.sectionTitle_ECEPositive}
                  items={job10Text.ecePositiveFactors}
                />
                <SimpleTitleListComponent
                  title={job10Text.sectionTitle_ECEConsiderations}
                  items={job10Text.eceConsiderations}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job10Text.sectionTitle_Reference}
          governmentTitle={job10Text.sectionTitle_Government}
          governmentItems={job10Text.governmentAgencies}
          associationsTitle={job10Text.sectionTitle_Association}
          associationsItems={job10Text.educationAssociations}
          notice={job10Text.eceNotice}
        />

        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={10} />
        </section>
      </div>
    </div>
  );
};

export default Job10;

