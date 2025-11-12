import { jobAcademyStyles } from './jobAcademyStyles';

import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, TitledtwoThreeColumnListComponent, SmallTitleListComponent, SimpletwoThreeColumnListComponent, BorderedListComponent, SimpleTitleListComponent, ReferenceSectionComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job9Text as job9Text_ko } from './locales/Job9_ko';
import { job9Text as job9Text_en } from './locales/Job9_en';

const Job9: React.FC = () => {
  const { language } = useLanguage();
  const job9Text = React.useMemo(() => (language === 'ko' ? job9Text_ko : job9Text_en), [language]);
  return (
    <div className={jobAcademyStyles.section.minHeight}>
      {/* 헤더 섹션 */}
      <div className={jobAcademyStyles.containers.overflowHidden}>
        <div
          className={jobAcademyStyles.containers.heroBackground}
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 className="pt-10 text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {job9Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 9 섹션 */}
      <div className={jobAcademyStyles.containers.lectureImageWrapper}>
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className={jobAcademyStyles.containers.imageResponsive}
        />

        <div className={jobAcademyStyles.absolutePositions.lectureNumberPos}>
          <h2 className={jobAcademyStyles.headings.lectureNumber}>Lecture 9</h2>
        </div>
        <div className={jobAcademyStyles.absolutePositions.lectureTitlePos}>
          <h2 className={jobAcademyStyles.headings.lectureTitle}>
            {job9Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className={jobAcademyStyles.containers.centerContainer}>
        {/* MOA (Medical Office Assistant) */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCard}>
            <h2 className={jobAcademyStyles.headings.whiteH2}>
              {job9Text.sectionTitle_MOA}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>
            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job9Text.moa.what}</h3>
              {job9Text.moa.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job9Text.moaMainTasksTitle}
                items={job9Text.moa.mainTasks}
                borderColor="border-blue-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job9Text.moaRequiredSkillsTitle}
                items={job9Text.moa.requiredSkills}
                borderColor="border-green-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job9Text.moa.how}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 mb-6">
                <SubSectionWithList
                  title={job9Text.moaEducationOverviewTitle}
                  items={job9Text.moa.educationOverview}
                  borderColor="border-purple-500"
                  titleColor={jobAcademyStyles.textColors.grayDark}
                />

                <SubSectionWithList
                  title={job9Text.moaAdmissionRequirementsTitle}
                  items={job9Text.moa.admissionRequirements}
                  borderColor="border-red-500"
                  titleColor={jobAcademyStyles.textColors.grayDark}
                />
              </div>

              <div className={`${jobAcademyStyles.containers.lightBox}  ${jobAcademyStyles.borders.leftEmerald} pl-4 mb-4`}>
                <h4 className={jobAcademyStyles.headings.h5}>{job9Text.moaMainCollegesTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SmallTitleListComponent
                    title={job9Text.privateCollegesTitle}
                    items={job9Text.moa.mainColleges}
                  />
                  <div className={jobAcademyStyles.textColors.grayLight}>
                    <p className="mb-2">{job9Text.moaAdditionalInfo}</p>
                    <p className="text-sm">
                      {job9Text.moaAdditionalInfoDesc}
                    </p>
                  </div>
                </div>
              </div>

              <SimpletwoThreeColumnListComponent
                title={job9Text.moaCareerOptionsTitle}
                leftColumnItems={job9Text.moa.careerOptions.slice(0, 4)}
                rightColumnItems={job9Text.moa.careerOptions.slice(4)}
              />
            </div>
          </div>
        </section>

        {/* Rehab Assistant */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardEmerald}>
            <h2 className={jobAcademyStyles.headings.whiteH2}>
              {job9Text.sectionTitle_Rehab}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>
            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job9Text.rehab.what}</h3>
              {job9Text.rehab.desc.map((desc, idx) => (
                <p className={jobAcademyStyles.textColors.grayParagraph} key={idx}>{desc}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SubSectionWithList
                title={job9Text.rehabMainTasksTitle}
                items={job9Text.rehab.mainTasks}
                borderColor="border-blue-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job9Text.rehabWorkEnvironmentTitle}
                items={job9Text.rehab.workEnvironment}
                borderColor="border-green-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className={jobAcademyStyles.spacing.marginBottom8}>
              <h3 className={jobAcademyStyles.headings.h2}>{job9Text.rehabEducationOverviewTitle}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <SubSectionWithList
                  title={job9Text.rehabEducationOverviewTitle}
                  items={job9Text.rehab.educationOverview}
                  borderColor="border-purple-500"
                  titleColor={jobAcademyStyles.textColors.grayDark}
                />

                <SubSectionWithList
                  title={job9Text.rehabAdmissionRequirementsTitle}
                  items={job9Text.rehab.admissionRequirements}
                  borderColor="border-red-500"
                  titleColor={jobAcademyStyles.textColors.grayDark}
                />
              </div>

              <div className={`${jobAcademyStyles.containers.cyanLightInfo} ${jobAcademyStyles.borders.leftYellow} pl-4 mb-4`}>
                <h4 className={jobAcademyStyles.headings.h5}>{job9Text.rehabEnglishRequirementsTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TitledtwoThreeColumnListComponent
                    leftColumn={{
                      title: job9Text.rehabEnglishRequirementsTitle,
                      items: job9Text.rehab.englishRequirements
                    }}
                    rightColumn={{
                      title: job9Text.rehabMathScienceRequirementsTitle,
                      items: job9Text.rehab.mathScienceRequirements
                    }}
                  />
                </div>
              </div>

              <div className={`${jobAcademyStyles.containers.lightBox} ${jobAcademyStyles.borders.leftEmerald} pl-4 mb-4`}>
                <h4 className={jobAcademyStyles.headings.h5}>{job9Text.rehabCareerOptionsTitle}</h4>
                <div className={jobAcademyStyles.grids.twoThreeColumn}>
                  <SmallTitleListComponent
                    title={job9Text.rehabDirectCareersTitle}
                    items={job9Text.rehab.directCareers}
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                  <SmallTitleListComponent
                    title={job9Text.rehabAdvancedCareersTitle}
                    items={job9Text.rehab.advancedCareers}
                    textColor={jobAcademyStyles.textColors.grayLight}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기타 헬스케어 진로 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardYellow}>
            <h2 className={jobAcademyStyles.headings.whiteH2}>
              {job9Text.sectionTitle_OtherCareers}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className={jobAcademyStyles.grids.threeColumn}>
              <SubSectionWithList
                title={job9Text.otherCareersDentalTitle}
                items={job9Text.otherCareers.dental}
                borderColor="border-blue-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job9Text.otherCareersMedicalTechTitle}
                items={job9Text.otherCareers.medicalTech}
                borderColor="border-green-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />

              <SubSectionWithList
                title={job9Text.otherCareersCareTitle}
                items={job9Text.otherCareers.care}
                borderColor="border-purple-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>
          </div>
        </section>

        {/* 헬스케어 진로 선택 가이드 */}
        <section className={jobAcademyStyles.spacing.marginBottom12}>
          <div className={jobAcademyStyles.section.amberCardRed}>
            <h2 className="text-black text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job9Text.sectionTitle_CareerGuide}
              <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-lime-200 p-6 rounded-lg">
                <h3 className="text-black text-xl font-bold mb-4">{job9Text.careerGuideMOAvsRehabTitle}</h3>
                <div className="space-y-4">
                  <BorderedListComponent
                    title={job9Text.careerGuideMOAListTitle}
                    items={job9Text.moaVsRehab.moa}
                    borderColor="border-blue-400"
                    titleColor="text-stone-800"
                  />
                  <BorderedListComponent
                    title={job9Text.careerGuideRehabListTitle}
                    items={job9Text.moaVsRehab.rehab}
                    borderColor="border-green-400"
                    titleColor="text-zinc-800"
                  />
                </div>
              </div>

              <SubSectionWithList
                title={job9Text.careerGuideSuccessFactorsTitle}
                items={job9Text.successFactors}
                borderColor="border-yellow-500"
                titleColor={jobAcademyStyles.textColors.grayDark}
              />
            </div>

            <div className="bg-orange-200 border border-zinc-300 p-6 rounded-lg">
              <h3 className="text-zinc-800 text-xl font-bold mb-4">{job9Text.outlookTitle}</h3>
              <div className={jobAcademyStyles.grids.twoThreeColumn}>
                <SimpleTitleListComponent
                  title={job9Text.outlookPositiveTitle}
                  items={job9Text.outlook.positive}
                />
                <SimpleTitleListComponent
                  title={job9Text.outlookConsiderationsTitle}
                  items={job9Text.outlook.considerations}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
        <ReferenceSectionComponent
          title={job9Text.sectionTitle_Reference}
          governmentTitle={job9Text.referenceMOATitle}
          governmentItems={job9Text.references.moa}
          associationsTitle={job9Text.referenceRehabTitle}
          associationsItems={job9Text.references.rehab}
          notice={job9Text.references.notice}
        />


        {/* Job Academy 네비게이션 */}
        <section className={jobAcademyStyles.section.basic}>
          <JobAcademyNavigation currentJobId={9} />
        </section>
      </div>
    </div>
  );
};

export default Job9;

