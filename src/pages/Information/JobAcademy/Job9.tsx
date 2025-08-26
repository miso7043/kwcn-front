
import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, TitledTwoColumnListComponent, SmallTitleListComponent, SimpleTwoColumnListComponent, BorderedListComponent, SimpleTitleListComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job9Text as job9Text_ko } from './locales/Job9_ko';
import { job9Text as job9Text_en } from './locales/Job9_en';

const Job9: React.FC = () => {
  const { language } = useLanguage();
  const job9Text = React.useMemo(() => (language === 'ko' ? job9Text_ko : job9Text_en), [language]);
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job9Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 9 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 9</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job9Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* MOA - Medical Office Assistant */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job9Text.sectionTitle_MOA}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job9Text.moa.what}</h3>
                {job9Text.moa.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job9Text.moaMainTasksTitle}
                  items={job9Text.moa.mainTasks}
                  borderColor="border-blue-500"
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job9Text.moaRequiredSkillsTitle}
                  items={job9Text.moa.requiredSkills}
                  borderColor="border-green-500"
                  titleColor="text-white"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job9Text.moa.how}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <SubSectionWithList
                    title={job9Text.moaEducationOverviewTitle}
                    items={job9Text.moa.educationOverview}
                    borderColor="border-purple-500"
                    titleColor="text-white"
                  />

                  <SubSectionWithList
                    title={job9Text.moaAdmissionRequirementsTitle}
                    items={job9Text.moa.admissionRequirements}
                    borderColor="border-red-500"
                    titleColor="text-white"
                  />
                </div>

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-white text-lg font-bold mb-3">{job9Text.moaMainCollegesTitle}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SmallTitleListComponent
                      title={job9Text.privateCollegesTitle}
                      items={job9Text.moa.mainColleges}
                    />
                    <div className="text-gray-200">
                      <p className="mb-2">{job9Text.moaAdditionalInfo}</p>
                      <p className="text-sm">
                        {job9Text.moaAdditionalInfoDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <SimpleTwoColumnListComponent
                  title={job9Text.moaCareerOptionsTitle}
                  leftColumnItems={job9Text.moa.careerOptions.slice(0, 4)}
                  rightColumnItems={job9Text.moa.careerOptions.slice(4)}
                />
              </div>
            </div>
          </section>

          {/* Rehab Assistant */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job9Text.sectionTitle_Rehab}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job9Text.rehab.what}</h3>
                {job9Text.rehab.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job9Text.rehabMainTasksTitle}
                  items={job9Text.rehab.mainTasks}
                  borderColor="border-blue-500"
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job9Text.rehabWorkEnvironmentTitle}
                  items={job9Text.rehab.workEnvironment}
                  borderColor="border-green-500"
                  titleColor="text-white"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job9Text.rehabEducationOverviewTitle}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <SubSectionWithList
                    title={job9Text.rehabEducationOverviewTitle}
                    items={job9Text.rehab.educationOverview}
                    borderColor="border-purple-500"
                    titleColor="text-white"
                  />

                  <SubSectionWithList
                    title={job9Text.rehabAdmissionRequirementsTitle}
                    items={job9Text.rehab.admissionRequirements}
                    borderColor="border-red-500"
                    titleColor="text-white"
                  />
                </div>

                <div className="bg-sky-700/20 p-6 rounded-lg mb-6">
                  <h4 className="text-white text-lg font-bold mb-3">{job9Text.rehabEnglishRequirementsTitle}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TitledTwoColumnListComponent
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

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-white text-lg font-bold mb-3">{job9Text.rehabCareerOptionsTitle}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SmallTitleListComponent
                      title={job9Text.rehabDirectCareersTitle}
                      items={job9Text.rehab.directCareers}
                      textColor="text-gray-200"
                    />
                    <SmallTitleListComponent
                      title={job9Text.rehabAdvancedCareersTitle}
                      items={job9Text.rehab.advancedCareers}
                      textColor="text-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 기타 헬스케어 진로 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job9Text.sectionTitle_OtherCareers}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SubSectionWithList
                  title={job9Text.otherCareersDentalTitle}
                  items={job9Text.otherCareers.dental}
                  borderColor="border-blue-500"
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job9Text.otherCareersMedicalTechTitle}
                  items={job9Text.otherCareers.medicalTech}
                  borderColor="border-green-500"
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job9Text.otherCareersCareTitle}
                  items={job9Text.otherCareers.care}
                  borderColor="border-purple-500"
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* 헬스케어 진로 선택 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job9Text.sectionTitle_CareerGuide}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">{job9Text.careerGuideMOAvsRehabTitle}</h3>
                  <div className="space-y-4">
                    <BorderedListComponent
                      title={job9Text.careerGuideMOAListTitle}
                      items={job9Text.moaVsRehab.moa}
                      borderColor="border-blue-400"
                      titleColor="text-blue-300"
                    />
                    <BorderedListComponent
                      title={job9Text.careerGuideRehabListTitle}
                      items={job9Text.moaVsRehab.rehab}
                      borderColor="border-green-400"
                      titleColor="text-green-300"
                    />
                  </div>
                </div>

                <SubSectionWithList
                  title={job9Text.careerGuideSuccessFactorsTitle}
                  items={job9Text.successFactors}
                  borderColor="border-yellow-500"
                  titleColor="text-white"
                />
              </div>

              <div className="bg-grey-900 border border-grey-600 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job9Text.outlookTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job9Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <TitledTwoColumnListComponent
                leftColumn={{
                  title: job9Text.referenceMOATitle,
                  items: job9Text.references.moa
                }}
                rightColumn={{
                  title: job9Text.referenceRehabTitle,
                  items: job9Text.references.rehab
                }}
              />
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                <p className="text-blue-200 text-sm">
                  {job9Text.references.notice}
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={9} />
        </div>
      </div>
    </div>
  );
};

export default Job9;

