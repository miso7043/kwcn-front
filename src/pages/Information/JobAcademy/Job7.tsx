import React, { useMemo } from 'react';
import JobAcademyNavigation from '../../../components/features/information/JobAcademyNavigation';
import { SubSectionWithList, ReferenceListComponent, InfoBoxComponent, StepGuideComponent } from './InfoSubComponent';
import useLanguage from '../../../hooks/useLanguage';
import { job7Text as job7Text_ko } from './locales/Job7_ko';
import { job7Text as job7Text_en } from './locales/Job7_en';


const Job7: React.FC = () => {
  const { language } = useLanguage();
  const job7Text = useMemo(() => (language === 'ko' ? job7Text_ko : job7Text_en), [language]);
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <div className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/imgs/jobacademy/jobTitleBack.webp')" }}
        >
          <h1 style={{ paddingTop: '2.5rem', fontSize: '5rem', fontWeight: '900', textShadow: '3px 3px 6px rgba(0,0,0,0.9)', color: 'white' }}>
            {job7Text.title}
          </h1>
        </div>
      </div>

      {/* Lecture 7 섹션 */}
      <div className="relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3">
        <img
          src="/imgs/jobacademy/lectureBack.webp"
          alt="Lecture Background"
          className="w-full h-auto object-contain"
        />

        <div className="absolute left-[39%] top-[39%]">
          <h2 className="font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]">Lecture 7</h2>
        </div>
        <div className={`absolute left-[66%] ${language === 'ko' ? 'top-[38%]' : 'top-[26%]'}`}>
          <h2 className="text-[clamp(1rem,2.5vw,3rem)] font-bold text-white drop-shadow-lg ">
            {job7Text.lectureSubtitle.split('\n').map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                {index < job7Text.lectureSubtitle.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto p-8">
          {/* 직장에서 임금 받기 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job7Text.sectionTitle1}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  {job7Text.section1Description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job7Text.paymentRules.title}
                  items={job7Text.paymentRules.items}
                  borderColor={job7Text.paymentRules.borderColor}
                />

                <SubSectionWithList
                  title={job7Text.wageStandards.title}
                  items={job7Text.wageStandards.items}
                  borderColor={job7Text.wageStandards.borderColor}
                />

                <SubSectionWithList
                  title={job7Text.deductionsRecords.title}
                  items={job7Text.deductionsRecords.items}
                  borderColor={job7Text.deductionsRecords.borderColor}
                />

                <SubSectionWithList
                  title={job7Text.tipsUniforms.title}
                  items={job7Text.tipsUniforms.items}
                  borderColor={job7Text.tipsUniforms.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job7Text.vacationPay.title}
                  items={job7Text.vacationPay.items}
                  borderColor={job7Text.vacationPay.borderColor}
                />

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-white text-xl font-bold mb-4">{job7Text.holidayPayCalculation.title}</h3>
                  <div className="text-white">
                    <p className="mb-2"><strong>{job7Text.holidayPayCalculation.formulaLabel}</strong> {job7Text.holidayPayCalculation.formula}</p>
                    <p className="mb-2"><strong>{job7Text.holidayPayCalculation.workingHolidayTitle}</strong></p>
                    <ul className="ml-4 space-y-1">
                      {job7Text.holidayPayCalculation.workingHolidayRules.map((rule, index) => (
                        <li key={index}>• {rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 사직 또는 해고 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-emerald-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job7Text.sectionTitle2}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  {job7Text.section2Description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <SubSectionWithList
                  title={job7Text.employeeResignation.title}
                  items={job7Text.employeeResignation.items}
                  borderColor={job7Text.employeeResignation.borderColor}
                />

                <SubSectionWithList
                  title={job7Text.employerTermination.title}
                  items={job7Text.employerTermination.items}
                  borderColor={job7Text.employerTermination.borderColor}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <SubSectionWithList
                    title={job7Text.justCause.title}
                    items={job7Text.justCause.items}
                    borderColor={job7Text.justCause.borderColor}
                  />
                  <div className="mt-4 p-3 bg-yellow-600/20 rounded">
                    <p className="text-white text-sm">
                      {job7Text.justCause.note}
                    </p>
                  </div>
                </div>

                <SubSectionWithList
                  title={job7Text.layoff.title}
                  items={job7Text.layoff.items}
                  borderColor={job7Text.layoff.borderColor}
                />
              </div>

              <InfoBoxComponent
                title={job7Text.finalWageComposition.title}
                description={job7Text.finalWageComposition.description}
                items={job7Text.finalWageComposition.items}
                bgColor="bg-cyan-900/20"
                textColor="text-white"
              />
            </div>
          </section>

          {/* 법정 공휴일 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job7Text.sectionTitle3}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>

              <div className="mb-8">
                <p className="text-gray-200 text-lg mb-6">
                  {job7Text.section3Description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <StepGuideComponent
                  title={job7Text.holidayPaySteps.title}
                  steps={job7Text.holidayPaySteps.steps}
                  bgColor="bg-gray-900"
                  textColor="text-white"
                />

                <SubSectionWithList
                  title={job7Text.holidayReplacement.title}
                  items={job7Text.holidayReplacement.items}
                  borderColor={job7Text.holidayReplacement.borderColor}
                />
              </div>

              <div className="bg-indigo-900/10 border border-indigo-600/20 p-6 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">{job7Text.bcHolidaysTitle}</h3>
                <ReferenceListComponent
                  leftColumn={job7Text.bcHolidays.leftColumn}
                  rightColumn={job7Text.bcHolidays.rightColumn}
                />
              </div>
            </div>
          </section>

          {/* 참고 링크 */}
          <section className="mb-12">
            <div className="bg-black rounded-lg p-8 border-l-4 border-red-500">
              <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
                {job7Text.sectionTitle4}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
              </h2>
              <ReferenceListComponent
                leftColumn={job7Text.references.leftColumn}
                rightColumn={job7Text.references.rightColumn}
              />
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-gray-200 text-sm">
                  {job7Text.references.notice}
                </p>
              </div>
            </div>
          </section>

          {/* Job Academy 네비게이션 */}
          <JobAcademyNavigation currentJobId={7} />
        </div>
      </div>
    </div>
  );
};

export default Job7;