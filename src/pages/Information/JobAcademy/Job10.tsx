import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import {
  SimpleTitleListComponent,
  SmallTitleListComponent,
  SubSectionWithList,
  BoxListComponent,
  MultiColumnListComponent,
  SimpleReferenceListComponent,
  TableComponent
} from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job10Text as job10Text_ko } from './locales/Job10_ko';
import { job10Text as job10Text_en } from './locales/Job10_en';

const Job10: React.FC = () => {
  const { language } = useLanguage();
  const job10Text = React.useMemo(() => (language === 'ko' ? job10Text_ko : job10Text_en), [language]);
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job10Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 10 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 10</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job10Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job10Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* ECE 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECE}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job10Text.sectionTitle_ECEJob}</h3>
                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job10Text.eceIntro 등으로 분리 가능 */}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job10Text.eceMainTasks.title}
                  items={job10Text.eceMainTasks.items}
                  borderColor={job10Text.eceMainTasks.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job10Text.eceSkills.title}
                  items={job10Text.eceSkills.items}
                  borderColor={job10Text.eceSkills.borderColor}
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* ECE 자격증 단계 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECECertificates}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <p className="text-gray-200 mb-8">
                {/* 설명 필요시 job10Text.eceCertificateDesc 등으로 분리 가능 */}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <SubSectionWithList
                  title={job10Text.eceAssistant.title}
                  items={job10Text.eceAssistant.items}
                  borderColor={job10Text.eceAssistant.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job10Text.eceCertificate.title}
                  items={job10Text.eceCertificate.items}
                  borderColor={job10Text.eceCertificate.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job10Text.eceDiploma.title}
                  items={job10Text.eceDiploma.items}
                  borderColor={job10Text.eceDiploma.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/15 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job10Text.sectionTitle_ECESpecialization}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">{job10Text.eceITTitle}</h4>
                    <p>{job10Text.eceITDesc}</p>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">{job10Text.eceSpecialNeedsTitle}</h4>
                    <p>{job10Text.eceSpecialNeedsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ECE 취득 프로세스 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECEProcess}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job10Text.eceProcessDesc 등으로 분리 가능 */}
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg mb-8">
                <h3 className="text-white text-xl font-bold mb-4">{job10Text.sectionTitle_ECEProcessDocs}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {job10Text.sectionTitle_ECEProcessDocsList.map((doc, idx) => (
                    <div className="text-gray-200" key={idx}>
                      <h4 className="font-semibold mb-2 text-green-300">{doc.title}</h4>
                      <p>{doc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ECE가 되는 방법들 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECEHow}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              {/* 방법 1: BC주 정부인가 교육프로그램 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job10Text.sectionTitle_ECEHow1}</h3>

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
                />

                <div className="bg-cyan-700/10 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-3">{job10Text.sectionTitle_ECEOverview}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job10Text.sectionTitle_ECEHow2}</h3>

                <BoxListComponent
                  title={job10Text.sectionTitle_Qualification}
                  items={job10Text.koreanQualificationRequirements}
                  titleColor="text-white"
                  spacing="space-y-2"
                  marginBottom="mb-6"
                />

                <MultiColumnListComponent
                  title={job10Text.sectionTitle_KoreanExperience}
                  columns={job10Text.koreanExperienceColumns}
                  gridCols="grid-cols-1 md:grid-cols-2"
                  spacing="space-y-2"
                  marginBottom=""
                />
              </div>

              {/* 방법 3: 타주 자격 전환 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job10Text.sectionTitle_ECEHow3}</h3>

                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job10Text.provinceTransferDesc 등으로 분리 가능 */}
                </p>

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <TableComponent
                    title={job10Text.provinceQualificationTableData.title}
                    headers={job10Text.provinceQualificationTableData.headers}
                    rows={job10Text.provinceQualificationTableData.rows}
                  />
                  <p className="text-gray-400 text-xs mt-4">
                    {job10Text.sectionTitle_ReferenceNotice}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ECE Career Options */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECECareer}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job10Text.sectionTitle_DirectCareers}
                  items={job10Text.eceDirectCareers}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />

                <BoxListComponent
                  title={job10Text.sectionTitle_WorkEnvironments}
                  items={job10Text.eceWorkEnvironments}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job10Text.sectionTitle_Montessori}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-orange-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_ECESuccess}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job10Text.sectionTitle_Success}
                  items={job10Text.eceSuccessFactors}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />

                <BoxListComponent
                  title={job10Text.sectionTitle_Challenges}
                  items={job10Text.eceChallenges}
                  titleColor="text-white text-xl"
                  spacing="space-y-2"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job10Text.sectionTitle_ECEOutlook}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job10Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title={job10Text.sectionTitle_Government}
                  items={job10Text.governmentAgencies.map(agency => `• ${agency}`)}
                />
                <SimpleReferenceListComponent
                  title={job10Text.sectionTitle_Association}
                  items={job10Text.educationAssociations.map(association => `• ${association}`)}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  {job10Text.eceNotice}
                </p>
              </div>
            </div>
          </section>


          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={10} />
        </div>
      </div>
    </div>
  );
};

export default Job10;

