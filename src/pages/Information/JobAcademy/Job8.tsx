
import React from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent, InfoBoxComponent, StepGuideComponent, TitledTwoColumnListComponent, SingleTitledListComponent } from './InfoSubComponent';
import { useMemo } from 'react';
import useLanguage from '../../../hooks/useLanguage';
import { job8Text as job8Text_ko } from './locales/Job8_ko';
import { job8Text as job8Text_en } from './locales/Job8_en';

const Job8: React.FC = () => {
  const { language } = useLanguage();
  const job8Text = useMemo(() => (language === 'ko' ? job8Text_ko : job8Text_en), [language]);
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job8Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 8 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 8</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job8Text.lectureSubtitle}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* 헬스케어 커리어 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job8Text.sectionTitle_HealthcareIntro}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              {job8Text.section1.desc.map((desc, idx) => (
                <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job8Text.sectionTitle_CDA}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job8Text.cda.what}</h3>
                {job8Text.cda.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="bg-cyan-700/10 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">{job8Text.cda.how}</h3>
                  {job8Text.cda.howDesc.map((desc, idx) => (
                    <p className="text-gray-200 mb-2" key={idx}>{desc}</p>
                  ))}
                  <SingleTitledListComponent
                    title={job8Text.publicCollegesTitle}
                    items={job8Text.cda.publicColleges}
                    titleClass="font-semibold mb-2"
                    textColor="text-gray-200"
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

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">{job8Text.cdaExamOverviewTitle}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <SingleTitledListComponent
                      title={job8Text.examProcessTitle}
                      items={job8Text.cda.examProcess}
                      titleClass="mb-2 font-bold"
                      textColor="text-gray-200"
                    />
                    <SingleTitledListComponent
                      title={job8Text.levelClassificationTitle}
                      items={job8Text.cda.levelClassification}
                      titleClass="mb-2 font-bold"
                      textColor="text-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HCA - Healthcare Aide */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job8Text.sectionTitle_HCA}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job8Text.hca.what}</h3>
                {job8Text.hca.desc.map((desc, idx) => (
                  <p className="text-gray-200 text-lg mb-6" key={idx}>{desc}</p>
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
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job8Text.privateCollegesTitle}
                  items={job8Text.hca.privateColleges}
                  borderColor="border-sky-500"
                  titleColor="text-white"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job8Text.hcaCareerOptionsTitle}</h3>
                <TitledTwoColumnListComponent
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job8Text.sectionTitle_CareerGuide}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <StepGuideComponent
                  title={job8Text.stepGuideTitle}
                  steps={job8Text.cdaVsHcaComparison.map((step, idx) => ({
                    ...step,
                    borderColor: idx === 0 ? 'border-blue-400' : 'border-green-400',
                    titleColor: idx === 0 ? 'text-blue-300' : 'text-green-300',
                  }))}
                  bgColor="bg-gray-900"
                  textColor="text-white"
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
                bgColor="bg-grey-900 border border-grey-600"
                textColor="text-grey-200"
              />
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job8Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-6">
                <ReferenceListComponent
                  leftColumn={{ items: job8Text.references.left }}
                  rightColumn={{ items: job8Text.references.right }}
                />
              </div>

              <div className="mt-6 p-4 bg-gray-900  rounded-lg">
                <p className="text-white text-sm">
                  {job8Text.references.notice}
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={8} />
        </div>
      </div>
    </div>
  );
};

export default Job8;

