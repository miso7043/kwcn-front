import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, SimpleReferenceListComponent, TitledTwoColumnListComponent, InfoBoxComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job12Text as job12Text_ko } from './locales/Job12_ko';
import { job12Text as job12Text_en } from './locales/Job12_en';

const Job12: React.FC = () => {
  const { language } = useLanguage();
  const job12Text = React.useMemo(() => (language === 'ko' ? job12Text_ko : job12Text_en), [language]);
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job12Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 12 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 12</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job12Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job12Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* EA 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_EA}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job12Text.sectionTitle_EAJob}</h3>
                <p className="text-gray-200 mb-6">
                  {/* 설명은 필요시 job12Text.intro 등으로 분리 가능 */}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job12Text.eaMainTasks.title}
                  items={job12Text.eaMainTasks.items}
                  borderColor={job12Text.eaMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job12Text.eaWorkEnvironment.title}
                  items={job12Text.eaWorkEnvironment.items}
                  borderColor={job12Text.eaWorkEnvironment.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job12Text.sectionTitle_EAImportance}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job12Text.eaImportance.leftColumn}
                  rightColumn={job12Text.eaImportance.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* EA 자격 요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_Qualification}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_BCPrograms}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <p className="text-gray-200 mb-8">
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

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job12Text.sectionTitle_ProgramConsiderations}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job12Text.bcPrograms.considerations.leftColumn}
                  rightColumn={job12Text.bcPrograms.considerations.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 교육프로그램 공통 입학요건 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_Admission}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
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

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job12Text.sectionTitle_AdmissionPrep}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job12Text.sectionTitle_AdmissionPrep1}</h3>
                    <ul className="space-y-1">
                      {job12Text.admissionRequirements.prep.basic.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h3 className="font-semibold mb-2">{job12Text.sectionTitle_AdmissionPrep2}</h3>
                    <ul className="space-y-1">
                      {job12Text.admissionRequirements.prep.docs.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-purple-200">
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_Career}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
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

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job12Text.sectionTitle_CareerAdvice}</h3>
                <TitledTwoColumnListComponent
                  leftColumn={job12Text.career.advice.leftColumn}
                  rightColumn={job12Text.career.advice.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job12Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title={job12Text.sectionTitle_ReferenceGov}
                  items={job12Text.references.government}
                />
                <SimpleReferenceListComponent
                  title={job12Text.sectionTitle_ReferenceAssoc}
                  items={job12Text.references.associations}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200">
                  {job12Text.references.notice}
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <div className="container mx-auto px-4 pb-8">
            <JobAcademyNavigation currentJobId={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job12;

