
import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, BoxListComponent, TitledTwoColumnListComponent,  SimpleReferenceListComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job14Text as job14Text_ko } from './locales/Job14_ko';
import { job14Text as job14Text_en } from './locales/Job14_en';

const Job14: React.FC = () => {
  const { language } = useLanguage();
  const job14Text = useMemo(() => (language === 'ko' ? job14Text_ko : job14Text_en), [language]);
  return (<div className="min-h-screen bg-gray-900">
    {/* 헤더 섹션 */}
    <div className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
      >
        <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
          {job14Text.title}
        </h1>
      </div>
    </div>

    {/* Lecture 1 섹션 */}
    <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
      <img
        src="/imgs/jobacademy/lectureBack.webp"
        alt="Lecture Background"
        className="w-full h-auto object-contain"
      />

      <div className="absolute left-[39%] top-[39%]">
        <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 14</h2>
      </div>
      <div className={`absolute left-[66%] ${language === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
        <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg">
          {job14Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {line}
              {index < job14Text.lectureSubtitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto p-8">
        {/* 웹 디자이너/개발자 소개 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-purple-500">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle1}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>

            <div className="mb-8">
              <p className="text-gray-200 mb-6">
                {job14Text.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <SubSectionWithList
                title={job14Text.strategyTasks.title}
                items={job14Text.strategyTasks.items}
                borderColor={job14Text.strategyTasks.borderColor}
                titleColor="text-white"
              />
              <SubSectionWithList
                title={job14Text.uiDesignTasks.title}
                items={job14Text.uiDesignTasks.items}
                borderColor={job14Text.uiDesignTasks.borderColor}
                titleColor="text-white"
              />
              <SubSectionWithList
                title={job14Text.uxDesignTasks.title}
                items={job14Text.uxDesignTasks.items}
                borderColor={job14Text.uxDesignTasks.borderColor}
                titleColor="text-white"
              />
              <SubSectionWithList
                title={job14Text.developmentTasks.title}
                items={job14Text.developmentTasks.items}
                borderColor={job14Text.developmentTasks.borderColor}
                titleColor="text-white"
              />
            </div>

            <div className="bg-cyan-700/10 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">{job14Text.sectionSubtitle1}</h3>
              <TitledTwoColumnListComponent
                leftColumn={job14Text.integrationImportance.leftColumn}
                rightColumn={job14Text.integrationImportance.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 기술 스택 및 도구 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle2}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.frontendTechTitle}
                items={job14Text.frontendTech}
              />
              <BoxListComponent
                title={job14Text.backendTechTitle}
                items={job14Text.backendTech}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.cmsPlatformsTitle}
                items={job14Text.cmsPlatforms}
              />
              <BoxListComponent
                title={job14Text.designToolsTitle}
                items={job14Text.designTools}
              />
            </div>

            <div className="bg-cyan-700/10 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">{job14Text.sectionSubtitle2}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-gray-200">
                  <h3 className="font-semibold mb-2">{job14Text.devToolsTitle}</h3>
                  <ul className="space-y-1">
                    {job14Text.devTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div className="text-gray-200">
                  <h3 className="font-semibold mb-2">{job14Text.testToolsTitle}</h3>
                  <ul className="space-y-1">
                    {job14Text.testTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
                <div className="text-cyan-200">
                  <h3 className="font-semibold mb-2">{job14Text.deployToolsTitle}</h3>
                  <ul className="space-y-1">
                    {job14Text.deployTools.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 메트로 밴쿠버 지역 학교 프로그램 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle3}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.bcit}
                items={job14Text.metroVancouverSchools.bcit}
              />
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.cdi}
                items={job14Text.metroVancouverSchools.cdi}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.langara}
                items={job14Text.metroVancouverSchools.langara}
              />
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.vcc}
                items={job14Text.metroVancouverSchools.vcc}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.sfu}
                items={job14Text.metroVancouverSchools.sfu}
              />
              <BoxListComponent
                title={job14Text.metroVancouverSchoolsTitles.ubc}
                items={job14Text.metroVancouverSchools.ubc}
              />
            </div>

            <div className="bg-cyan-700/10 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">{job14Text.sectionSubtitle3}</h3>
              <TitledTwoColumnListComponent
                leftColumn={job14Text.metroVancouverSchools.guide.leftColumn}
                rightColumn={job14Text.metroVancouverSchools.guide.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 관련 직업 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle4}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.relatedJobsTitles.creative}
                items={job14Text.relatedJobs.creative}
              />
              <BoxListComponent
                title={job14Text.relatedJobsTitles.development}
                items={job14Text.relatedJobs.development}
              />
              <BoxListComponent
                title={job14Text.relatedJobsTitles.specialized}
                items={job14Text.relatedJobs.specialized}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.relatedJobsTitles.employment}
                items={job14Text.relatedJobs.employment}
              />
              <BoxListComponent
                title={job14Text.relatedJobsTitles.salary}
                items={job14Text.relatedJobs.salary}
              />
            </div>

            <div className="bg-cyan-700/10 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">{job14Text.sectionSubtitle4}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-gray-200">
                  <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.tech}</h3>
                  <ul className="space-y-1">
                    {job14Text.relatedJobs.careerPath.tech.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                  </ul>
                </div>
                <div className="text-gray-200">
                  <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.management}</h3>
                  <ul className="space-y-1">
                    {job14Text.relatedJobs.careerPath.management.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                  </ul>
                </div>
                <div className="text-orange-200">
                  <h3 className="font-semibold mb-2">{job14Text.careerPathTitles.business}</h3>
                  <ul className="space-y-1">
                    {job14Text.relatedJobs.careerPath.business.map((item: string, idx: number) => <li key={idx}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 성공을 위한 조언 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-indigo-500">
            <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle5}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.successAdviceTitles.portfolio}
                items={job14Text.successAdvice.portfolio}
              />
              <BoxListComponent
                title={job14Text.successAdviceTitles.learning}
                items={job14Text.successAdvice.learning}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BoxListComponent
                title={job14Text.successAdviceTitles.networking}
                items={job14Text.successAdvice.networking}
              />
              <BoxListComponent
                title={job14Text.successAdviceTitles.business}
                items={job14Text.successAdvice.business}
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">{job14Text.sectionSubtitle5}</h3>
              <TitledTwoColumnListComponent
                leftColumn={job14Text.successAdvice.longterm.leftColumn}
                rightColumn={job14Text.successAdvice.longterm.rightColumn}
              />
            </div>
          </div>
        </section>

        {/* 참고 자료 */}
        <section className="mb-12">
          <div className="bg-black rounded-lg p-8 border-l-4 border-pink-500">
            <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
              {job14Text.sectionTitle6}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SimpleReferenceListComponent
                title={job14Text.referencesTitles.government}
                items={job14Text.references.government}
              />
              <SimpleReferenceListComponent
                title={job14Text.referencesTitles.community}
                items={job14Text.references.community}
              />
            </div>
            <div className="mt-6 p-4 bg-gray-900  rounded-lg">
              <p className="text-gray-200">
                {job14Text.references.notice}
              </p>
            </div>
          </div>
        </section>

        {/* Job Academy 네비게이션 */}
        <div className="container mx-auto px-4 pb-8">
          <JobAcademyNavigation currentJobId={14} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Job14;

