import React from 'react';

import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, SmallTitleListComponent, BorderedListComponent, BoxListComponent, SimpleReferenceListComponent, MultiColumnListComponent, TitleDescriptionGridComponent, ThreeColumnStepComponent, TableComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job11Text as job11Text_ko } from './locales/Job11_ko';
import { job11Text as job11Text_en } from './locales/Job11_en';

const Job11: React.FC = () => {
  const { language } = useLanguage();
  const job11Text = React.useMemo(() => (language === 'ko' ? job11Text_ko : job11Text_en), [language]);
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job11Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 11 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 11</h2>
        </div>
        <div className="absolute left-[66%] top-[38%]">
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
            {job11Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job11Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* Skilled Trade 소개 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_Overview}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job11Text.intro 등으로 분리 가능 */}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job11Text.skilledTradesAdvantages.title}
                  items={job11Text.skilledTradesAdvantages.items}
                  borderColor={job11Text.skilledTradesAdvantages.borderColor}
                  titleColor="text-white"
                />

                <SubSectionWithList
                  title={job11Text.itaBcInfo.title}
                  items={job11Text.itaBcInfo.items}
                  borderColor={job11Text.itaBcInfo.borderColor}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-cyan-700/10 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job11Text.sectionTitle_ReferenceWeb}</h3>
                <TitleDescriptionGridComponent items={job11Text.referenceWebsites} />
              </div>
            </div>
          </section>

          {/* Automotive Service Technician */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_Auto}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job11Text.sectionTitle_AutoJob}</h3>
                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job11Text.autoTechIntro 등으로 분리 가능 */}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job11Text.autoTechMainTasks.title}
                  items={job11Text.autoTechMainTasks.items}
                />

                <BoxListComponent
                  title={job11Text.autoTechRequiredSkills.title}
                  items={job11Text.autoTechRequiredSkills.items}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job11Text.sectionTitle_AutoHow}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <BoxListComponent
                    title={job11Text.autoTechBasicRequirements.title}
                    items={job11Text.autoTechBasicRequirements.items}
                  />

                  <BoxListComponent
                    title={job11Text.autoTechCertificationProcess.title}
                    items={job11Text.autoTechCertificationProcess.items}
                  />
                </div>

                <ThreeColumnStepComponent
                  title={job11Text.sectionTitle_Apprenticeship}
                  steps={job11Text.apprenticeshipSteps}
                />

                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-white font-bold mb-3">{job11Text.sectionTitle_BCEdu}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SmallTitleListComponent
                      title=""
                      items={job11Text.bcEducationInstitutions1}
                      textColor="text-gray-200"
                    />
                    <SmallTitleListComponent
                      title=""
                      items={job11Text.bcEducationInstitutions2}
                      textColor="text-gray-200"
                    />
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="text-white font-bold mb-3">{job11Text.sectionTitle_CareerOptions}</h4>
                  <MultiColumnListComponent
                    title=""
                    columns={[job11Text.careerOptions1, job11Text.careerOptions2]}
                    bgColor="bg-transparent"
                    gridCols="grid-cols-1 md:grid-cols-2"
                    padding="p-0"
                    marginBottom="mb-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Electrician */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_Electrician}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job11Text.sectionTitle_ElectricianJob}</h3>
                <p className="text-gray-200 mb-6">
                  {/* 설명 필요시 job11Text.electricianIntro 등으로 분리 가능 */}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <BoxListComponent
                  title={job11Text.electricianMainTasks.title}
                  items={job11Text.electricianMainTasks.items}
                />

                <BoxListComponent
                  title={job11Text.electricianApplicationAreas.title}
                  items={job11Text.electricianApplicationAreas.items}
                />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{job11Text.sectionTitle_ElectricianHow}</h3>

                {/* 방법 1: 견습프로그램 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">{job11Text.sectionTitle_ElectricianHow1}</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <BoxListComponent
                      title={job11Text.electricianBasicRequirements.title}
                      items={job11Text.electricianBasicRequirements.items}
                      titleColor="text-white"
                    />

                    <BoxListComponent
                      title={job11Text.electricianApprenticeshipProgram.title}
                      items={job11Text.electricianApprenticeshipProgram.items}
                      titleColor="text-white"
                    />
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg mb-6">
                    <h4 className="text-white font-bold mb-3">{job11Text.sectionTitle_Foundation}</h4>
                    <p className="text-gray-200 mb-4">
                      {/* 설명 필요시 job11Text.foundationDesc 등으로 분리 가능 */}
                    </p>
                    <p className="text-gray-200 text-sm">
                      {/* 설명 필요시 job11Text.foundationDesc2 등으로 분리 가능 */}
                    </p>
                  </div>
                </div>

                {/* 교육기관 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">{job11Text.sectionTitle_ElectricianEdu}</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h4 className="text-white font-bold mb-3">{job11Text.sectionTitle_PublicInstitutions}</h4>
                      <SmallTitleListComponent
                        title=""
                        items={job11Text.electricianPublicInstitutions}
                        textColor="text-gray-200"
                      />
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h4 className="text-white font-bold mb-3">{job11Text.sectionTitle_PrivateInstitutions}</h4>
                      <SmallTitleListComponent
                        title=""
                        items={job11Text.electricianPrivateInstitutions}
                        textColor="text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h5 className="text-white font-bold mb-3">{job11Text.sectionTitle_Training}</h5>
                    <TitleDescriptionGridComponent
                      items={job11Text.trainingApprenticeships}
                      titleClass="font-semibold mb-2"
                    />
                  </div>
                </div>

                {/* 방법 2: 자격인증시험 */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4 text-white">{job11Text.sectionTitle_ElectricianHow2}</h4>

                  <p className="text-gray-200 mb-6">
                    {/* 설명 필요시 job11Text.certificationExamDesc 등으로 분리 가능 */}
                  </p>

                  <TableComponent
                    title={job11Text.requiredDocuments.title}
                    headers={job11Text.requiredDocuments.headers}
                    rows={job11Text.requiredDocuments.rows}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skilled Trades 선택 가이드 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_Guide}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">{job11Text.sectionTitle_AutoVsElec}</h3>
                  <div className="space-y-4">
                    <BorderedListComponent
                      title={job11Text.sectionTitle_AutoTech}
                      items={job11Text.automotiveAdvantages}
                      borderColor="border-blue-400"
                      titleColor="text-blue-300"
                    />
                    <BorderedListComponent
                      title={job11Text.sectionTitle_ElecTech}
                      items={job11Text.electricianAdvantages}
                      borderColor="border-green-400"
                      titleColor="text-green-300"
                    />
                  </div>
                </div>

                <BoxListComponent
                  title={job11Text.successFactors.title}
                  items={job11Text.successFactors.items}
                  titleColor="text-white"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job11Text.sectionTitle_Outlook}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">{job11Text.sectionTitle_Positive}</h4>
                    <ul className="space-y-1 text-sm">
                      {job11Text.positiveFactors.map((factor, index) => (
                        <li key={index}>• {factor}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-200">
                    <h4 className="font-semibold mb-2">{job11Text.sectionTitle_Considerations}</h4>
                    <ul className="space-y-1 text-sm">
                      {job11Text.considerations.map((consideration, index) => (
                        <li key={index}>• {consideration}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 기타 Skilled Trades */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_OtherTrades}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BoxListComponent
                  title={job11Text.sectionTitle_Construction}
                  items={job11Text.constructionTrades.items}
                  titleColor="text-white"
                />

                <BoxListComponent
                  title={job11Text.sectionTitle_Manufacturing}
                  items={job11Text.manufacturingTrades.items}
                  titleColor="text-white"
                />

                <BoxListComponent
                  title={job11Text.sectionTitle_Service}
                  items={job11Text.serviceTrades.items}
                  titleColor="text-white"
                />
              </div>
            </div>
          </section>

          {/* 참고 자료 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job11Text.sectionTitle_Reference}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SimpleReferenceListComponent
                  title={job11Text.sectionTitle_Government}
                  items={job11Text.governmentAgencies.map(agency => `• ${agency}`)}
                />
                <SimpleReferenceListComponent
                  title={job11Text.sectionTitle_Industry}
                  items={job11Text.industryAssociations.map(association => `• ${association}`)}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  {job11Text.skilledNotice}
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={11} />
        </div>
      </div>
    </div>
  );
};

export default Job11;

